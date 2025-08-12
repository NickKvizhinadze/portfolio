// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    });

    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('button i.fa-sun');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('bg-white');
            document.body.classList.toggle('text-black');
            document.body.classList.toggle('bg-dark-bg');
            document.body.classList.toggle('text-white');
            
            // Update icon
            if (this.classList.contains('fa-sun')) {
                this.classList.remove('fa-sun');
                this.classList.add('fa-moon');
            } else {
                this.classList.remove('fa-moon');
                this.classList.add('fa-sun');
            }
        });
    }
});