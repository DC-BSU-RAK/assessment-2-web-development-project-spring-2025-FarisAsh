document.addEventListener("DOMContentLoaded", () => {
    if (!window._doomMusicInitialized) {
        const audio = new Audio("audio/doom_theme.mp3");
        audio.loop = true;
        audio.volume = 0.2;

        //storing universally
        window._doomAudio = audio;
        window._doomMusicInitialized = true;

        //only play when user interacts, this is limitation is due to browser restrictions
        const startMusic = () => {
            audio.play().catch(err => {
                console.log("Autoplay blocked, waiting for interaction.");
            });
            document.body.removeEventListener("click", startMusic);
        };

        document.body.addEventListener("click", startMusic);

        //resume music
        const lastTime = localStorage.getItem("doom_music_time");
        if (lastTime) {
            audio.currentTime = parseFloat(lastTime);
        }

        //saving progress of the music
        window.addEventListener("beforeunload", () => {
            localStorage.setItem("doom_music_time", audio.currentTime);
        });
    }
});