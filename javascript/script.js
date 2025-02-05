
const thumbnail = document.getElementById("thumbnail");
const videoContainer = document.getElementById("videoContainer");
const videoPlayer = document.getElementById("videoPlayer");
const exitBtn = document.getElementById("exitBtn");
const thumbnailLink = document.getElementById("thumbnailLink");

// When the thumbnail link is clicked, show the video container
thumbnailLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    videoContainer.style.display = "flex";  // Show the video container
    videoPlayer.load();  // Ensure video is reset (no autoplay)
    videoPlayer.play(); // Make sure the video does not play automatically
});

// When the exit button is clicked, hide the video and reset
exitBtn.addEventListener("click", function () {
    videoContainer.style.display = "none";  // Hide video container
    thumbnail.style.display = "block";  // Show the thumbnail again
    videoPlayer.pause();  // Pause the video
    videoPlayer.currentTime = 0;  // Reset the video to the start
});