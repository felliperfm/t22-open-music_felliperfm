export function toggleDarkMode() {
    document.body.classList.toggle('body--dark-mode');

    document.querySelector('h1').classList.toggle('h1--dark-mode');

    document.querySelectorAll('h2').forEach(element => {
        element.classList.toggle('h2--dark-mode');
    });

    document.querySelectorAll('h3').forEach(element => {
        element.classList.toggle('h3--dark-mode');
    });

    document.querySelectorAll('p').forEach(element => {
        element.classList.toggle('p--dark-mode');
    });

    document.querySelector('header').classList.toggle('header--dark-mode');

    document.querySelectorAll('.genre__button').forEach(element => {
        element.classList.toggle('genre__button--dark-mode');
    });

    document.querySelectorAll('.album').forEach(element => {
        element.classList.toggle('album--dark-mode');
    });

    document.querySelector('.header__button').classList.toggle('header__button--dark-mode');

    const isDarkMode = document.body.classList.contains('body--dark-mode');
    localStorage.setItem('@openMusic:theme', JSON.stringify(isDarkMode));
}

export function loadThemePreference() {
    const themePreference = JSON.parse(localStorage.getItem('@openMusic:theme'));
    if (themePreference) {
        toggleDarkMode()
    }
}