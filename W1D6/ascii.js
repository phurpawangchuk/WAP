"use strict";


window.onload = startApplication;

function startApplication() {

    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const contentArea = document.getElementById("text-area");
    const animationType = document.getElementById("animation");
    const selectedFontSize = document.getElementById("fontsize");
    const turboChecked = document.getElementById("turbo");

    let speed = 250;
    let currentAnimation = null;
    let timer = null;
    let index = 0;
    let animation;

    animationType.addEventListener("change", selectedAnimation);
    stopBtn.addEventListener("click", stopAnimation);
    startBtn.addEventListener("click", startAnimation);
    selectedFontSize.addEventListener("change", selectFontSize);
    turboChecked.addEventListener("change", changeSpeed);

    function selectedAnimation() {
        animation = animationType.value.toUpperCase();
        currentAnimation = ANIMATIONS[animation].split("=====\n");
        contentArea.innerHTML = currentAnimation[index];
    }

    function startAnimation() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        animationType.disabled = true;
        timer = setInterval(updateTime, speed);
    }

    function updateTime() {
        contentArea.innerHTML = currentAnimation[index];
        index++;
        if (index >= currentAnimation.length) {
            index = 0;
        }
    }

    function stopAnimation() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animationType.disabled = false;
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    function selectFontSize() {
        let currentWidth = contentArea.offsetWidth;
        let currentHeight = contentArea.offsetHeight;
        contentArea.style.fontSize = selectedFontSize.value + "px";
        contentArea.style.width = currentWidth + "px";
        contentArea.style.height = currentHeight + "px";
    }

    function changeSpeed() {
        if (turboChecked.checked) {
            speed = 50;
        } else {
            speed = 250;
        }

        if (timer !== null) {
            clearInterval(timer);
            startAnimation();
        }
    }
}
