var mubang = document.querySelector("#stick");
mubang.addEventListener("click", clickstick, false);

var muyu = document.querySelector("#mokugyo");
muyu.addEventListener("click", clickmokugyo, false);

var music = document.querySelector("#music");
var auto = document.querySelector("#auto");

// 鑷姩鎾斁闊充箰
var autoPlayMusic;
// 鏀瑰彉checkbox鏃惰Е鍙�
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

// 鐐瑰嚮鏈ㄦ
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
// 鎾斁闊充箰
function playMusic() {
    music.play();
}

// 鑷姩鏁叉墦鏈ㄩ奔
function autoPlay() {
    document.querySelector(".stick").className = "stick";
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            document.querySelector(".stick").className = "stick auto_move";
        });
    });
}

// 鐐瑰嚮鏈ㄩ奔
function clickMuyu() {
    playMusic();
    addNum();
}

// 浠婃棩鍔熷痉,鎬诲姛寰�
var todayNum = 0,
    allNum = 0;
var today = document.querySelector("#today_count");
var all = document.querySelector("#all_count");
// 鍒濆鍖栬幏鍙栨祻瑙堝櫒淇濆瓨鐨勫姛寰�
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
// 鎬诲姛寰�

// 鍔熷痉+1

function addNum() {
    showtips();
    setTimeout(hiddenTips, 600);
    // 浠婃棩鍔熷痉+1
    todayNum = +todayNum + 1;
    today.innerHTML = todayNum;
    localStorage.setItem("todayNum", todayNum);
    // 鎬诲姛寰�+1
    allNum = +allNum + 1;
    all.innerHTML = allNum;
    localStorage.setItem("allNum", allNum);
}
// 鎺у埗鏄剧ず鍔熷痉+1鐨勫姩鐢�
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