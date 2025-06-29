# Kavarera Portfolio

A modern, futuristic black monochrome portfolio website built with Bootstrap 5 and vanilla JavaScript.

## 🚀 Features

- **Futuristic Design**: Black monochrome theme with cyan accents and glow effects
- **Dynamic Project Loading**: Projects loaded from JSON data for easy management
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: CSS animations and transitions throughout
- **Matrix Rain Effect**: Subtle background animation for cyberpunk aesthetic
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome 6
- Google Fonts (Orbitron, Rajdhani)

## 📁 Project Structure

```
kavarera.github.io/
├── index.html          # Main HTML file
├── style/
│   └── index.css       # Main stylesheet
├── js/
│   └── portfolio.js    # JavaScript functionality
├── data/
│   └── projects.json   # Project data
├── img/
│   ├── jogja-min.jpg   # Profile image
│   ├── profile-png.png # Project placeholder
│   └── project1.png    # Project image
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- Primary Black: `#000000`
- Secondary Black: `#0a0a0a`
- Dark Gray: `#1a1a1a`
- Medium Gray: `#2a2a2a`
- Light Gray: `#404040`
- Accent White: `#ffffff`
- Neon Glow: `#00ffff`

### Typography
- **Headers**: Orbitron (futuristic, monospace feel)
- **Body Text**: Rajdhani (clean, modern sans-serif)

### Effects
- Gradient backgrounds
- Box shadows with cyan glow
- Smooth hover transitions
- Floating profile image animation
- Matrix rain background effect
- Typing animation for main heading

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 992px)
- Desktop (> 992px)

## 🔧 Adding New Projects

To add new projects, simply edit the `data/projects.json` file:

```json
{
  "projects": [
    {
      "id": 4,
      "title": "Your Project Name",
      "description": "Project description...",
      "image": "img/your-project-image.png",
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "links": {
        "demo": "https://demo-link.com",
        "github": "https://github.com/username/repo",
        "download1": "https://download-link.com"
      },
      "developers": [
        {
          "name": "Your Name",
          "link": "https://your-profile.com"
        }
      ],
      "featured": true
    }
  ]
}
```

## 🚀 Deployment on GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Custom Domain** (optional):
   - Add a `CNAME` file in the root directory
   - Add your custom domain name inside the file

3. **Access your site**:
   - Your site will be available at: `https://username.github.io/repository-name`
   - Or your custom domain if configured

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rafli Iskandar Kavarera**
- GitHub: [@Kavarera](https://github.com/Kavarera)
- Instagram: [@r_kavarera](https://instagram.com/r_kavarera)
- Email: kavarera.work.business@gmail.com

---

Built with ❤️ and modern web technologies
