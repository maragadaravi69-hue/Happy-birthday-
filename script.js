// Photo Gallery Configuration
const photos = [
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_55063.jpg', 
        caption: 'Stylish and Confident',
        emoji: '😎'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_897.jpg', 
        caption: 'Adventures with Friends',
        emoji: '🏔️'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_926.jpg', 
        caption: 'Temple Memories',
        emoji: '🙏'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1011.jpg', 
        caption: 'Fun Times Together',
        emoji: '🍊'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1014.jpg', 
        caption: 'Brotherhood Forever',
        emoji: '🤝'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1038.jpg', 
        caption: 'Looking Sharp',
        emoji: '✨'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1047.jpg', 
        caption: 'Best Buddies',
        emoji: '👬'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1046.jpg', 
        caption: 'Smiles All Around',
        emoji: '😊'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1056.jpg', 
        caption: 'Good Times',
        emoji: '🌟'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1144.jpg', 
        caption: 'Upside Down Fun',
        emoji: '🙃'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1156.jpg', 
        caption: 'Family Love',
        emoji: '❤️'
    },
    { 
        src: '7af4f564-e990-4356-ae66-9c51bc825aef-1_all_1157.jpg', 
        caption: 'Blessed Moments',
        emoji: '🙌'
    }
];

// Gradient backgrounds for each section
const gradients = [
    'from-slate-900 via-indigo-950 to-slate-900',
    'from-slate-900 via-purple-950 to-slate-900',
    'from-slate-900 via-violet-950 to-slate-900',
    'from-slate-900 via-fuchsia-950 to-slate-900',
    'from-slate-900 via-pink-950 to-slate-900',
    'from-slate-900 via-rose-950 to-slate-900',
    'from-slate-900 via-orange-950 to-slate-900',
    'from-slate-900 via-amber-950 to-slate-900',
    'from-slate-900 via-yellow-950 to-slate-900',
    'from-slate-900 via-lime-950 to-slate-900',
    'from-slate-900 via-emerald-950 to-slate-900',
    'from-slate-900 via-teal-950 to-slate-900'
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createPhotoSections();
    initScrollAnimations();
    initHeroAnimation();
});

// Create photo sections
function createPhotoSections() {
    const container = document.getElementById('photo-sections');
    
    photos.forEach((photo, index) => {
        const section = document.createElement('section');
        section.className = `h-screen w-full flex flex-col items-center justify-center relative overflow-hidden`;
        
        const gradient = gradients[index % gradients.length];
        
        section.innerHTML = `
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br ${gradient}"></div>
            
            <!-- Subtle decorative orbs -->
            <div class="absolute top-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl gentle-float"></div>
            <div class="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl gentle-float-delay"></div>
            
            <!-- Photo Content -->
            <div class="relative z-10 w-full max-w-sm px-6 fade-in" data-index="${index}">
                <!-- Photo Number -->
                <div class="flex items-center justify-center mb-6">
                    <div class="w-8 h-px bg-white/20"></div>
                    <span class="mx-4 text-white/40 text-sm font-medium">${String(index + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}</span>
                    <div class="w-8 h-px bg-white/20"></div>
                </div>
                
                <!-- Photo Frame -->
                <div class="relative group">
                    <!-- Glow effect behind photo -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <!-- Photo -->
                    <div class="relative rounded-2xl overflow-hidden photo-shadow bg-slate-800">
                        <img 
                            src="${photo.src}" 
                            alt="Memory ${index + 1}" 
                            class="w-full h-auto object-cover"
                            loading="lazy"
                            onerror="this.src='https://via.placeholder.com/400x500?text=Photo+${index + 1}'"
                        >
                    </div>
                </div>
                
                <!-- Caption -->
                <div class="mt-8 text-center">
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <span class="text-2xl">${photo.emoji}</span>
                    </div>
                    <p class="title-font text-2xl text-white/90">${photo.caption}</p>
                </div>
                
                <!-- Scroll hint (only on non-last items) -->
                ${index < photos.length - 1 ? `
                <div class="mt-8 flex justify-center">
                    <svg class="w-5 h-5 text-white/30 bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
                ` : ''}
            </div>
        `;
        
        container.appendChild(section);
    });
}

// Initialize scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Hero section animation
function initHeroAnimation() {
    const heroContent = document.querySelector('section:first-child .fade-in');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 200);
    }
}

// Smooth scroll to next section on arrow key or space
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Find next section
        for (let section of sections) {
            if (section.offsetTop > currentScroll + 50) {
                section.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section')).reverse();
        const currentScroll = window.scrollY;
        
        // Find previous section
        for (let section of sections) {
            if (section.offsetTop < currentScroll - 50) {
                section.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    }
});

// Touch swipe support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - go to next section
            for (let section of sections) {
                if (section.offsetTop > currentScroll + 50) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        } else {
            // Swipe down - go to previous section
            const reversedSections = Array.from(sections).reverse();
            for (let section of reversedSections) {
                if (section.offsetTop < currentScroll - 50) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        }
    }
}

// Add parallax effect to gradient orbs
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const orbs = document.querySelectorAll('.gentle-float, .gentle-float-delay');
    
    orbs.forEach((orb, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

console.log('🎂 Birthday Gallery Loaded - Happy Birthday Brother!');
