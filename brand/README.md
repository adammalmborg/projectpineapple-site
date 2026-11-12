# Project Pineapple logo files

The mark is a pineapple with a pine crown over a clay body. Use these files
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
| Browser favicon | `svg/icon-tile.svg`, `png/icon-32.png`, `png/icon-16.png` |
| iOS home screen | `png/apple-touch-icon-180.png` (square; iOS rounds it) |
| Android and web app manifest | `png/icon-192.png`, `png/icon-512.png` |
| Google sign-in consent screen (120 by 120) | `png/icon-120.png` |
| Anywhere that needs a PNG of the mark alone | `png/mark-512.png`, `png/mark-1024.png` (transparent) |

The small drawings have a coarser lattice so the body does not turn to
noise. The 16px icon drops the lattice altogether.

## Colours

| Name | Hex | Where |
| --- | --- | --- |
| Pine | `#22402f` | Crown on light backgrounds, icon tile, wordmark |
| Clay | `#c1613c` | Body on light backgrounds |
| Cream | `#faf5ee` | Crown on dark backgrounds, page background |
| Light clay | `#e0a184` | Body on dark backgrounds |

## Notes

- The wordmark in the lockups is Libre Caslon Text, uppercase, tracked
  0.06em, converted to outlines, so no font is needed. It is set without
  kerning pairs. That is fine on screen; have it checked before print.
- The SVGs use masks to cut the lattice out of the body, so the lattice
  shows whatever is behind the mark. If a tool does not render SVG masks,
  use the PNGs.
- Keep clear space around the mark of at least a quarter of its width.
  Do not recolour it outside the two versions here, stretch it, or put the
  light-background version on a dark background.
