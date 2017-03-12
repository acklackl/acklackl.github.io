let audio = document.createElement("audio");

let Audio = (source) => {
      audio.src = source;
      return audio;
};

let changeText = (element, newtext) => {
    let target = document.getElementById(element);
    if ('textContent' in target) {target.textContent = newtext;}
    else {target.innerText = newtext;}
};

let changeTextByElement = (element, newText) => {
    let target = element;
    if ('textContent' in target) {target.textContent = newText;}
    else {target.innerText = newText;}
};

let songs = [{name: "China Eskape", source:"./assets/chinaEskape.mp3", duration: "2:49"},
    {name: "Cinmatrik", source: "./assets/cinematrik.mp3", duration: "3:56"},
    {name: "Starbirth", source: "./assets/STARBIRTHdraft3.mp3", duration: "3.29"}];

let currentSong = 0;
Audio(songs[currentSong].source);

let playCurrentSong = () => {
      Audio(songs[currentSong].source).play();
      playPauseState = false;
};


let prev = document.getElementById("prev");

let prevTrigger = () => {
      if (currentSong > 0) {
            currentSong--;
      }
      else {
          currentSong = songs.length - 1;
      }
      playCurrentSong();
      changePlayPauseStateTxt();
      highlightCurrentSong();
};

prev.addEventListener("click", prevTrigger);

let playPause = document.getElementById("playPause");

let playPauseState = true;

let changePlayPauseStateTxt = () => {
      if (playPauseState) {changeText("PPtrigger", "P");}
      else {changeText("PPtrigger", "u");}
};

let playPauseTrigger = () => {

      if (playPauseState) {
            audio.play();
            playPauseState = false;
            changePlayPauseStateTxt();
      }
      else {
            audio.pause();
            playPauseState = true;
            changePlayPauseStateTxt();
      }
      highlightCurrentSong();
};

playPause.addEventListener("click", playPauseTrigger);

let next = document.getElementById("next");

let nextTrigger = () => {
  if (currentSong < songs.length - 1) {
        currentSong++;
  }
  else {
      currentSong = 0;
  }
  playCurrentSong();
  changePlayPauseStateTxt();
  highlightCurrentSong();
};

next.addEventListener("click", nextTrigger);

let songDuration = () => {
    let durationS = fmtMSS(audio.duration);
    changeText("endTime", durationS);
};

let duration = () => {
    audio.addEventListener("loadedmetadata", songDuration);
};

let fmtMSS = s => (s-(s%=60))/60+(9<=s?':':':0')+Math.floor(s);

duration();

let addToPlaylist = () => {
    let playlist = document.getElementById("playlist");
    for (let i = 0; i < songs.length; i++) {
        let song = document.createElement("div");
        song.className = "song";
        playlist.appendChild(song);

        let songNameDiv = document.createElement("div");
        song.appendChild(songNameDiv);
        let songName = document.createElement("span");
        songName.className = "point songTitle";
        songName.id = songs[i].name.substring(0, 6);
        songNameDiv.appendChild(songName);
        changeTextByElement(songName, songs[i].name);

        let songDurationDiv = document.createElement("div");
        songDurationDiv.className = "duration";
        song.appendChild(songDurationDiv);
        let songDuration = document.createElement("span");
        songDuration.className = "point";
        songDurationDiv.appendChild(songDuration);
        changeTextByElement(songDuration, songs[i].duration);
    }
};

addToPlaylist();

let highlightCurrentSong = () => {
    let song = document.getElementsByClassName("songTitle");
    let current = songs[currentSong].name.substring(0, 6);
    for (let i = 0; i < song.length; i++) {
        if (current == song[i].id) {
            song[i].parentElement.parentElement.style.backgroundColor = "#b5ffe5";
            song[i].parentElement.parentElement.style.color = "#1c3796";
        }
        else {
            song[i].parentElement.parentElement.style.backgroundColor = "";
            song[i].parentElement.parentElement.style.color = "";
        }
    }
};

let songClick = (song) => {
    song.parentElement.parentElement.onclick = () => {
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].name.substring(0, 6) == song.id) {
                currentSong = i;
                break;
            }
        }
        playCurrentSong();
        changePlayPauseStateTxt();
        highlightCurrentSong();
    }
};

let loopSongs = () => {
  let songNames = document.getElementsByClassName("songTitle");
  for (let i = 0; i < songNames.length; i++) {
      songClick(songNames[i]);
  }
};

loopSongs();

let updateStartTime = () => {
  let startTime = document.getElementById("startTime");
  audio.ontimeupdate = () => {
      changeTextByElement(startTime, fmtMSS(audio.currentTime));
  }
};

updateStartTime();




