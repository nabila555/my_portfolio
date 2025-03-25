document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo - no real submission yet.)');
    this.reset();
});