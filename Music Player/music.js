const prevButton = document.querySelector('#prev'),
    nextButton = document.querySelector('#next'),
    repeatButton = document.querySelector('#repeat'),
    shuffleButton = document.querySelector('#shuffle'),
    audio = document.querySelector('#audio'),
    songImage = document.querySelector('#song-image'),
    songName = document.querySelector('#song-name'),
    songArtist = document.querySelector('#song-artist'),
    pauseButton = document.querySelector('#pause'),
    playButton = document.querySelector('#play'),
    playlistButton = document.querySelector('#playlist'),
    maxDuration = document.querySelector('#max-duration'),
    currentTimeRef = document.querySelector('#current-time'),
    progressBar = document.querySelector('#progress-bar'),
    playlistContainer = document.querySelector('#playlist-container'),
    playlistSongs = document.querySelector('#playlist-songs'),
    currentProgress = document.querySelector('#current-progress');

    // index for songs
    let index;

    // loop initialise true
    let loop = true;

    const songlist = [
        {
            name: "Unloving you",
            link: "audio/Anson Seabra - Unloving You (Official Lyric Video)-mc.m4a",
            artist: "Anson Seabra",
            image:"image/anime1.jpg"
        },
        {
            name: "A little do you know",
            link: "audio/Alex & Sierra - Little Do You Know (Lyrics)-mc.m4a",
            artist: "Alex & Sierra ",
            image:"image/anime2.jpg"
        },
        {
            name: "Unloving you",
            link: "audio/Anson Seabra - Unloving You (Official Lyric Video)-mc.m4a",
            artist: "Anson Seabra",
            image:"image/anime1.jpg"
        },
        {
            name: "Unloving you",
            link: "audio/Anson Seabra - Unloving You (Official Lyric Video)-mc.m4a",
            artist: "Anson Seabra",
            image:"image/anime1.jpg"
        },
        {
            name: "Unloving you",
            link: "audio/Anson Seabra - Unloving You (Official Lyric Video)-mc.m4a",
            artist: "Anson Seabra",
            image:"image/anime1.jpg"
        },
    ]

    let events = {
        mouse: {
            click:'click',
        },
        touch: {
            click: "touchstart",
        },
    };

    let deviceType = "";

    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            deviceType = "touch";
            return true;
        } catch(e) {
            deviceType = "mouse";
            return false;
        }
    };

    const timeFormatter = (timeInput) => {
        let minute = Math.floor(timeInput/60);
        minute = minute < 10 ? "0" + second : second;
        let second = second < 10 ? "0" + second : second;
        return `${minute}:${second}`;
    };

    // set songs

    const setSong = (arrayIndex) => {
        let {name, link, artist, image} = songlist[arrayIndex];
        audio.src = link;
        songName.innerHTML = name;
        songArtist.innerHTML = artist;
        songImage.src = image;

        audio.onloadedmetadata = () => {
            maxDuration.innerText = timeFormatter(audio.duration);
        };
    };

    const playAudio = () => {
        audio.play();
        pauseButton.classList.remove("hide");
        playButton.classList.add("hide");
    };

    playButton.addEventListener("click", playAudio);

    repeatButton.addEventListener("click", () => {
        if(repeatButton.classList.contains('active')) {
            repeatButton.classList.remove("active")
        }
    })