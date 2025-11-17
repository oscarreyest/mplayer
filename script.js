document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playlist = document.getElementById("playlist-list");
  const items = playlist.getElementsByTagName("a");
  const titleElement = document.getElementById("track-title");

  let current = 0;

  function playSong(index) {
    audioPlayer.src = items[index].href;
    audioPlayer.load();
    audioPlayer.play();
    current = index;

    // Update visible title to match song name
    titleElement.textContent = "🎵 Now Playing: " + items[index].textContent;
  }

  // Start with first track
  playSong(current);

  // Handle clicking playlist items
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
      e.preventDefault();
      playSong(i);
    });
  }

  // When song ends, go to next
  audioPlayer.addEventListener("ended", function() {
    current = (current + 1) % items.length;
    playSong(current);
  });
});
