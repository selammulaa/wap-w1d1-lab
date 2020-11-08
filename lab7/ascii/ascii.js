var interval;
var delay;
var i = 0;
var animationArr;

function animate(){
    if(i < (animationArr.length -1)){
        i = i + 1;
    }else {
        i = 0;
    }
    var textArea = document.getElementById("text-area");
    textArea.value = animationArr[i];
}

function start(){
    var animaitonSelect = document.getElementById("animation");
    var selectedAnimation = animaitonSelect.value;

    if(selectedAnimation !== "Blank"){

        animaitonSelect.disabled = true;
        var stopBtn = document.getElementById("stop");
        stopBtn.disabled = false;

        var strtBtn = document.getElementById("start");
        strtBtn.disabled = true;

        
        animationArr = ANIMATIONS[selectedAnimation].split("=====\n");
        var turboCkBx = document.getElementById("turbo");
        var checked = turboCkBx.checked;
        delay = checked ? 50: 250;
        interval = setInterval(animate, delay);
    }

}

function stop(){
    clearInterval(interval);
    var textArea = document.getElementById("text-area");
    textArea.value = animationArr[0];
    i = 0;
    var stopBtn = document.getElementById("stop");
    stopBtn.disabled = true;

    var strtBtn = document.getElementById("start");
    strtBtn.disabled = false;

    var animaitonSelect = document.getElementById("animation");
    animaitonSelect.disabled = false;
}

function animationChanged(){
    var animaitonSelect = document.getElementById("animation");
    var selectedAnimation = animaitonSelect.value;
    var textArea = document.getElementById("text-area");
    animationArr = ANIMATIONS[selectedAnimation];
    textArea.value = animationArr.split("=====")[0];
}

function fontSizeChanged(){
    var fontSizeSelect = document.getElementById("fontsize");
    var selectedFontSize = fontSizeSelect.value;

    var textArea = document.getElementById("text-area");
    textArea.style.fontSize = selectedFontSize + "pt";
}

function turboCkBxClicked(){
    clearInterval(interval);
    var turboCkBx = document.getElementById("turbo");
    var checked = turboCkBx.checked;
    delay = checked ? 50 : 250;


    interval = setInterval(animate, delay);
}

function main(){

    var startBtn = document.getElementById("start");
    startBtn.onclick = start;

    var stopBtn = document.getElementById("stop");
    stopBtn.onclick = stop;

    var animaitonSelect = document.getElementById("animation");
    animaitonSelect.onchange = animationChanged;
    var fontSizeSelect = document.getElementById("fontsize");
    fontSizeSelect.onchange = fontSizeChanged;

    var turboCkBx = document.getElementById("turbo");
    turboCkBx.onclick = turboCkBxClicked;
}

window.onload = main;
