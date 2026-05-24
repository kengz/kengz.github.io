# Clean CV

A minimal, maintainable CV with LaTeX-inspired design - perfect for GitHub Pages.

**Live at: https://kengz.github.io**

## Features

- **Static HTML**: No build process needed
- **LaTeX-inspired styling**: Professional academic typography
- **GitHub Pages ready**: Deploy instantly
- **Print-optimized**: Clean PDF generation via browser print
- **Responsive**: Works on desktop and mobile
- **Maintainable**: Edit markdown or HTML directly

## Quick Start

1. **Fork this repository**
2. **Edit `index.md`** with your details (then copy to `index.html` if needed)
3. **Enable GitHub Pages** in repository settings
4. **Visit** `https://yourusername.github.io/your-repo-name`

## Customization

### Content
- **Easy way**: Edit `index.md` with your details
- **Direct way**: Edit `index.html` directly

### Styling
- **Screen styles**: `media/cv-screen.css`
- **Print styles**: `media/cv-print.css`

## Printable resume PDF

A one-page printable resume lives alongside the site:

- [`resume.html`](resume.html) — source (self-contained HTML + CSS, tuned for US Letter)
- [`keng_resume.pdf`](keng_resume.pdf) — rendered output

**Not linked from the live site** — shared on request only.

### Rebuild

The PDF is rendered from `resume.html` via headless Chrome. No LaTeX or other toolchain required.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=keng_resume.pdf resume.html
```

On Linux substitute `google-chrome` or `chromium`. Verify it's still one page:

```bash
python3 -c "import re; print(len(re.findall(rb'/Type\s*/Page[^s]', open('keng_resume.pdf','rb').read())))"
```

When updating CV content, change all four surfaces together: `index.html`, `index.md`, `resume.html`, then regenerate `keng_resume.pdf`. See `CLAUDE.md` for details.

## File Structure

```
├── index.html         # Main CV page (GitHub Pages)
├── index.md           # Markdown mirror of the CV
├── resume.html        # Source for the printable resume
├── keng_resume.pdf    # Rendered one-page resume (not linked from site)
├── media/
│   ├── cv-screen.css  # Screen styles
│   └── cv-print.css   # Print styles
├── CLAUDE.md          # Notes for AI agents working on this repo
└── README.md          # This file
```

## GitHub Pages Deployment

1. Go to repository Settings → Pages
2. Select source: "Deploy from a branch" 
3. Choose branch: `main`
4. Folder: `/ (root)`
5. Save

Your CV will be live at `https://yourusername.github.io/repository-name`

## License

MIT License - use and modify freely.