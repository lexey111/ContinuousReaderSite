#!/usr/bin/env bash
# Bake transparent rounded corners into screenshot WebP(s).
#
# Why: macOS window captures via `screencapture -R x,y,w,h` grab a flat
# rectangle, which at the window's real rounded corners includes a few pixels
# of whatever was *behind* the window (the desktop) — dark "nubs" that a CSS
# border-radius can't fully cover. Baking a rounded mask clips those away and
# gives a clean macOS-style corner that scales with the image.
#
# Usage: tools/round-corners.sh img/screenshots/features-foo.webp [...]
# Requires: dwebp + cwebp (brew install webp), rsvg-convert (brew install librsvg).
set -euo pipefail

RSVG=$(command -v rsvg-convert || echo /opt/homebrew/bin/rsvg-convert)
command -v dwebp >/dev/null || { echo "dwebp missing — brew install webp"; exit 1; }

for f in "$@"; do
  [ -e "$f" ] || { echo "skip (missing): $f"; continue; }
  png=$(mktemp -t rc).png
  dwebp -quiet "$f" -o "$png"
  w=$(sips -g pixelWidth "$png" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$png" | awk '/pixelHeight/{print $2}')
  min=$(( w < h ? w : h ))
  r=$(( min * 22 / 1000 ))   # ~2.2% of the short edge — clears the corner nub
  b64=$(base64 < "$png" | tr -d '\n')
  svg=$(mktemp -t rc).svg
  printf '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="%d" height="%d"><defs><clipPath id="r"><rect width="%d" height="%d" rx="%d" ry="%d"/></clipPath></defs><image width="%d" height="%d" xlink:href="data:image/png;base64,%s" clip-path="url(#r)"/></svg>' \
    "$w" "$h" "$w" "$h" "$r" "$r" "$w" "$h" "$b64" > "$svg"
  out=$(mktemp -t rc).png
  "$RSVG" -w "$w" -h "$h" -o "$out" "$svg"
  cwebp -q 88 -quiet "$out" -o "$f"
  rm -f "$png" "$svg" "$out"
  echo "rounded $(basename "$f")  (${w}x${h}, r=${r})"
done
