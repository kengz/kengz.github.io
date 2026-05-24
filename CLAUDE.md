# Keng's CV Site

Personal CV site hosted on GitHub Pages, plus a one-page printable resume PDF.

## File structure

- `index.html` — main CV page (published to GitHub Pages)
- `index.md` — Markdown mirror of the CV (for easy copying to other surfaces)
- `media/cv-screen.css`, `media/cv-print.css` — site styles
- `resume.html` — **source** for the one-page printable resume
- `keng_resume.pdf` — **rendered output**, linked from the site as "Resume (PDF)"

## Keep these in sync

All four content surfaces describe the same CV. When updating any role, title, or contact info, update **all of them**:

1. `index.html`
2. `index.md`
3. `resume.html`
4. Regenerate `keng_resume.pdf` (see below)

## Rebuilding the PDF

The PDF is rendered from `resume.html` via headless Chrome — no LaTeX or other toolchain needed.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=keng_resume.pdf resume.html
```

On Linux substitute `google-chrome` or `chromium`. The HTML uses `@page { size: letter; margin: 0.35in 0.45in; }` and is tuned to fit on one US Letter page; if you add content, check the page count stays at 1.

Verify page count:

```bash
python3 -c "import re; print(len(re.findall(rb'/Type\s*/Page[^s]', open('keng_resume.pdf','rb').read())))"
```

## Notes

- The old LaTeX-based resume lived at github.com/kengz/Resume. That repo is frozen; this site is the source of truth going forward.
- Web fonts (Lato, Raleway) are loaded from Google Fonts when rendering; Chrome must have network access at render time, or fonts will fall back.
