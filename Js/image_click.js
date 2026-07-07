const imageOverlay = document.getElementById('image-overlay');
const enlargedImg = document.getElementById('enlarged-img');
const overlayTitle = document.getElementById('overlay-title');
const overlayDesc = document.getElementById('overlay-desc');
const closeOverlayBtn = document.getElementById('close-overlay');

function openLightbox(imageSrc, title = '', desc = '') {
    enlargedImg.src = imageSrc;
    overlayTitle.innerText = title;
    overlayDesc.innerText = desc;
    imageOverlay.classList.add('active'); 
}

const cardImages = document.querySelectorAll('.card-img');
cardImages.forEach(img => {
    img.addEventListener('click', function() {
        const parentCard = this.closest('.card');
        const titleText = parentCard.querySelector('.card-title') ? parentCard.querySelector('.card-title').innerText : '';
        const descText = parentCard.querySelector('.card-desc') ? parentCard.querySelector('.card-desc').innerText : '';
        openLightbox(this.src, titleText, descText);
    });
});

const definitionImage = document.querySelector('.definition-img');
if (definitionImage) {
    definitionImage.addEventListener('click', function() {
        openLightbox(this.src); 
    });
}

const sectionImages = document.querySelectorAll('.section-img');
sectionImages.forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src); 
    });
});


if (closeOverlayBtn) {
    closeOverlayBtn.addEventListener('click', function() {
        imageOverlay.classList.remove('active');
    });
}

if (imageOverlay) {
    imageOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('overlay-content-wrapper')) {
            imageOverlay.classList.remove('active');
        }
    });
}