const grid = document.getElementById("grid");
const video = document.getElementById("videoPlayer");
const audio = document.getElementById("audioPlayer");
const player = document.getElementById("player");

const files = [
  "cinema.mp4",
  "get-out-hello-neighbor.mp3"
];

files.forEach(file => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerText = file.replace(/\.[^/.]+$/, "");

  div.onclick = () => {
    const route = "/" + file.replace(/\.[^/.]+$/, "");
    history.pushState({ file }, "", route);
    openFile(file);
  };

  grid.appendChild(div);
});

function openFile(file) {
  player.style.display = "flex";

  if (file.endsWith(".mp4")) {
    audio.style.display = "none";
    video.style.display = "block";
    video.src = file;
    video.play();
  } else {
    video.style.display = "none";
    audio.style.display = "block";
    audio.src = file;
    audio.play();
  }
}

function closePlayer() {
  player.style.display = "none";
  video.pause();
  audio.pause();

  history.pushState({}, "", "/");
}

window.onpopstate = (event) => {
  const path = window.location.pathname.replace("/", "");

  if (!path) {
    closePlayer();
    return;
  }

  const file = files.find(f =>
    f.replace(/\.[^/.]+$/, "") === path
  );

  if (file) {
    openFile(file);
  }
};

window.onload = () => {
  const path = window.location.pathname.replace("/", "");

  if (path) {
    const file = files.find(f =>
      f.replace(/\.[^/.]+$/, "") === path
    );

    if (file) openFile(file);
  }
};
