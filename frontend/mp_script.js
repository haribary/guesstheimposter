document.addEventListener('DOMContentLoaded', function() {

    const startButton = document.querySelector('.start_button');
    const aboutButton = document.querySelector('.about_button');

    startButton.addEventListener('click', () => {
        window.location.href = './game_page/game.html';
    });

    aboutButton.addEventListener('click', () => {
        window.location.href = './about_page/about.html';
    });
});