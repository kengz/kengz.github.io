# Keng's CV Site

This is a personal CV website hosted on GitHub Pages.

## File Structure

- `index.html` - Main CV page (used for GitHub Pages)
- `index.md` - Markdown version of CV (for easy copying elsewhere)
- `media/cv-screen.css` - CSS for screen display with responsive design
- `media/cv-print.css` - CSS optimized for printing

## Key Points

- **Both HTML and Markdown files need to be kept in sync** - Any content changes should be made to both files
- The HTML file is what gets published to GitHub Pages
- The Markdown file is maintained for easy copying to other platforms

## Common Tasks

### Content Updates
When updating CV content, remember to update both:
1. `index.md` - Markdown version
2. `index.html` - HTML version

### CSS Structure
- `cv-screen.css` handles the visual presentation and responsive design
- Mobile breakpoint is at 768px
- Main container (`#main`) has comfortable padding for readability
- Print styles are separate in `cv-print.css`

### Testing Changes
After making changes, open `index.html` in browser to preview:
```bash
open index.html
```

## Recent Changes
- Removed "creator of" from SLM-Lab description
- Optimized margins/padding for better mobile display while maintaining readability