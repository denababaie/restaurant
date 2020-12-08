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
    function closed() {
        document.querySelector("#fat > u").innerHTML = "We are closed"
        document.querySelector("#fat > u").style.fontSize = " 40px"
        day.style.background = " red"
    }
    function horaire(){
        if (h < 11) {
            closed()
        } else if (h <= 11 && m < 30) {
            closed()
        } else if (h == 11 && m > 30) {
            day.style.background = " rgb(101, 196, 101"
        } else if (h >= 12 && h <= 14) {
            day.style.background = " rgb(101, 196, 101"
        } else if (h >= 18) {
            day.style.background = " rgb(101, 196, 101"
        } else if (h >= 22 && m >= 30) {
            closed()
        }
    }
    if (ladate.getDay() == 1) {
        closed()
    } else if (ladate.getDay() == 2) {
        horaire()
    } else if (ladate.getDay() == 3) {
        horaire()
    } else if (ladate.getDay() == 4) {
        horaire()
    } else if (ladate.getDay() == 5) {
        horaire()
    } else if (ladate.getDay() == 6) {
        horaire()
    } else if (ladate.getDay() == 7) {
        closed()
    }
})
day.addEventListener("mouseout", function () {
    day.style.background = "#231D21 "
    day.style.color = "white"
    document.querySelector("#fat > u").innerHTML = "Opening hours"
    document.querySelector("#fat > u").style.fontSize = " xx-large"
})