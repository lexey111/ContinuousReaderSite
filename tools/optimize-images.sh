#!/usr/bin/env bash
# Convert screenshot PNGs to web-optimized WebP (keeps alpha for the framed
# device shots; downscales the oversized captures). WebP is ~4-6x smaller than
# the source PNGs and is supported by all the site's target browsers.
#
# Usage: Tools/optimize-images.sh [DIR]   (default: img/screenshots)
# Requires cwebp (brew install webp) and sips (built in).
#
# Workflow for NEW screenshots: drop the .png in, run this, commit the .webp
# (the HTML references .webp). Tune QUALITY / MAXEDGE below if needed.
set -euo pipefail

DIR="${1:-img/screenshots}"
QUALITY=82       # WebP quality (sharp UI/text reads well at 82)
MAXEDGE=2000     # cap the long edge (lightbox stays crisp, files stay small)

command -v cwebp >/dev/null || { echo "cwebp missing — run: brew install webp"; exit 1; }

before=0; after=0; n=0
for f in "$DIR"/*.png; do
  [ -e "$f" ] || continue
  out="${f%.png}.webp"
  tmp="$(mktemp -t optimg).png"
  sips -Z "$MAXEDGE" "$f" --out "$tmp" >/dev/null 2>&1
  cwebp -q "$QUALITY" -quiet "$tmp" -o "$out"
  rm -f "$tmp"
  b=$(stat -f%z "$f"); a=$(stat -f%z "$out")
  before=$((before+b)); after=$((after+a)); n=$((n+1))
  printf "  %-42s %5sK -> %5sK\n" "$(basename "$out")" "$((b/1024))" "$((a/1024))"
done
echo "Converted $n image(s): $((before/1024))K -> $((after/1024))K"
