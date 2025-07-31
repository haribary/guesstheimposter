document.addEventListener('DOMContentLoaded', function() {

    const return_button = document.querySelector('.return_button');


    return_button.addEventListener('click', () => {
        window.location.href = '../main_page.html';
    });
});