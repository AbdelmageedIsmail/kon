document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('اعرف المزيد عن ميزاتنا!');
});

document.getElementById('about-us-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('activities-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
});
