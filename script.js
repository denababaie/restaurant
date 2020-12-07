const day = document.querySelector(".jour")
let ladate = new Date()
let h = ladate.getHours();
if (h < 10) {
    h = "0" + h
}
let m = ladate.getMinutes();
if (m < 10) {
    m = "0" + m
}
day.addEventListener("mouseover", function () {
    if (ladate.getDay() == 1) {
        day.style.background = " red"
    } else if (ladate.getDay() == 2) {
        day.style.background = " rgb(101, 196, 101"
    } else if (ladate.getDay() == 3) {
        day.style.background = " rgb(101, 196, 101"
    } else if (ladate.getDay() == 4) {
        day.style.background = " rgb(101, 196, 101"
    } else if (ladate.getDay() == 5) {
        day.style.background = " rgb(101, 196, 101"
    } else if (ladate.getDay() == 6) {
        day.style.background = " rgb(101, 196, 101"
    } else if (ladate.getDay() == 7) {
        day.style.background = " red"
    }
    //____________________________
    else if (h < 11) {
        day.style.background = " red"
    } else if (h < 11 && m < 30) {
        day.style.background = " red"
    } else if (h == 11 && m > 30) {
        day.style.background = " rgb(101, 196, 101"
    } else if (h >= 12 && h <= 14) {
        day.style.background = " rgb(101, 196, 101"
    } else if (h >= 18) {
        day.style.background = " rgb(101, 196, 101"
    } else if (h >= 22 && m >= 30) {
        day.style.background = " red"
    }
})
day.addEventListener("mouseout", function () {
    day.style.background = "white"
    day.style.color ="black"
})