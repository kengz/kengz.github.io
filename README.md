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

## Generating PDF

1. Open your CV in a browser
2. Use Print function (Ctrl/Cmd + P)  
3. Select "Save as PDF"
4. Turn OFF headers and footers

## File Structure

```
├── index.html           # Main CV page
├── index.md            # Markdown version (for editing)
├── media/
│   ├── cv-screen.css   # Screen styles  
│   └── cv-print.css    # Print styles
└── README.md           # This file
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