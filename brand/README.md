# Project Pineapple logo files

The mark is a pineapple with a pine crown over a gold body. Use these files
anywhere the logo appears, so every product shows the same drawing.

## Which file to use

| Use | File |
| --- | --- |
| On a light background, 64px tall or more | `svg/mark.svg` |
| On a light background, under 64px (headers, nav bars) | `svg/mark-small.svg` |
| On pine or another dark background, 64px or more | `svg/mark-reversed.svg` |
| On a dark background, under 64px | `svg/mark-reversed-small.svg` |
| Mark and wordmark together, light background | `svg/lockup.svg` |
| Mark and wordmark together, dark background | `svg/lockup-reversed.svg` |
| Browser favicon | `svg/favicon.svg`, with `png/favicon-32.png` and `png/favicon-16.png` as fallbacks |
| iOS home screen | `png/apple-touch-icon-180.png` (square; iOS rounds it) |
| App icon in SVG | `svg/icon-tile.svg` (rounded), `svg/icon-tile-square.svg` |
| Android and web app manifest | `png/icon-192.png`, `png/icon-512.png` |
| Google sign-in consent screen (120 by 120) | `png/icon-120.png` |
| Anywhere that needs a PNG of the mark alone | `png/mark-512.png`, `png/mark-1024.png` (transparent) |

The small drawings have a coarser lattice so the body does not turn to
noise. The 16px favicon drops the lattice altogether.

The favicon is the mark on its own, with no tile behind it, so it is as
large as the tab allows. The SVG turns the crown cream when the browser is
in dark mode. A PNG cannot do that, so the two PNG fallbacks use a brighter
green crown (`#3a7553`) that shows on light and dark tab bars alike. App
icons need a background, so those stay on a pine tile.

## Colours

| Name | Hex | Where |
| --- | --- | --- |
| Pine | `#22402f` | Crown on light backgrounds, icon tile, wordmark |
| Gold | `#F0B429` | Body, on every background |
| Cream | `#faf5ee` | Crown and wordmark on dark backgrounds, page background |

On a dark background other than pine, such as the app's navy (`#15202B`),
use the reversed files as they are: cream crown, gold body.

Gold is the mark's own colour. On the website the accent colour for text
and small details is clay, `#c1613c`, not gold.

## Notes

- The wordmark in the lockups is "Project Pineapple" in Libre Caslon
  Display, title case, set with the font's own kerning and converted to
  outlines, so no font is needed. To set it as live text instead, use
  Libre Caslon Display at about three quarters of the mark's height, with
  letter-spacing of -0.008em.
- The SVGs use masks to cut the lattice out of the body, so the lattice
  shows whatever is behind the mark. If a tool does not render SVG masks,
  use the PNGs.
- Keep clear space around the mark of at least a quarter of its width.
  Do not recolour it outside the two versions here, stretch it, or put the
  light-background version on a dark background.
