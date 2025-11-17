document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playlist = document.getElementById("playlist-list");
  const items = playlist.getElementsByTagName("a");

  let current = 0;

  function playSong(index) {
    audioPlayer.src = items[index].href;
    audioPlayer.load();
    audioPlayer.play();
    current = index;
  }

  playSong(current);

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
      e.preventDefault();
      playSong(i);
    });
  }

  audioPlayer.addEventListener("ended", function() {
    current = (current + 1) % items.length;
    playSong(current);
  });
});
