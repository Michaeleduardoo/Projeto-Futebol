class FootballLegendsApp {
    constructor() {
        this.currentTeam = 'brasil';
        this.isLoading = true;
        this.teamData = {
            brasil: {
                name: 'Seleção Brasileira',
                description: 'A seleção mais bem-sucedida da história do futebol mundial, com cinco títulos de Copa do Mundo e quatro títulos da Copa das Confederações FIFA.',
                logo: './img/Cbf-logo-selecao-logo-brasil-4.png',
                stats: {
                    worldCups: 5,
                    nationalTitles: 0,
                    continentalTitles: 4
                },
                history: [
                    { year: '1958', achievement: 'Primeira Copa do Mundo' },
                    { year: '1962', achievement: 'Segunda Copa do Mundo' },
                    { year: '1970', achievement: 'Tricampeonato Mundial' },
                    { year: '1994', achievement: 'Tetracampeonato' },
                    { year: '2002', achievement: 'Pentacampeonato' }
                ],
                color: '#009639'
            },
            cruzeiro: {
                name: 'Cruzeiro Esporte Clube',
                description: 'Um dos clubes mais tradicionais do Brasil, com títulos importantes como Copa Libertadores da América, Campeonato Brasileiro e Copa do Brasil.',
                logo: './img/Cruzeiro_Esporte_Clube-logo-E41C56B8CC-seeklogo.com.png',
                stats: {
                    worldCups: 0,
                    nationalTitles: 7,
                    continentalTitles: 3
                },
                history: [
                    { year: '1976', achievement: 'Primeira Copa Libertadores' },
                    { year: '1997', achievement: 'Segunda Copa Libertadores' },
                    { year: '1966', achievement: 'Primeiro Campeonato Brasileiro' },
                    { year: '2003', achievement: 'Segundo Campeonato Brasileiro' },
                    { year: '1998', achievement: 'Recopa Sul-Americana' }
                ],
                color: '#0066cc'
            },
            barcelona: {
                name: 'FC Barcelona',
                description: 'Um dos clubes mais vitoriosos do mundo, com 26 títulos da La Liga, 30 Copas del Rey e 5 títulos da Liga dos Campeões da UEFA.',
                logo: './img/FCBarcelona.svg.png',
                stats: {
                    worldCups: 0,
                    nationalTitles: 26,
                    continentalTitles: 5
                },
                history: [
                    { year: '1992', achievement: 'Primeira Liga dos Campeões' },
                    { year: '2006', achievement: 'Segunda Liga dos Campeões' },
                    { year: '2009', achievement: 'Terceira Liga dos Campeões' },
                    { year: '2011', achievement: 'Quarta Liga dos Campeões' },
                    { year: '2015', achievement: 'Quinta Liga dos Campeões' }
                ],
                color: '#a50044'
            }
        };
        
        this.init();
    }

    init() {
        this.setupLoading();
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupParticles();
        this.setupFAB();
        this.setupAnimations();
    }

    setupLoading() {
        const loader = document.getElementById('loader');
        const progressBar = document.querySelector('.loader-progress');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress > 100) progress = 100;
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    if (loader) {
                        loader.classList.add('hidden');
                    }
                    this.isLoading = false;
                    this.initializeApp();
                }, 500);
            }
        }, 100);
    }

    initializeApp() {
        this.updateTeamDisplay(this.currentTeam);
        this.animateOnScroll();
    }

    setupEventListeners() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const team = e.currentTarget.dataset.team;
                this.switchTeam(team);
            });
        });

        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', this.throttle(() => {
            this.updateScrollProgress();
            this.updateNavbar();
        }, 16));

        window.addEventListener('resize', this.throttle(() => {
            this.handleResize();
        }, 250));
    }

    setupScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.team-card, .team-history, .stat-card');
        elementsToAnimate.forEach(el => {
            this.observer.observe(el);
        });
    }

    setupParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2;
            const startX = Math.random() * window.innerWidth;
            const duration = Math.random() * 10 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${startX}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.background = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, duration * 1000);
        };

        setInterval(createParticle, 3000);
    }

    setupFAB() {
        const fab = document.getElementById('fab');
        const fabMenu = document.getElementById('fab-menu');
        
        if (fab && fabMenu) {
            fab.addEventListener('click', () => {
                fab.classList.toggle('active');
                fabMenu.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!fab.contains(e.target) && !fabMenu.contains(e.target)) {
                    fab.classList.remove('active');
                    fabMenu.classList.remove('active');
                }
            });
        }
    }

    setupAnimations() {
        const heroStats = document.querySelectorAll('.stat-item');
        heroStats.forEach((stat, index) => {
            stat.style.animationDelay = `${index * 0.2}s`;
            stat.classList.add('animate-fade-in-up');
        });
    }

    switchTeam(teamName) {
        if (this.currentTeam === teamName) return;
        
        this.currentTeam = teamName;
        this.updateTeamDisplay(teamName);
        this.updateNavigation(teamName);
        this.createConfettiEffect();
    }

    updateTeamDisplay(teamName) {
        const teamData = this.teamData[teamName];
        if (!teamData) return;

        this.updateElement('team-name', teamData.name);
        this.updateElement('team-description', teamData.description);
        
        const teamLogoImg = document.getElementById('team-logo-img');
        if (teamLogoImg) {
            teamLogoImg.src = teamData.logo;
            teamLogoImg.alt = teamData.name;
        }

        this.animateNumber('world-cups', teamData.stats.worldCups);
        this.animateNumber('national-titles', teamData.stats.nationalTitles);
        this.animateNumber('continental-titles', teamData.stats.continentalTitles);

        this.updateHistory(teamData.history);
        this.updateTeamColors(teamData.color);
    }

    updateNavigation(teamName) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.team === teamName) {
                item.classList.add('active');
            }
        });
    }

    updateElement(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    animateNumber(id, targetValue) {
        const element = document.getElementById(id);
        if (!element) return;

        const startValue = parseInt(element.textContent) || 0;
        const duration = 1000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(startValue + (targetValue - startValue) * easeOutCubic);
            
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    updateHistory(history) {
        const historyContent = document.getElementById('history-content');
        if (!historyContent) return;

        historyContent.innerHTML = '';
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="year">${item.year}</div>
                <div class="achievement">${item.achievement}</div>
            `;
            historyContent.appendChild(historyItem);
        });
    }

    updateTeamColors(color) {
        document.documentElement.style.setProperty('--primary', color);
        
        const shapes = document.querySelectorAll('.hero-shape');
        shapes.forEach(shape => {
            shape.style.background = `linear-gradient(45deg, ${color}, var(--secondary))`;
        });
    }

    updateScrollProgress() {
        const scrollProgress = document.getElementById('scroll-progress');
        if (!scrollProgress) return;

        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = `${scrollPercent}%`;
    }

    updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    animateOnScroll() {
        const elements = document.querySelectorAll('.team-card, .team-history');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.add('animate-fade-in-up');
        });
    }

    createConfettiEffect() {
        const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    top: -10px;
                    left: ${Math.random() * window.innerWidth}px;
                    z-index: 1000;
                    pointer-events: none;
                    border-radius: 50%;
                `;
                
                document.body.appendChild(confetti);
                
                const animation = confetti.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                };
            }, i * 20);
        }
    }

    handleResize() {
        if (window.innerWidth > 768) {
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');
            
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FootballLegendsApp();
});

const utils = {
    scrollToElement: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    showToast: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gray-900);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FootballLegendsApp;
}
