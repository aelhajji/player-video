var video = document.querySelector(".video");
var juice = document.querySelector(".yellow-juice");
var btn = document.getElementById("play-pause");


//button navigator code !!!---------------------------------------------------------------------------------

window.addEventListener('keydown', function next(e) { //boton next
    if (e.which == 76 || e.which == 76) {
        video.currentTime = video.currentTime + 5
        document.getElementsByClassName("baten")[3].style = ("transform: scale(1.2)")
        setTimeout(function () {
            document.getElementsByClassName("baten")[3].style = ("font-size:15px");
        }, 30);
    }
});

window.addEventListener('keydown', function prev(e) { //boton prev
    if (e.which == 74 || e.which == 74) {
        video.currentTime = video.currentTime - 5
        document.getElementsByClassName("baten")[1].style = ("transform: scale(1.2)")
        setTimeout(function () {
            document.getElementsByClassName("baten")[1].style = ("font-size:15px");
        }, 30);
    }
});

window.addEventListener('keydown', function PlayPause(e) { //btn play pausse
    if (e.which == 75 || e.which == 75) {
        if (video.paused) {
            btn.className = "pause";
            video.play();
        } else {
            btn.className = "play";
            video.pause();
        }
    }
});

//PLAY&PAUSE:video!!!!!!------------------------------------------------------------------------------------------------------

function PlayPause() {
    if (video.paused) {
        btn.className = "pause";
        video.play();
        video.playbackRate = 1
        video.muted = false
    } else {
        btn.className = "play";
        video.pause();
    }
}

//duration:video !!!!!------------------------------------------------------------------------------------------------------

video.addEventListener('timeupdate', function () {
    // var v = document.getElementsByClassName("baten")[6]
    // v.innerHTML = video.currentTime.toFixed(0);
    var positions = video.currentTime / video.duration;
    juice.style.width = positions * 100 + "%";
});

//for sond:on/of !!!!!!! ---------------------------------------------------------------------------------------------------

function sondonof() {

    x = document.getElementsByClassName("baten")[6]
    v = document.getElementsByClassName("volume")[0]

    if (video.muted == false) {
        video.muted = true
        x.className = "fas fa-volume-mute baten "
        v.value = 0



    } else {
        video.muted = false
        x.className = "fas fa-volume-up baten "
        v.value = 100

    }
}

// hover : range sond!!!!!-----------------------------------------------------------------------------------------------------------

function hoverrangesond() {
    v = document.getElementsByClassName("volume")[0]
    v.style = "display:block"
    setTimeout(function () {
        v.style = ("display:none");
    }, 5000);

}

//TIME: NEXT AND PREV 10s(in video)!!!!! ---------------------------------------------------------------------------------------

function next() {
    video.currentTime = video.currentTime + 5
    document.getElementsByClassName("baten")[3].style = ("transform: scale(1.2)")
    setTimeout(function () {
        document.getElementsByClassName("baten")[3].style = ("font-size:15px");
    }, 30);
}

function prev() {
    video.currentTime = video.currentTime - 5
    document.getElementsByClassName("baten")[1].style = ("transform: scale(1.2)")
    setTimeout(function () {
        document.getElementsByClassName("baten")[1].style = ("font-size:15px");
    }, 30);
}

// for stopping!!!!! ------------------------------------------------------------------------------------------------------------

function stop1() {
    video.pause();
    video.currentTime = 0
    btn.className = "play";
    document.getElementsByClassName("baten")[2].style = ("transform: scale(1.2)")
    setTimeout(function () {
        document.getElementsByClassName("baten")[2].style = ("font-size:15px");
    }, 30);
}

//for speed!!!!!! ---------------------------------------------------------------------------------------------------------------

function speed1() {
    if (video.playbackRate == 1) {
        video.playbackRate = 0.2
        video.muted = true
    } else {
        video.playbackRate = 1
        video.muted = false
    }
}

//for volume!!!! -----------------------------------------------------------------------------------------------------------------

function volume1(e) {
    x = document.getElementsByClassName("baten")[6]
    video.volume = e / 100
    if (video.volume == 0) {
        x.className = "fas fa-volume-mute baten "
        video.muted = true
        video.muted = false
    } else if (video.volume > 0 && video.volume < 0.3) {
        x.className = "fas fa-volume-off baten"
        video.muted = false
    } else if (video.volume >= 0.3 && video.volume < 0.6) {
        x.className = "fas fa-volume-down baten"
        video.muted = false
    } else {
        x.className = "fas fa-volume-up baten "
        video.muted = false
    }
}

//for next video!!!! ---------------------------------------------------------------------------------------------------------------

function nextved() {
    document.getElementsByClassName("video")[0].src = "HDR3.MP4"
    video.play()
    document.getElementsByClassName("baten")[4].style = ("transform: scale(1.2)")
    setTimeout(function () {
        document.getElementsByClassName("baten")[4].style = ("font-size:15px");
    }, 30);
}


//for prev =>video!!!!----------------------------------------------------------------------------------------------------------------

function prevved() {
    document.getElementsByClassName("video")[0].src = "HDR.MP4"
    video.play()
    document.getElementsByClassName("baten")[0].style = ("transform: scale(1.2)")
    setTimeout(function () {
        document.getElementsByClassName("baten")[0].style = ("font-size:15px");
    }, 30);
}
//fin:-------------------------------------------------------------------------------------------------------------------------------------