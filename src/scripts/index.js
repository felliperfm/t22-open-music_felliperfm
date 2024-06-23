document.querySelectorAll('.genreButton').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.genreButton').forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');

    });
});
