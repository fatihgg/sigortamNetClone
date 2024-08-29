 /* const carousel = document.querySelector('#customCarousel .carousel-inner .carousel-item .d-flex');
    let startIndex = 0;
    function slide(direction) {
    const images = carousel.querySelectorAll('img');
    const imageWidth = 170; // Görsel genişliği

    if (direction === 'next') {
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(-${imageWidth}px)`; // Sağa kaydırma
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0)';
      carousel.appendChild(images[0]); // İlk görseli sona taşı
    }, 500); // 0.5 saniye sonra kaydırmayı tamamla
    } else if (direction === 'prev') {
    carousel.style.transition = 'none';
    carousel.insertBefore(images[images.length - 1], images[0]); // Son görseli başa taşı
    carousel.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = 'translateX(0)'; // Sola kaydırma
    }, 0);
  }
}

// Butonlara click event ekleme
document.getElementById('carouselNext').addEventListener('click', () => slide('next'));
document.getElementById('carouselPrev').addEventListener('click', () => slide('prev'));

// Otomatik kaydırma (opsiyonel)
//const interval = 3000; // 3 saniye
//setInterval(() => slide('next'), interval);

const carousel = document.querySelector('#testimonialCarousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const items = carouselInner.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

function slide(direction) {
    const totalItems = items.length;
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    updateCarousel();
}

// Butonlara click event ekleme
document.getElementById('carouselNext').addEventListener('click', () => slide('next'));
document.getElementById('carouselPrev').addEventListener('click', () => slide('prev'));
*/

const customCarousel = document.querySelector('#customCarousel .carousel-inner .carousel-item .d-flex');
let customStartIndex = 0;

function slideCustomCarousel(direction) {
    const images = customCarousel.querySelectorAll('img');
    const imageWidth = 170; // Görsel genişliği

    if (direction === 'next') {
        customCarousel.style.transition = 'transform 0.5s ease';
        customCarousel.style.transform = `translateX(-${imageWidth}px)`; // Sağa kaydırma
        setTimeout(() => {
            customCarousel.style.transition = 'none';
            customCarousel.style.transform = 'translateX(0)';
            customCarousel.appendChild(images[0]); // İlk görseli sona taşı
        }, 500); // 0.5 saniye sonra kaydırmayı tamamla
    } else if (direction === 'prev') {
        customCarousel.style.transition = 'none';
        customCarousel.insertBefore(images[images.length - 1], images[0]); // Son görseli başa taşı
        customCarousel.style.transform = `translateX(-${imageWidth}px)`;
        setTimeout(() => {
            customCarousel.style.transition = 'transform 0.5s ease';
            customCarousel.style.transform = 'translateX(0)'; // Sola kaydırma
        }, 0);
    }
}

// Butonlara click event ekleme
document.getElementById('carouselNext').addEventListener('click', () => slideCustomCarousel('next'));
document.getElementById('carouselPrev').addEventListener('click', () => slideCustomCarousel('prev'));

// Otomatik kaydırma (opsiyonel)
//const interval = 3000; // 3 saniye
//setInterval(() => slideCustomCarousel('next'), interval);


const testimonialCarousel = document.querySelector('#testimonialCarousel');
const testimonialCarouselInner = testimonialCarousel.querySelector('.carousel-inner');
const testimonialItems = testimonialCarouselInner.querySelectorAll('.carousel-item');
let testimonialCurrentIndex = 0;

function updateTestimonialCarousel() {
    testimonialItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === testimonialCurrentIndex) {
            item.classList.add('active');
        }
    });
}

function slideTestimonialCarousel(direction) {
    const totalItems = testimonialItems.length;
    if (direction === 'next') {
        testimonialCurrentIndex = (testimonialCurrentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        testimonialCurrentIndex = (testimonialCurrentIndex - 1 + totalItems) % totalItems;
    }
    updateTestimonialCarousel();
}

// Butonlara click event ekleme
document.getElementById('carouselNext').addEventListener('click', () => slideTestimonialCarousel('next'));
document.getElementById('carouselPrev').addEventListener('click', () => slideTestimonialCarousel('prev'));
