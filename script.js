const videos = document.querySelectorAll(".video-card");

videos.forEach(card => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});

function filterVideos(category) {
    videos.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
