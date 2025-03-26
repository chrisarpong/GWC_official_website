// main.js - Consolidated JavaScript for the entire site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Hero Slider with Blur Effect
    const heroSlider = () => {
        const slides = document.querySelectorAll('.hero .slide');
        if (slides.length === 0) return;

        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        let currentSlide = 0;
        const slideCount = slides.length;
        let slideInterval;

        // Initialize slider
        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.filter = 'blur(0)'; // Reset blur
            });
            
            slides[index].classList.add('active');
            
            // Apply blur effect to inactive slides
            if (index > 0) {
                slides[index - 1].style.filter = 'blur(2px)';
            } else {
                slides[slideCount - 1].style.filter = 'blur(2px)';
            }
            
            if (index < slideCount - 1) {
                slides[index + 1].style.filter = 'blur(2px)';
            } else {
                slides[0].style.filter = 'blur(2px)';
            }
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide(currentSlide);
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            showSlide(currentSlide);
        }

        // Button events
        if (nextBtn) nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Auto slide change every 5 seconds
        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Pause on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });

            heroSection.addEventListener('mouseleave', startSlider);
        }

        // Show first slide initially
        showSlide(currentSlide);
        startSlider();
    };
    heroSlider();

    // Sermon Slider (Dynamic Content)
    const sermonSlider = () => {
        const sliderContainer = document.querySelector('.sermon-slider');
        if (!sliderContainer) return;

        const sermons = [
            {
                title: 'Finding Hope in Difficult Times',
                speaker: 'Pastor John Doe',
                date: 'March 24, 2024',
                thumbnail: 'assets/images/sermon1.jpg',
                audioLink: 'assets/audio/sermon1.mp3'
            },
            {
                title: 'The Power of Faith',
                speaker: 'Pastor Jane Smith',
                date: 'March 17, 2024',
                thumbnail: 'assets/images/sermon2.jpg',
                audioLink: 'assets/audio/sermon2.mp3'
            }
        ];

        sermons.forEach(sermon => {
            const sermonCard = document.createElement('div');
            sermonCard.classList.add('sermon-card');
            sermonCard.innerHTML = `
                <img src="${sermon.thumbnail}" alt="${sermon.title}">
                <h3>${sermon.title}</h3>
                <p>By ${sermon.speaker} on ${sermon.date}</p>
                <audio controls>
                    <source src="${sermon.audioLink}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            sliderContainer.appendChild(sermonCard);
        });
    };
    sermonSlider();

    // Events Dynamic Content
    const eventsLoader = () => {
        const eventsContainer = document.querySelector('.events-container');
        if (!eventsContainer) return;

        const events = [
            {
                title: 'Youth Worship Night',
                date: 'April 5, 2024',
                time: '7:00 PM',
                location: 'Church Sanctuary'
            },
            {
                title: 'Community Outreach Day',
                date: 'April 12, 2024',
                time: '9:00 AM',
                location: 'Downtown Community Center'
            }
        ];

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Location: ${event.location}</p>
            `;
            eventsContainer.appendChild(eventCard);
        });
    };
    eventsLoader();

    // Parallax effect for welcome image
    const welcomeParallax = () => {
        const welcomeImage = document.querySelector('.welcome-image img');
        if (!welcomeImage) return;

        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            welcomeImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    };
    welcomeParallax();

    // Header scroll effect
    const headerScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    };
    headerScroll();
});