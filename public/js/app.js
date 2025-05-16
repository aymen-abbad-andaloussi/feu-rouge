let red = document.querySelector('.red')
let oronge = document.querySelector('.oronge')
let green = document.querySelector('.green')

red.classList.remove('red2')
oronge.classList.remove('oronge2')
green.classList.remove('green2')

let time = 0
setInterval(() => {
    if (time == 0) {
        green.classList.add('green2')
    }else if (time == 1) {
        oronge.classList.add('oronge2')
        setTimeout(() => {
            oronge.classList.remove('oronge2')
        }, 1000);
        setTimeout(() => {
            oronge.classList.add('oronge2')
        }, 2000);
        setTimeout(() => {
            oronge.classList.remove('oronge2')
        }, 3000);
        setTimeout(() => {
            oronge.classList.add('oronge2')
        }, 4000);
        setTimeout(() => {
            oronge.classList.remove('oronge2')
        }, 5000);

    }else if (time == 2) {
        red.classList.add('red2')
    }
    time++
    if (time == 3) {
        time = 0
    }
}, 6000);