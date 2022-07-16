// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navHeader = document.querySelector(".nav-header");
const navItem = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
    navHeader.classList.toggle("active");
    main.classList.toggle("active");
});

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", () => {
        navHeader.classList.toggle("active");
        main.classList.toggle("active");
    })
}


// section 1 - animation text
const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;


// section 3 - portofolios
const porto = document.querySelectorAll("#porto");
const imgPorto = document.getElementsByClassName("img-porto");
const descPorto = document.getElementsByClassName("desc-porto");

for (let i = 0; i < porto.length; i++) {
    porto[i].addEventListener("mouseover", () => {
        imgPorto[i].style.display = "none";
        descPorto[i].style.display = "inline";
    })
    porto[i].addEventListener("mouseout", () => {
        imgPorto[i].style.display = "inline";
        descPorto[i].style.display = "none";
    })
}