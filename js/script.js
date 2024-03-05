const share = document.querySelector('.share');
const socialLinks = document.querySelector('.social-links');

share.addEventListener('click', () => {
    socialLinks.classList.toggle('active');
})