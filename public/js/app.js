let red = document.querySelector('.red')
let oronge = document.querySelector('.oronge')
let green = document.querySelector('.green')

function off() {
    red.classList.remove('red2')
    oronge.classList.remove('oronge2')
    green.classList.remove('green2')
}
//* first methode

// let time = 0
// setInterval(() => {
//     off()
//     if (time == 0) {
//         green.classList.add('green2')
//         setTimeout(() => {
//             green.classList.remove('green2')
//         }, 3000);
//         setTimeout(() => {
//             green.classList.add('green2')
//         }, 4000);
//         setTimeout(() => {
//             green.classList.remove('green2')
//         }, 5000);
//         setTimeout(() => {
//             green.classList.add('green2')
//         }, 6000);
//         setTimeout(() => {
//             green.classList.remove('green2')
//         }, 7000);
//         setTimeout(() => {
//             green.classList.add('green2')
//         }, 8000);
//     }else if (time == 1) {
//         oronge.classList.add('oronge2')
//     }else if (time == 2) {
//         red.classList.add('red2')
//     }
//     time++
//     if (time == 3) {
//         time = 0
//     }
// }, 9000);

//* second method

// let time = 1
// setInterval(() => {
//     if (time = 1) {
//     off()
//     green.classList.add('green2')
//     setTimeout(() => {
//         green.classList.remove('green2')
//     }, 3000);
//     setTimeout(() => {
//         green.classList.add('green2')
//     }, 4000);
//     setTimeout(() => {
//         green.classList.remove('green2')
//     }, 5000);
//     setTimeout(() => {
//         green.classList.add('green2')
//     }, 6000);
//     setTimeout(() => {
//         green.classList.remove('green2')
//     }, 7000);
//     setTimeout(() => {
//         green.classList.add('green2')
//     }, 8000);
//     setTimeout(() => {
//         green.classList.remove('green2')
//     }, 9000);
//     setTimeout(() => {
//         oronge.classList.add('oronge2')
//     }, 9000);
//     setTimeout(() => {
//         oronge.classList.remove('oronge2')
//     }, 12000);
//     setTimeout(() => {
//         red.classList.add('red2')
//     }, 12000);
//     setTimeout(() => {
//         red.classList.remove('red2')
//     }, 15000);
//     time = 1
// }
// }, 15000);

//* third method
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is best idea ^^^^^^^^^^^^^^^^^^^^^^^^^^

function functionTiming() {
    green.classList.add('green2')
    setTimeout(() => {
        green.classList.remove('green2')
    }, 3000);
    setTimeout(() => {
        green.classList.add('green2')
    }, 4000);
    setTimeout(() => {
        green.classList.remove('green2')
    }, 5000);
    setTimeout(() => {
        green.classList.add('green2')
    }, 6000);
    setTimeout(() => {
        green.classList.remove('green2')
    }, 7000);
    setTimeout(() => {
        green.classList.add('green2')
    }, 8000);
    setTimeout(() => {
        green.classList.remove('green2')
    }, 9000);
    setTimeout(() => {
        oronge.classList.add('oronge2')
    }, 9000);
    setTimeout(() => {
        oronge.classList.remove('oronge2')
    }, 12000);
    setTimeout(() => {
        red.classList.add('red2')
    }, 12000);
    setTimeout(() => {
        red.classList.remove('red2')
    }, 15000);
}

let btn = document.getElementById('btn')
off()

btn.addEventListener('click',()=>{

    functionTiming()

setInterval(() => {
    if (time = 1) {
    off()
    functionTiming()
    time = 1
}
}, 15000);

let tim = document.getElementById('tim')

let hour = 0
let minut = 0
let sec = 1


let interv = setInterval(() =>{
    if (sec === 10) {
        sec = 0
        minut ++
    }
    if (minut === 10) {
        minut = 0
        hour++
    }

    
    tim.textContent = hour + 'h : ' + minut + 'm : ' + sec + 's'
  sec++
}, 1000)
})