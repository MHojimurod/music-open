const app = document.querySelector(".app");
const card = document.querySelector(".card");
const musicBtn = document.querySelector("#music-btn");
var music;
// music.classList.add('music');
const music_con = document.getElementById("music-container");
// music_con.appendChild(music);
const seek_input = document.querySelector("#seek_input");
const plays = document.querySelectorAll(".play");
const volume = document.querySelector("#volume_p");


let appState = {
  musicAvailable: false,
  isPlaying: false,
  isMuted: false,
  currentPlay: null,
};

musicBtn.addEventListener("click", (e) => {
  if (!appState.isPlaying) {
    if (!appState.currentPlay) {
      let play = plays[0];
      music = new Audio(`media/${play.parentElement.dataset.music}`);
      music_con.appendChild(music);
      play.src =
        "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-pause-essential-collection-bearicons-detailed-outline-bearicons.png";

      if (appState.currentPlay) {
        appState.currentPlay.src =
          "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-miscellaneous-flatart-icons-outline-flatarticons.png";
        appState.currentPlay = play;
      } else {
        appState.currentPlay = play;
      }
    }

    app.classList.add("app-animation");
    card.classList.add("card-animation");
    musicBtn.className = "bx bx-pause-circle";

    music.play();
    appState.isPlaying = true;
  } else {
    appState.currentPlay.src = "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-miscellaneous-flatart-icons-outline-flatarticons.png";
    app.classList.remove("app-animation");
    card.classList.remove("card-animation");
    musicBtn.className = "bx bx-play-circle";
    music.pause();
    appState.isPlaying = false;
  }
});

document
  .getElementById("control-volume")
  .addEventListener("mousewheel", (e) => {
    console.log(music.volume);
    if (e.deltaY < 0) {
      if (music.volume < 1) music.volume += 0.1;
    } else {
      if (music.volume > 0.1) music.volume -= 0.1;
    }
    volume.textContent = `${parseInt(music.volume * 100)}`;
  });

document.body.onkeyup = function (e) {
  if (appState.musicAvailable) {
    if (e.keyCode === 32) {
      if (!appState.isPlaying) {
        app.classList.add("app-animation");
        card.classList.add("card-animation");
        musicBtn.className = "bx bx-pause-circle";
        music.play();
        appState.isPlaying = true;
      } else {
        app.classList.remove("app-animation");
        card.classList.remove("card-animation");
        musicBtn.className = "bx bx-play-circle";
        music.pause();
        appState.isPlaying = false;
      }
    }
  }
};

for (const play of plays) {
  play.addEventListener("click", (e) => {
    if (!appState.isPlaying) {
      music = new Audio(`media/${play.parentElement.dataset.music}`);
      music_con.appendChild(music);
      // music.play();
      if (appState.currentPlay) {
        appState.currentPlay.src =
          "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-miscellaneous-flatart-icons-outline-flatarticons.png";
        appState.currentPlay = play;
      } else {
        appState.currentPlay = play;
      }
      play.src =
        "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-pause-essential-collection-bearicons-detailed-outline-bearicons.png";
      music.onload = () => {
        seek_input.max = music.duration;
      };
      music.play();
      seek_input.disabled = false;

      music.addEventListener("timeupdate", (e) => {
        seek_input.value = music.currentTime;
      });

      seek_input.addEventListener("change", (e) => {
        music.currentTime = seek_input.value;
      });

      seek_input.addEventListener("change", (e) => {
        music.currentTime = seek_input.value;
      });

      app.classList.add("app-animation");
      card.classList.add("card-animation");
      musicBtn.className = "bx bx-pause-circle";
      appState.isPlaying = true;
      appState.musicAvailable = true;
    } else {
      if (appState.currentPlay == play) {
        app.classList.remove("app-animation");
        card.classList.remove("card-animation");
        musicBtn.className = "bx bx-play-circle";
        music.pause();
        appState.isPlaying = false;
        play.src =
          "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-miscellaneous-flatart-icons-outline-flatarticons.png";
        return;
      }
      app.classList.remove("app-animation");
      card.classList.remove("card-animation");
      musicBtn.className = "bx bx-play-circle";
      if (appState.currentPlay) {
        appState.currentPlay.src =
          "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-miscellaneous-flatart-icons-outline-flatarticons.png";
        appState.currentPlay = play;
      } else {
        appState.currentPlay = play;
      }
      play.src =
        "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-pause-essential-collection-bearicons-detailed-outline-bearicons.png";

      music.pause();
      music.remove();

      music = new Audio(`media/${play.parentElement.dataset.music}`);
      music_con.appendChild(music);
      music.play();
      music.onload = () => {
        seek_input.max = music.duration;
        alert("loaded");
      };
      seek_input.disabled = false;

      music.addEventListener("timeupdate", (e) => {
        seek_input.value = music.currentTime;
      });

      seek_input.addEventListener("change", (e) => {
        music.currentTime = seek_input.value;
      });

      seek_input.addEventListener("change", (e) => {
        music.currentTime = seek_input.value;
      });

      app.classList.add("app-animation");
      card.classList.add("card-animation");
      musicBtn.className = "bx bx-pause-circle";
      appState.isPlaying = true;
      appState.musicAvailable = true;
    }
  });
}
