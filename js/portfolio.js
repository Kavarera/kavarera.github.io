// Portfolio Dynamic Project Loader
class PortfolioManager {
    constructor() {
        this.projects = [];
        this.experiences = [];
        this.init();
    }

    async init() {
        await this.loadProjects();
        await this.loadExperiences();
        this.renderProjects();
        this.renderExperiences();
        this.initializeAnimations();
    }

    async loadProjects() {
        try {
            const response = await fetch('data/projects.json');
            const data = await response.json();
            this.projects = data.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            this.projects = this.getFallbackProjects();
        }
    }

    async loadExperiences() {
        try {
            const response = await fetch('data/experiences.json');
            const data = await response.json();
            this.experiences = data.experiences;
        } catch (error) {
            console.error('Error loading experiences:', error);
            this.experiences = this.getFallbackExperiences();
        }
    }

    getFallbackProjects() {
        return [
    {
      "id": 1,
      "title": "NATURAL POS APP",
      "description": "It's a POS Application for Desktop (Windows) for \"water refill\" business in Indonesia. This app have basic feature like account privillege, managing product, printing, etc. Database by Microsoft SQL Server.",
      "image": "img/project1.png",
      "technologies": ["C#", "WPF", "SQL Server", "Desktop"],
      "links": {
        "demo": "https://youtu.be/bEgd-bhF-2A",
        "download1": "https://carapedi.id/tBykCRQB",
        "download2": "https://carapedi.id/d6nxqAi"
      },
      "developers": [
        {
          "name": "Kavarera",
          "link": "https://www.instagram.com/r_kavarera"
        }
      ],
      "featured": true
    },
    {
      "id": 2,
      "title": "Web Portfolio",
      "description": "Modern black futuristic portfolio website built with Bootstrap 5, featuring dynamic project loading from JSON data and smooth animations.",
      "image": "img/profile-png.png",
      "technologies": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JSON"],
      "links": {
        "github": "https://github.com/Kavarera/kavarera.github.io",
        "demo": "#"
      },
      "developers": [
        {
          "name": "Kavarera",
          "link": "https://www.instagram.com/r_kavarera"
        }
      ],
      "featured": true
    },
    {
      "id": 3,
      "title": "Data Analysis Project",
      "description": "Comprehensive data analysis project using Python for processing and visualizing complex datasets with machine learning integration.",
      "image": "img/profile-png.png",
      "technologies": ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      "links": {
        "github": "#",
        "demo": "#"
      },
      "developers": [
        {
          "name": "Kavarera",
          "link": "https://www.instagram.com/r_kavarera"
        }
      ],
      "featured": true
    }
  ];
    }

    renderProjects() {
        const projectsContainer = document.getElementById('projects-container');
        const loadingIndicator = document.getElementById('loading');
        
        if (!projectsContainer) return;

        // Hide loading indicator
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }

        projectsContainer.innerHTML = '';

        const featuredProjects = this.projects.filter(project => project.featured);
        
        featuredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsContainer.appendChild(projectCard);
        });

        // Add animation delay to cards
        this.animateCards();
    }

    createProjectCard(project, index) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        col.style.animationDelay = `${index * 0.2}s`;

        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        const developers = project.developers.map(dev => 
        {
            const roleText = dev.role ? ` (${dev.role})` : '';
            return `<a href="${dev.link}" class="developer-sosmed" target="_blank">${dev.name}${roleText}</a>`;
        }
        ).join(', ');

        const actionButtons = this.createActionButtons(project);

        col.innerHTML = `
            <div class="card project-card">
                <img src="${project.image}" alt="${project.title}" class="card-image-top">
                <div class="card-body">
                    <h4 class="card-title">${project.title}</h4>
                    <p class="card-text">${project.description}</p>
                    <div class="tech-tags">
                        ${techTags}
                    </div>
                    <div class="developer-info">
                        <small class="text-muted">Developed by: ${developers}</small>
                    </div>
                    <div class="project-actions mt-3">
                        ${actionButtons}
                    </div>
                </div>
            </div>
        `;

        return col;
    }

    createActionButtons(project) {
        let buttons = '';
        
        if (project.links.demo) {
            buttons += `<a href="${project.links.demo}" class="btn btn-futuristic me-2 mb-2" target="_blank">
                <i class="fas fa-play me-1"></i>Demo
            </a>`;
        }
        
        if (project.links.github) {
            if(project.links.github.length > 1){
                project.links.github.forEach((link, index) => {
                    buttons += `<a href="${link}" class="btn btn-futuristic me-2 mb-2" target="_blank">
                        <i class="fab fa-github me-1"></i>GitHub ${index+1}
                    </a>`;
                });
            } else{
                buttons += `<a href="${project.links.github}" class="btn btn-futuristic me-2 mb-2" target="_blank">
                <i class="fab fa-github me-1"></i>GitHub
            </a>`;
            }
        }
        
        if (project.links.download1) {
            buttons += `<a href="${project.links.download1}" class="btn btn-futuristic me-2 mb-2" target="_blank">
                <i class="fas fa-download me-1"></i>Download
            </a>`;
        }
        
        if (project.links.download2) {
            buttons += `<a href="${project.links.download2}" class="btn btn-futuristic me-2 mb-2" target="_blank">
                <i class="fas fa-download me-1"></i>Mirror
            </a>`;
        }

        return buttons;
    }

    animateCards() {
        const cards = document.querySelectorAll('.project-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }

    initializeAnimations() {
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.masthead');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Typing animation for main heading
        this.typeWriter();
    }

    typeWriter() {
        const heading = document.querySelector('.masthead-heading');
        if (!heading) return;

        const text = heading.textContent;
        heading.textContent = '';
        heading.style.borderRight = '2px solid #00ffff';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    heading.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }

    // Method to add new projects dynamically
    addProject(project) {
        this.projects.push(project);
        this.renderProjects();
    }

    // Method to filter projects by technology
    filterByTechnology(tech) {
        const filtered = this.projects.filter(project => 
            project.technologies.includes(tech)
        );
        return filtered;
    }
}

// Matrix rain effect for background
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-2';
        this.canvas.style.opacity = '0.1';
        this.canvas.style.pointerEvents = 'none';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.drops = [];
        this.initDrops();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initDrops() {
        const columns = Math.floor(this.canvas.width / 20);
        this.drops = Array(columns).fill(0);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ffff';
        this.ctx.font = '15px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = String.fromCharCode(Math.random() * 128);
            this.ctx.fillText(text, i * 20, this.drops[i] * 20);
            
            if (this.drops[i] * 20 > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio manager
    const portfolio = new PortfolioManager();
    
    // Initialize matrix rain effect
    const matrix = new MatrixRain();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add glitch effect to logo on hover
    const logo = document.querySelector('.judulNavbar');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        logo.addEventListener('animationend', () => {
            logo.style.animation = '';
        });
    }
});
