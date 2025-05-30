document.addEventListener("DOMContentLoaded", function() {
    // Gallery Modal Logic
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const modalImg = document.getElementById('galleryModalImg');
    const modalLabel = document.getElementById('galleryModalLabel');
    const modalDesc = document.getElementById('galleryModalDesc');
    
    // Gallery Nav Logic
    const photosTab = document.getElementById('galleryPhotosTab');
    const videosTab = document.getElementById('galleryVideosTab');
    const photosContent = document.getElementById('galleryPhotosContent');
    const videosContent = document.getElementById('galleryVideosContent');

    if (photosTab && videosTab && photosContent && videosContent) {
        photosTab.addEventListener('click', function () {
            photosTab.classList.add('active');
            videosTab.classList.remove('active');
            photosContent.style.display = '';
            videosContent.style.display = 'none';
        });
        videosTab.addEventListener('click', function () {
            videosTab.classList.add('active');
            photosTab.classList.remove('active');
            videosContent.style.display = '';
            photosContent.style.display = 'none';
        });
    }

    galleryImgs.forEach(img => {
        img.addEventListener('click', function () {
            // Use the data-img-src for the modal image
            modalImg.src = this.getAttribute('data-img-src');
            modalImg.alt = this.getAttribute('alt') || '';
            modalLabel.textContent = this.getAttribute('data-img-caption') || '';
            modalDesc.textContent = this.getAttribute('data-img-description') || '';
        });
    });
    
    // Gallery Minimize/Expand
    const galleryToggleBtn = document.getElementById('galleryToggleBtn');
    const galleryContent = document.getElementById('galleryContent');
    let minimized = false;

    galleryToggleBtn.addEventListener('click', function () {
        minimized = !minimized;
        if (minimized) {
            galleryContent.style.display = 'none';
            galleryToggleBtn.innerHTML = '<i class="bi bi-plus"></i> Expand';
        } else {
            galleryContent.style.display = '';
            galleryToggleBtn.innerHTML = '<i class="bi bi-dash"></i> Minimize';
        }
    });


    // Gallery Card Scroll Animation
    const animCards = document.querySelectorAll('.gallery-anim-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        animCards.forEach(card => observer.observe(card));
    } else {
        // Fallback for old browsers
        animCards.forEach(card => card.classList.add('visible'));
    }

});
