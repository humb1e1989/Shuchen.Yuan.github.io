document.addEventListener('DOMContentLoaded', () => {
    var stick = document.querySelector("#stick");
    var muyu = document.querySelector("#mokugyo");
    var music = document.querySelector("#music");
    var auto = document.querySelector("#auto");

    // automatically play the music
    var autoPlayMusic;

    autoPlay();
    addNum();
    setTimeout(() => {
        playMusic();
        autoPlayMusic = setInterval(playMusic, 1000);
        autoAddNum = setInterval(addNum, 1000);
    }, 500);
    // triggered when the check box is changed
    auto.addEventListener("change", () => {
        if (auto.checked) {
            autoPlay();
            addNum();
            setTimeout(() => {
                playMusic();
                autoPlayMusic = setInterval(playMusic, 1000);
                autoAddNum = setInterval(addNum, 1000);
            }, 500);
        } else {
            clearInterval(autoPlayMusic);
            clearInterval(autoAddNum);
            document.querySelector(".stick").className = "stick";
        }
    });
    // click the stick
    function clickstick() {
        document.querySelector(".stick").className = "stick";
        window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            document.querySelector(".stick").className = "stick move";
        });
    });
    setTimeout(playMusic, 500);
    setTimeout(addNum, 500);
    }
    // play the music
    function playMusic() {
    music.play();
    }
    // automatically count the number of the clicking
    function autoPlay() {
    document.querySelector(".stick").className = "stick";
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            document.querySelector(".stick").className = "stick auto_move";
        });
    });
    }
    // clicking the Mokugyo
    function clickMokugyo() {
    playMusic();
    addNum();
    }
    // Daily virtue, total virtue
    var todayNum = 0,
        allNum = 0;
    var today = document.querySelector("#today_count");
    var all = document.querySelector("#all_count");
    getNum();
    function getNum() {
    if (localStorage.key("todayNum")) {
        todayNum = +localStorage.getItem("todayNum");
        today.innerHTML = todayNum;
    } else {
        localStorage.setItem("todayNum", 0);
    }
    if (localStorage.key("allNum")) {
        allNum = +localStorage.getItem("allNum");
        all.innerHTML = allNum;
    } else {
        localStorage.setItem("allNum", 0);
    }
    }
    // virtue ++
    function addNum() {
    showtips();
    setTimeout(hiddenTips, 600);
    // daily virtue + 1
    todayNum = +todayNum + 1;
    today.innerHTML = todayNum;
    localStorage.setItem("todayNum", todayNum);
    // total virtue + 1
    allNum = +allNum + 1;
    all.innerHTML = allNum;
    localStorage.setItem("allNum", allNum);
    }
    // the controller of the addtion for the virtue
    var tips = document.querySelector("#tips");
    function showtips() {
    tips.style.visibility = "visible";
    tips.style.opacity = "1";
    tips.style.top = "50px";
    }

    function hiddenTips() {
    tips.style.visibility = "hidden";
    tips.style.opacity = "0";
    tips.style.top = "100px";
}

