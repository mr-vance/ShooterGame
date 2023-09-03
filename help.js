// JavaScript to handle the pop-up card
document.addEventListener('DOMContentLoaded', function () {
    const howToPlayBtn = document.getElementById('howToPlayBtn');
    const popupCard = document.getElementById('popupCard');
    const closeBtn = document.getElementById('closeBtn');

    // Open the pop-up when "How to Play" button is clicked
    howToPlayBtn.addEventListener('click', function () {
        popupCard.style.display = 'block';
    });

    // Close the pop-up when "Close" button is clicked
    closeBtn.addEventListener('click', function () {
        popupCard.style.display = 'none';
    });
});
