```markdown
# Deploying figma_adaptation to Render

This repository is a static site (HTML/CSS/JS). To deploy it to Render, add the included `render.yaml` to the repository root. Render will use that file to auto-configure a static web service.

## What I added
- `render.yaml` — config telling Render to serve the repository as a static site from the repository root.

## How to add the files (git)
1. Clone the repo (or fork if you don't have push access):
   - git clone https://github.com/IATIA224/figma_adaptation.git
2. Create a branch:
   - git checkout -b add-render-config
3. Add files:
   - Save `render.yaml` to the repository root.
   - Optionally update README.md with these instructions.
4. Commit and push:
   - git add render.yaml README.md
   - git commit -m "Add render.yaml to enable Render static deploy"
   - git push origin add-render-config
5. Open a pull request to merge `add-render-config` into `main` (if you forked, PR to upstream).

## How to configure on Render (manual or automatic)
Option A — Let Render read `render.yaml` (recommended)
- Once `render.yaml` is on the `main` branch, Render will auto-detect it when you create a new service and will use the defined configuration to deploy automatically on pushes.

Option B — Manual setup in Render UI
1. Go to https://render.com and log in.
2. Click "New" → "Web Service".
3. Connect your GitHub account and select the `IATIA224/figma_adaptation` repository (or your fork).
4. For Environment, choose "Static Site".
5. Branch: main
6. Build Command: leave blank
7. Publish Directory: `.`
8. Click "Create Web Service" / "Create Static Site". Render will build and deploy.

## Notes & troubleshooting
- If you do client-side routing (single-page app), you may need a rewrite to `index.html` or create a `200.html` for route fallback — not required for plain multi-page static HTML files.
- If this repo is owned by someone else (IATIA224) and you don't have push access, fork the repo and open a PR to the upstream repository (or ask the repo owner to add `render.yaml`).
- If your site needs environment variables or a backend, you'll need to configure those in the Render dashboard.
```