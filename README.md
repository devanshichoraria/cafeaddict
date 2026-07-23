# Cafe Addict — Devanshi's Kolkata cafe map

A small animated chat-interface site. Plays a scripted conversation, then a
tap reveals a bottom sheet of cafes, each linking straight to Google Maps.

## Files
- `index.html` — structure
- `style.css` — all styling
- `script.js` — the conversation script, the cafe list, and the playback logic
- `assets/` — put your photo here

## Before you push
1. Add your real photo (small, will show as a circle) to `assets/devanshi.jpg`.
2. Add a banner image to `assets/banner.jpg` — this is the big rounded image
   under the header. A fun collage/meme-style photo of you at a cafe works
   well here, matching the "coffee addict" reference style.
3. Add one photo per cafe into `assets/cafes/`, named exactly:
   `cava.jpg`, `roastery.jpg`, `marbellas.jpg`, `mezzuna.jpg`,
   `countryhouse.jpg`, `piccadilly.jpg`. Use your own photos from each
   place if you have them — that's what actually sells "cafe addict"
   authenticity, not stock photos.
4. Open `script.js` — the `messages` array is the conversation, the `cafes`
   array is your list. Edit text/cafes/img paths directly there, no other
   file needs touching for content changes.

## Running it locally
Just open `index.html` in a browser. No build step, no server needed.

## Putting it on GitHub Pages
1. Create a new repo on GitHub (e.g. `cafe-addict`).
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "cafe addict site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/cafe-addict.git
   git push -u origin main
   ```
3. On GitHub: repo → **Settings** → **Pages** → under "Build and deployment",
   set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
   Save.
4. Wait ~1 minute, then your site is live at:
   `https://YOUR-USERNAME.github.io/cafe-addict/`

## If you want to add more cafes later
Just add another object to the `cafes` array in `script.js` in this shape:
```js
{
  tag: "short label",
  name: "Cafe Name",
  desc: "One line description.",
  query: "Cafe Name Area Kolkata",
}
```
The `query` field is what gets sent to Google Maps search — keep it specific
(name + neighbourhood) so it resolves to the right place.
