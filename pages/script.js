document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        '"Rip and tear, until it is done." - King Novik',
        '"They are rage, brutal, without mercy." - King Novik',
        '"Fight like Hell." - DOOM tagline',
        '"You think the only way is to kill them all - leave nothing behind - and you may be right." - Samuel Hayden',
    ];

    const quoteElement = document.getElementById('doom-quote');
    let currentIndex = 0;

    function updateQuote() {
        //Fade out
        quoteElement.style.opacity = 0;

        setTimeout(() => {
            //quote changes after fading out
            quoteElement.textContent = quotes[currentIndex];
            //Fade in
            quoteElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % quotes.length;
        }, 500); //fade out duration
    }

    //starts with the first quote
    updateQuote();
    setInterval(updateQuote, 3000); //3 seconds for each quote
});
