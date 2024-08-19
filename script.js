document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${this.querySelector('img').src}" alt="${this.querySelector('img').alt}">
                    <h3>${this.querySelector('.overlay h3').innerText}</h3>
                    <p>${this.querySelector('.overlay p').innerText}</p>
                </div>
            `;
            document.body.appendChild(modal);

            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', function () {
                document.body.removeChild(modal);
            });

            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const enterButton = document.getElementById('enter-gallery');
    const galleryContainer = document.querySelector('.gallery-container');
    const welcomeScreen = document.querySelector('.welcome-screen');

    enterButton.addEventListener('click', function () {
        // Buat animasi fade out untuk welcome screen
        welcomeScreen.style.transition = 'opacity 1s ease-in-out';
        welcomeScreen.style.opacity = '0';

        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            galleryContainer.style.display = 'block';
            galleryContainer.style.transition = 'opacity 1s ease-in-out';
            galleryContainer.style.opacity = '1';
        }, 1000); // Setelah 1 detik, tampilkan galeri
    });
});
