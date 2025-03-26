document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });

    // Sermon Slider (Dynamic Content)
    const sermonSlider = document.querySelector('.sermon-slider');
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
        sermonSlider.appendChild(sermonCard);
    });

    // Events Dynamic Content
    const eventsContainer = document.querySelector('.events-container');
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
});
