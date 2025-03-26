// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Initialize slider
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
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
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide change every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Show first slide initially
    showSlide(currentSlide);
    
    // Parallax effect for welcome image
    const welcomeImage = document.querySelector('.welcome-image img');
    if (welcomeImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            welcomeImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    }
});