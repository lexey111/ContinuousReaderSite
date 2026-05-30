#!/usr/bin/env python3
"""Wrap a bare device screenshot (e.g. from `xcrun simctl io booted screenshot`)
in a clean device frame — rounded bezel, subtle rim, soft drop shadow on a
transparent background. Proportional to the input, so it works for any
iPhone/iPad portrait (or landscape) screenshot.

Usage:
    python3 tools/frame-device.py <input.png> <output.png>

Requires `rsvg-convert` (Homebrew: `brew install librsvg`).
"""
import sys, os, base64, struct, subprocess


def png_size(path):
    with open(path, "rb") as f:
        head = f.read(24)
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        raise SystemExit(f"{path} is not a PNG")
    w, h = struct.unpack(">II", head[16:24])
    return w, h


def main():
    if len(sys.argv) != 3:
        raise SystemExit("usage: frame-device.py <input.png> <output.png>")
    inp, out = sys.argv[1], sys.argv[2]
    sw, sh = png_size(inp)
    mn = min(sw, sh)

    bezel = round(mn * 0.038)        # uniform bezel thickness
    screen_r = round(mn * 0.045)     # screen corner radius
    device_r = screen_r + bezel      # outer corner radius
    margin = round(mn * 0.085)       # transparent margin for the drop shadow
    cam = max(5, round(mn * 0.006))  # front-camera dot

    dw, dh = sw + 2 * bezel, sh + 2 * bezel          # device body
    cw, ch = dw + 2 * margin, dh + 2 * margin        # full canvas
    dx, dy = margin, margin                          # device top-left
    scx, scy = margin + bezel, margin + bezel        # screen top-left

    b64 = base64.b64encode(open(inp, "rb").read()).decode()
    blur = round(mn * 0.022)
    drop = round(mn * 0.012)

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{cw}" height="{ch}" viewBox="0 0 {cw} {ch}">
  <defs>
    <clipPath id="screen"><rect x="{scx}" y="{scy}" width="{sw}" height="{sh}" rx="{screen_r}" ry="{screen_r}"/></clipPath>
    <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2c2e33"/>
      <stop offset="0.5" stop-color="#0c0d0f"/>
      <stop offset="1" stop-color="#1b1c20"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/>
      <feOffset dy="{drop}" result="b"/>
      <feFlood flood-color="#000000" flood-opacity="0.45"/>
      <feComposite in2="b" operator="in"/>
    </filter>
  </defs>
  <rect x="{dx}" y="{dy}" width="{dw}" height="{dh}" rx="{device_r}" ry="{device_r}" filter="url(#shadow)"/>
  <rect x="{dx}" y="{dy}" width="{dw}" height="{dh}" rx="{device_r}" ry="{device_r}" fill="url(#body)"/>
  <rect x="{dx+1}" y="{dy+1}" width="{dw-2}" height="{dh-2}" rx="{device_r-1}" ry="{device_r-1}"
        fill="none" stroke="#ffffff" stroke-opacity="0.10" stroke-width="2"/>
  <image x="{scx}" y="{scy}" width="{sw}" height="{sh}" clip-path="url(#screen)"
         href="data:image/png;base64,{b64}"/>
  <circle cx="{cw/2}" cy="{dy + bezel/2}" r="{cam}" fill="#0a0a0a"/>
  <circle cx="{cw/2}" cy="{dy + bezel/2}" r="{round(cam*0.45)}" fill="#243038"/>
</svg>"""

    svg_path = out + ".tmp.svg"
    with open(svg_path, "w") as f:
        f.write(svg)
    subprocess.run(["rsvg-convert", "-w", str(cw), "-h", str(ch), "-f", "png", "-o", out, svg_path], check=True)
    os.remove(svg_path)
    print(f"framed {inp} ({sw}x{sh}) -> {out} ({cw}x{ch})")


if __name__ == "__main__":
    main()
