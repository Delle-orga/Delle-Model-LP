# Delle Model — SEO & distribution playbook

Grounded plan for getting traffic to **https://dellemodel.app**. The wedge: a brand-new
domain won't rank for head terms soon, so we (1) own the low-competition **"gallery-dl GUI"**
keyword on-page, and (2) get **referral traffic + backlinks** from the data-hoarder / gallery-dl /
yt-dlp communities now. SEO compounds over months; distribution pays this week.

---

## Positioning wedge
Lead with **"a GUI for gallery-dl & yt-dlp that organizes your downloads by creator"**.
- `gallery-dl gui` = highest value, lowest competition (the SERP is bare GitHub repos, no real landing page). ✅ we now have `/gallery-dl-gui.html`.
- `yt-dlp gui` = bigger but crowded → only chase long-tail ("yt-dlp gui organize downloads") + directories.
- `stash alternative no docker` / `organize onlyfans/fansly downloads by creator` = low-competition, high-intent.
- Differentiator to hammer everywhere: competitors **download** — Delle **organizes after download** (per-creator library, metadata backfill, dedup).

---

## Ready-to-paste blurbs

**One-liner**
> Delle Model — a free, 100% local desktop GUI for gallery-dl & yt-dlp that organizes everything you download into a library, one profile per creator.

**Short (directories)**
> Delle Model is a free desktop app (Windows, macOS, Linux) that downloads with gallery-dl & yt-dlp and then organizes it all into a browsable library — one profile per creator with their videos, images, tags, favorites and notes. It backfills post dates and tags from the sidecar metadata, de-duplicates with exact SHA-256 + perceptual hashing, auto-syncs from a watched folder, and stays 100% local: no cloud, no account, no telemetry.

**Reddit / forum (value-first, disclose you're the dev)**
> I kept using gallery-dl and yt-dlp to archive creator content, but once the files landed I had no real way to browse them — just folders, no context, and tons of re-downloaded dupes. So I built a desktop app that uses gallery-dl/yt-dlp to download and then turns the result into a library organized by creator: each creator gets one profile with all their videos/images, tags, favorites, notes, and an activity timeline when the media has post dates. It reads the gallery-dl/yt-dlp sidecar JSON to backfill dates and tags onto old downloads, de-dupes with exact + perceptual hashing, and watches folders so new downloads auto-import. It's 100% local — no cloud, no account, no telemetry — and free in closed beta. Full disclosure, I'm the dev. Happy to answer anything and take feedback on what's missing.

---

## Distribution targets (priority order)

### High priority — do first
| Target | URL | How to submit |
|---|---|---|
| **AlternativeTo** | https://alternativeto.net/ | Account → "Suggest new application". Platforms Windows/macOS/Linux, License Free, tags: media-organizer, gallery-dl, yt-dlp, downloader, archiving. Then "Suggest Alternatives" on gallery-dl, yt-dlp, Stash, Hydrus, Whisparr, Obscura pages. Keep wording SFW. |
| **r/DataHoarder** | https://www.reddit.com/r/DataHoarder/ | Best audience. Build a little karma first, read sidebar. Value-first Show & Tell: lead with the problem, screenshots + a swipe-mode/timeline clip, disclose you're the dev, right flair. |
| **GitHub Topics** | https://github.com/topics/gallery-dl-gui | On the public repo add topics: gallery-dl-gui, yt-dlp-gui, gallery-dl, yt-dlp, data-hoarder, media-organizer, electron. Free, instant. |
| **awesome-datahoarding** | https://github.com/simon987/awesome-datahoarding | Fork → add one-line entry under GUI front-ends / local media → PR matching existing format. |
| **Product Hunt** | https://www.producthunt.com/ | Warm an account NOW (~30 days history) so a launch isn't flagged. SFW listing, GIF of swipe/timeline, maker first-comment with the local-first story. |
| **SaaSHub** | https://www.saashub.com/submit | Submit product (Free pricing, screenshots, tags). Verify with a dellemodel.app email for dofollow. List as alternative on competitor pages. |

### Medium priority
| Target | URL | How to submit |
|---|---|---|
| **gallery-dl Discussions** | https://github.com/mikf/gallery-dl/discussions | Show & Tell post: a GUI/organizer built on gallery-dl that reads + backfills sidecar metadata. Also answer "is there a GUI?" threads helpfully. |
| **yt-dlp Discussions** | https://github.com/yt-dlp/yt-dlp/discussions | Show & Tell, lead with the organize-after-download angle. |
| **Slant** | https://www.slant.co/ | "Add Option" on "best gallery-dl/yt-dlp GUI" / "best apps to organize a media collection" with real Pros/Cons. |
| **BetaList** | https://betalist.com/submit | Perfect fit (closed beta). Free submission. |
| **TinyLaunch** | https://www.tinylaunch.com/ | Quick listing, dofollow + indie/X referral. |
| **PeerPush** | https://peerpush.net/ | Free listing, dofollow; participate a bit. |
| **SourceForge** | https://sourceforge.net/ | Create a project, mirror GitHub releases, category Multimedia/Video/File Management. High-DA dofollow + download referrals. |
| **Softpedia** | https://www.softpedia.com/ | "Submit software" (PAD file ok). Reviewed dofollow listing. |
| **Stash community** | https://github.com/stashapp/stash | Near-identical audience. Don't spam — mention differentiators where users ask about downloading/simpler organizers. |

### Low priority / opportunistic
| Target | URL | Notes |
|---|---|---|
| **LibHunt** | https://www.libhunt.com/ | Best with a public repo; appears as alternative on competitor pages. |
| **Indie Hackers** | https://www.indiehackers.com/ | Build-in-public / Show IH thread; pairs with Product Hunt. |
| **Uptodown** | https://en.uptodown.com/ | Download-portal listing + referral. |
| **r/selfhosted** | https://www.reddit.com/r/selfhosted/ | Only if you lead with the opt-in LAN access angle (it's a desktop app, not a Docker service). |

---

## On-page status (done in this repo)
- ✅ Homepage `<title>` / meta / OG / Twitter / JSON-LD now lead with the gallery-dl & yt-dlp GUI wedge (H1 stays library-first).
- ✅ Hero copy weaves in "desktop GUI for gallery-dl & yt-dlp".
- ✅ FAQ rewritten with keyword-rich, truthful long-tail Q&As + matching FAQPage schema; dead `#roadmap` link and placeholder footer links fixed.
- ✅ `/gallery-dl-gui.html` landing page shipped (comparison table, feature grid, CTA) + added to sitemap + linked from footer.

## On-page still to do
- [ ] `/yt-dlp-gui` page (clone of `/gallery-dl-gui.html`, lead with organize-after-download).
- [ ] `/organize-gallery-dl-yt-dlp-downloads-by-creator` how-to (show the manual gallery-dl `directory` / yt-dlp `-o` config, then position Delle as the no-config GUI). Great link-bait.
- [ ] Cross-link the three pages to each other once they exist.
- [ ] Add `favicon.png` at root (TODO already noted in index.html).
- [ ] Optionally add FAQPage JSON-LD to the homepage too.

## Quick-win order (highest ROI first)
1. Homepage title/meta wedge — done.
2. Hero keyword line — done.
3. FAQ rewrite + schema — done.
4. Ship `/gallery-dl-gui.html` — done.
5. AlternativeTo (+ alternative on competitor pages).
6. GitHub Topics on the public repo.
7. Publish the organize-by-creator how-to.
8. r/DataHoarder Show & Tell.
9. awesome-datahoarding PR + gallery-dl/yt-dlp Discussions.
10. Warm a Product Hunt account for a later launch.
