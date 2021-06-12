const btn_left = document.querySelector(".slide__btn__left");
const btn_right = document.querySelector(".slide__btn__right");

const title = document.querySelector(".article__title > div")
const titleTarget = document.querySelectorAll(".article__title > div > h1")

const content = document.querySelector(".article__content > div")
const blur_layer = document.querySelector("#overlay")

const menu = document.querySelector("#menu")
const menuCont = document.querySelector("#menu > div")
const button_menu = document.querySelector(".nav_menu") 
const blur_back = document.querySelector("#bg__blur")


const slider = document.querySelector("#image_slider")
// INIITAL X POSITION
let posX = 0
let titleX = 0
// BLUR WHEN MOVE
blurImage = () => {
    blur_layer.style.opacity = "1"
    slider.style.transform = "scale(1.1)"
    setTimeout(() => {
        blur_layer.style.opacity = null
        slider.style.transform = null
    }, 300)
}

blurTitle = () => {
    titleTarget.forEach( e => {
        e.style.opacity = "0.5"
    })
    setTimeout(() => {
        titleTarget.forEach( e => {
            e.style.opacity = null
        })
    }, 400)
}
// SLIDING SLIDING SLING
btn_right.addEventListener("click", () => {
    if (posX == -200 && titleX == -1600) {
        title.style.left = `${titleX + 1600}px`;
        content.style.left = `${titleX + 1600}px`;
        titleX += 1600;
        slider.style.left = `${posX + 200}%`;
        posX += 200;
    } else {
        title.style.left = `${titleX - 800}px`;
        content.style.left = `${titleX - 800}px`;
        titleX -= 800;
        slider.style.left = `${posX - 100}%`;
        posX -= 100;
    }
    blurImage();
    blurTitle();
})

btn_left.addEventListener("click", () => {
    if (posX == 0 && titleX == 0) {
        title.style.left = `${titleX - 1600}px`;
        content.style.left = `${titleX - 1600}px`;
        titleX -= 1600;
        slider.style.left = `${posX - 200}%`;
        posX -= 200;
    } else {
        title.style.left = `${titleX + 800}px`;
        content.style.left = `${titleX + 800}px`;
        titleX += 800;
        slider.style.left = `${posX + 100}%`;
        posX += 100;
    }
    blurImage();
    blurTitle();
})

// MENU TOGGLE 
let menuOpen = false
button_menu.addEventListener("click", () => {
    if (menuOpen == false) {
        button_menu.classList.add("open")
        menu.style.display = "flex";
        blur_back.style.display = "initial";
        setTimeout(() => {blur_back.style.opacity = 1;}, 50)
        setTimeout(() => {menu.style.height = "120px"}, 300)
        setTimeout(() => {menuCont.style.opacity = 1}, 550)
        document.querySelector("body").style.overflow = "hidden";
        menuOpen = true
    } else {
        button_menu.classList.remove("open")
        menuCont.style.opacity = 0
        setTimeout(() => {menu.style.height = null}, 300)
        setTimeout(() => {menu.style.display = null}, 550)
        setTimeout(() => {blur_back.style.opacity = null}, 550)
        setTimeout(() => {blur_back.style.display = null}, 800)
        document.querySelector("body").style.overflow = null;
        menuOpen = false
    }
})

// ONRESIZE CLOSE MODAL ON CONDITION
window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
        button_menu.classList.remove("open")
        menuCont.style.opacity = 0
        setTimeout(() => {menu.style.height = null}, 300)
        setTimeout(() => {menu.style.display = null}, 550)
        setTimeout(() => {blur_back.style.opacity = null}, 550)
        setTimeout(() => {blur_back.style.display = null}, 800)
        document.querySelector("body").style.overflow = null;
        menuOpen = false
    }
})

console.log(titleTarget);