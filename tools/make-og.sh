#!/bin/sh
# Regenerate img/og-image.png (1200×630 social card) from tools/og-image.html.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --allow-file-access-from-files --force-device-scale-factor=2 \
  --window-size=1200,630 --virtual-time-budget=4000 \
  --screenshot="$ROOT/img/og-image@2x.png" \
  "file://$ROOT/tools/og-image.html"
# Downscale the 2× capture to the spec 1200×630 for crisp text.
sips -z 630 1200 "$ROOT/img/og-image@2x.png" --out "$ROOT/img/og-image.png" >/dev/null
rm -f "$ROOT/img/og-image@2x.png"
echo "wrote img/og-image.png"
