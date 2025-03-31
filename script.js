document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const menuIcon = document.querySelector('.menu-icon');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');

    // Toggle mobile menu
    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        // Close all dropdowns when closing menu
        document.querySelectorAll('.mobile-dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('active');
            const icon = dropdown.previousElementSibling.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    mobileOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    });

    // Mobile dropdown functionality
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            const parentLi = this.parentElement;
            
            // Close all other dropdowns first
            document.querySelectorAll('.mobile-dropdown-content').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                    const otherBtn = d.previousElementSibling;
                    const otherIcon = otherBtn.querySelector('i');
                    if (otherIcon) {
                        otherIcon.classList.remove('fa-chevron-up');
                        otherIcon.classList.add('fa-chevron-down');
                    }
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
            
            // Add chevron icon if not present
            if (!this.querySelector('i')) {
                this.innerHTML += ' <i class="fas fa-chevron-down"></i>';
            }
            
            const icon = this.querySelector('i');
            if (dropdown.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Search functionality
    const searchIcon = document.querySelector('.search-icon');
    const closeSearch = document.querySelector('.close-search');
    const searchOverlay = document.querySelector('.search-overlay');
    
    searchIcon.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        document.querySelector('.search-input').focus();
    });
    
    closeSearch.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Back to top functionality
    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize Swiper slider
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function() {
                const activeSlide = this.slides[this.activeIndex];
                const slideContent = activeSlide.querySelector('.slide-content');
                slideContent.style.opacity = '1';
                slideContent.style.left = '120px';
                
                // Animate elements
                animateSlideElements(activeSlide);
            },
            slideChange: function() {
                const activeSlide = this.slides[this.activeIndex];
                const slideContent = activeSlide.querySelector('.slide-content');
                slideContent.style.opacity = '1';
                slideContent.style.left = '120px';
                
                // Animate elements
                animateSlideElements(activeSlide);
                
                // Update dots
                updateSliderDots(this.realIndex);
            }
        }
    });
    
    // Helper function to animate slide elements
    function animateSlideElements(slide) {
        const h1 = slide.querySelector('h1');
        const p = slide.querySelector('p');
        const buttons = slide.querySelectorAll('.cta-button');
        
        if (h1) {
            h1.style.transform = 'translateY(0)';
        }
        if (p) {
            p.style.transform = 'translateY(0)';
        }
        if (buttons) {
            buttons.forEach(button => {
                button.style.transform = 'translateY(0)';
            });
        }
    }
    
    // Slider arrow navigation
    document.querySelector('.prev-slide').addEventListener('click', function() {
        swiper.slidePrev();
    });
    
    document.querySelector('.next-slide').addEventListener('click', function() {
        swiper.slideNext();
    });
    
    // Slider dot navigation
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSliderDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            swiper.slideTo(index);
        });
    });
    
    // Video section animation
    const videoSection = document.querySelector('.video-section');
    const videoOverlay = document.querySelector('.video-overlay');
    
    function checkVideoSection() {
        const sectionTop = videoSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            videoOverlay.classList.add('active');
        }
    }
    
    window.addEventListener('scroll', checkVideoSection);
    checkVideoSection(); // Check on load
    
    // Play button functionality
    const playButton = document.querySelector('.play-button');
    const video = document.querySelector('.video-section video');
    
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            video.muted = false;
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        const modelCards = document.querySelectorAll('.model-card');
        const newsCards = document.querySelectorAll('.news-card');
        
        modelCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
        
        newsCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
    }
    
    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Check on load
    
    // Footer column toggle for mobile
    const footerColumns = document.querySelectorAll('.footer-column');
    
    footerColumns.forEach(column => {
        const heading = column.querySelector('h4');
        const content = column.querySelector('.content');
        
        heading.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
                content.classList.toggle('active');
            }
        });
    });
});