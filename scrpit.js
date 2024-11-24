const playButton = document.getElementById("play-button");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");

let isPlaying = false;

// Toggle Play/Pause
playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = "Play";
    } else {
        audio.play();
        playButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Change audio progress when slider is moved
progressBar.addEventListener("input", (event) => {
    const value = event.target.value;
    audio.currentTime = (value / 100) * audio.duration;
});
