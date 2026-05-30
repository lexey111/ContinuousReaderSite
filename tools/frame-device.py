#!/usr/bin/env python3
"""Wrap a bare device screenshot (e.g. from `xcrun simctl io booted screenshot`)
in a realistic device frame — rounded titanium-style edge with sheen + corner
glints, thin black bezel, side buttons, and a soft drop shadow on a transparent
background. The profile (phone vs tablet) is picked from the aspect ratio, so
corner radius / bezel / buttons match the device class.

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
    portrait = sh >= sw
    aspect = max(sw, sh) / mn
    phone = aspect >= 1.8

    # Geometry (proportional to the short edge). Phones have a much larger
    # screen corner radius and a thinner bezel than tablets.
    if phone:
        rim = round(mn * 0.012)      # bright metal edge band
        bezel = round(mn * 0.022)    # black border between metal and screen
        screen_r = round(mn * 0.135) # screen corner radius (large on iPhone)
    else:
        rim = round(mn * 0.009)
        bezel = round(mn * 0.028)
        screen_r = round(mn * 0.040)

    border = rim + bezel
    device_r = screen_r + border
    margin = round(mn * 0.09)        # transparent margin for shadow + buttons
    btn_out = max(2, round(rim * 0.7))  # how far buttons protrude (subtle)
    glint_op = 0.30 if phone else 0.04  # tablet edge is barely specular

    dw, dh = sw + 2 * border, sh + 2 * border
    cw, ch = dw + 2 * margin, dh + 2 * margin
    dx, dy = margin, margin
    scx, scy = margin + border, margin + border
    blur = round(mn * 0.024)
    drop = round(mn * 0.013)

    # ---- buttons (straddle the device edge) ------------------------------
    # Each entry: (side, start_fraction, length_fraction) along that edge.
    if phone:
        btns = [("left", 0.150, 0.052), ("left", 0.235, 0.088), ("left", 0.340, 0.088),  # action, vol+, vol-
                ("right", 0.250, 0.130), ("right", 0.430, 0.070)]                          # side, camera control
    else:
        btns = [("top", 0.80, 0.10),                                                       # power (top edge, near corner)
                ("right", 0.055, 0.072), ("right", 0.150, 0.072)]                          # volume pair

    def button(side, sf, lf):
        if side in ("left", "right"):
            y0, ln = dy + dh * sf, dh * lf
            r = min(btn_out, ln / 2)
            x = (dx - btn_out) if side == "left" else (dx + dw - rim)
            w = btn_out + rim
            bx, by, bw, bh = x, y0, w, ln
        else:  # top
            x0, ln = dx + dw * sf, dw * lf
            r = min(btn_out, ln / 2)
            bx, by, bw, bh = x0, dy - btn_out, ln, btn_out + rim
        return (f'<rect x="{bx:.1f}" y="{by:.1f}" width="{bw:.1f}" height="{bh:.1f}" '
                f'rx="{r:.1f}" ry="{r:.1f}" fill="url(#btn)"/>'
                f'<rect x="{bx:.1f}" y="{by:.1f}" width="{bw:.1f}" height="{bh:.1f}" '
                f'rx="{r:.1f}" ry="{r:.1f}" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>')

    buttons = "".join(button(*b) for b in btns)

    b64 = base64.b64encode(open(inp, "rb").read()).decode()

    # Glint positions (top-left & bottom-right outer corners).
    g = round(mn * 0.11)
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{cw}" height="{ch}" viewBox="0 0 {cw} {ch}">
  <defs>
    <clipPath id="screen"><rect x="{scx}" y="{scy}" width="{sw}" height="{sh}" rx="{screen_r}" ry="{screen_r}"/></clipPath>
    <clipPath id="body"><rect x="{dx}" y="{dy}" width="{dw}" height="{dh}" rx="{device_r}" ry="{device_r}"/></clipPath>
    <!-- metallic edge: sheen bands across a diagonal -->
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"    stop-color="#7c7f86"/>
      <stop offset="0.16" stop-color="#2a2c31"/>
      <stop offset="0.34" stop-color="#16171b"/>
      <stop offset="0.5"  stop-color="#34363b"/>
      <stop offset="0.66" stop-color="#16171b"/>
      <stop offset="0.84" stop-color="#2a2c31"/>
      <stop offset="1"    stop-color="#7c7f86"/>
    </linearGradient>
    <linearGradient id="btn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0e0f12"/>
      <stop offset="0.5" stop-color="#3a3d43"/>
      <stop offset="1" stop-color="#0e0f12"/>
    </linearGradient>
    <radialGradient id="glint" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ffffff" stop-opacity="{glint_op}"/>
      <stop offset="0.7" stop-color="#ffffff" stop-opacity="{glint_op*0.15:.3f}"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/>
      <feOffset dy="{drop}" result="b"/>
      <feFlood flood-color="#000000" flood-opacity="0.45"/>
      <feComposite in2="b" operator="in"/>
    </filter>
  </defs>

  <!-- drop shadow -->
  <rect x="{dx}" y="{dy}" width="{dw}" height="{dh}" rx="{device_r}" ry="{device_r}" filter="url(#shadow)"/>

  <!-- side buttons (behind the body so only the protruding part shows) -->
  {buttons}

  <!-- metal body -->
  <rect x="{dx}" y="{dy}" width="{dw}" height="{dh}" rx="{device_r}" ry="{device_r}" fill="url(#metal)"/>
  <!-- bright outer rim highlight + inner shade for a rounded-edge feel -->
  <rect x="{dx+0.75}" y="{dy+0.75}" width="{dw-1.5}" height="{dh-1.5}" rx="{device_r-1}" ry="{device_r-1}"
        fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/>
  <rect x="{dx+rim*0.5}" y="{dy+rim*0.5}" width="{dw-rim}" height="{dh-rim}" rx="{device_r-rim*0.5}" ry="{device_r-rim*0.5}"
        fill="none" stroke="#000000" stroke-opacity="0.5" stroke-width="{max(1, round(rim*0.4))}"/>

  <!-- black bezel -->
  <rect x="{dx+rim}" y="{dy+rim}" width="{dw-2*rim}" height="{dh-2*rim}" rx="{device_r-rim}" ry="{device_r-rim}" fill="#000000"/>

  <!-- screen -->
  <image x="{scx}" y="{scy}" width="{sw}" height="{sh}" clip-path="url(#screen)" href="data:image/png;base64,{b64}"/>
  <!-- seat the screen with a thin dark hairline -->
  <rect x="{scx}" y="{scy}" width="{sw}" height="{sh}" rx="{screen_r}" ry="{screen_r}"
        fill="none" stroke="#000000" stroke-opacity="0.55" stroke-width="{max(1, round(mn*0.003))}"/>

  <!-- corner glints, clipped to the metal edge so they hug the rounded corner -->
  <g clip-path="url(#body)">
    <circle cx="{dx + device_r*0.32}" cy="{dy + device_r*0.32}" r="{g}" fill="url(#glint)"/>
    <circle cx="{dx + dw - device_r*0.32}" cy="{dy + dh - device_r*0.32}" r="{g}" fill="url(#glint)"/>
  </g>
</svg>"""

    svg_path = out + ".tmp.svg"
    with open(svg_path, "w") as f:
        f.write(svg)
    subprocess.run(["rsvg-convert", "-w", str(cw), "-h", str(ch), "-f", "png", "-o", out, svg_path], check=True)
    os.remove(svg_path)
    print(f"framed {inp} ({sw}x{sh}, {'phone' if phone else 'tablet'}) -> {out} ({cw}x{ch})")


if __name__ == "__main__":
    main()
