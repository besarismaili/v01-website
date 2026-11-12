# Reels archive (local only)

Every compositing / show reel found on disk, gathered here so the site repo is
the one place to look. **The media is gitignored** — only this index is tracked.
Nothing in here is served by the site; the published reels live in
`public/videos/reel/` (studio reel) and `public/videos/work/sola/reel/` (Sola).

Total: ~1.05 GB across 10 files.

| File | Duration | Format | Size | What it is |
|---|---|---|---|---|
| `2025-compositing-reel.mp4` | 1:05 | 1920×1080 h264 | 111 MB | 2025 compositing reel (Superman, Transformers, Atlas) |
| `2024-compositing-reel.mp4` | 1:15 | 1920×1080 h264 | 87 MB | 2024 compositing reel (Atlas, NOPE) |
| `2023-compositing-reel.mp4` | 0:59 | 1920×1080 h264 | 65 MB | 2023 compositing reel — ends on the "Besar Ismaili / Senior Compositor / 2023" card |
| `2022-compositing-reel.mp4` | 1:00 | 1920×1080 h264 | 21 MB | 2022 compositing reel (NOPE) |
| `transformers-reel.mp4` | 1:19 | 1920×1080 h264 | 97 MB | Transformers-focused cut (Rise of the Beasts material) |
| `reel-48s-nope-atlas.mp4` | 0:49 | 1920×1080 h264 | 41 MB | Short cut, NOPE + Atlas trailer shot |
| `reel-65s-800p-atlas.mp4` | 1:05 | 1920×800 h264 | 78 MB | 2.4:1 cut, Atlas material (same runtime as the 2025 reel) |
| `reel-long-135s-creator.mp4` | 2:15 | 1920×1080 h264 | 43 MB | Long cut, The Creator material. Arrived as `videoplayback.mp4` |
| `mpc-breakdown-220s.mp4` | 3:40 | 1920×1080 h264 | 66 MB | MPC Film breakdown, not a reel — kept with them |
| `masters/2025-reel-4k-prores-excerpt-11s.mov` | 0:11 | 3840×2160 ProRes + PCM | 445 MB | Only 4K ProRes file on disk: an **excerpt** of the 2025 reel (255 frames), not a full master |

## Source paths (if anything needs re-pulling)

Most came from `W:/besar/reel/` and its `bsr-20251225T080839Z-3-002/bsr/` subfolder.
`reel-long-135s-creator.mp4` was `W:/besar/reel/videoplayback.mp4`.

## Skipped as exact duplicates

- `reel(800p) (web).mp4` (35.7 MB, 1920×800) — byte-identical to `W:/code/besar/public/reel.mp4`; the
  higher-bitrate encode of the same cut is kept as `reel-65s-800p-atlas.mp4`.
- `showreel 2_1.mp4` (58.2 MB, 1920×800) — same 0:49 cut as `reel-48s-nope-atlas.mp4`, smaller frame.
- `bsr-20251225T080839Z-3-002/bsr/_besar_ismaili_compositing_reel_2024.mp4` — same file as the top-level 2024 reel.

## Not here yet

Nine older pieces exist only on `vimeo.com/besarismaili`: ShowReel 2012, Tv shows 2013,
Demo Reel, WW2 Fighter, Football, Google, RealFlow Test, Particular 2.0, K.
Vimeo refuses anonymous downloads and the Chrome/Edge cookie jars fail to decrypt
(`yt-dlp --cookies-from-browser` DPAPI error), so they stay on Vimeo for now.
