# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/0xk1xHunter/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/0xk1xHunter/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 30-second vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC). The clip opens on the best of Rockstar's Grand Theft Auto VI Trailer 2 — Lucia and Jason on a jet ski off Vice City — cuts through the trailer's biggest moments (helicopter over the swamps, the biker and the plane, neon night streets, the sunset skyline, the VI logo), then turns to the viewer: make clips like this with AI and earn money on make.fun. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

The entry is the YouTube video itself: `VIDEO.json` holds its address, and `main.ts` hands that file to `/output`, where the gate reads it and checks the video through the YouTube Data API. Places go by the video's views, the most first.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=w34dmtzc&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
