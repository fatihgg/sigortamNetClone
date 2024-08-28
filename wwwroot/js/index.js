
const carousel = document.querySelector('#customCarousel .carousel-inner');
const items = Array.from(carousel.querySelectorAll('.carousel-item'));
const visibleItemsCount = 6; // Görünen görsel sayısı
const imageWidth = 172; // Görsel genişliği
let startIndex = 0;

function updateCarousel(){
    carousel.style.transform = `translateX(-${startIndex * imageWidth}px)`;
}

function updateVisibility() {
  items.forEach((item, index) => {
    if (index < visibleItemsCount) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function slide(direction) {
    if (direction === 'next') {
      startIndex = (startIndex + 1) % images.length;
    } else if (direction === 'prev') {
      startIndex = (startIndex - 1 + images.length) % images.length;
    }
    updateCarousel();
  }

function resetCarousel() {
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(0)'; // Başlangıç durumuna döndür
  // Başlangıçta sadece ilk 6 görseli göster
  items.forEach(item => {
    item.classList.remove('hidden');
  });
  updateVisibility(); // Görsellerin doğru şekilde hizalanmasını sağlar
}

// Butonlara click event ekleme
document.getElementById('carouselNext').addEventListener('click', () => slide('next'));
document.getElementById('carouselPrev').addEventListener('click', () => slide('prev'));

// Otomatik kaydırma (opsiyonel)
const interval = 3000; // 3 saniye
setInterval(() => slide('next'), interval);

// Sayfa yüklendiğinde carousel'ı sıfırla
window.addEventListener('load', () => {
  resetCarousel();
}); /*
const carousel = document.querySelector('#customCarousel .carousel-inner .carousel-item .d-flex');
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
const interval = 3000; // 3 saniye
setInterval(() => slide('next'), interval);
*/
