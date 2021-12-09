var audioOne = document.getElementById("audioOne");
var audioTwo = document.getElementById('audioTwo');
var audioThree = document.getElementById('audioThree');
var audioFour = document.getElementById('audioFour');
var audioFive = document.getElementById('audioFive');
var audioSix = document.getElementById('audioSix');
var audioSeven = document.getElementById('audioSeven');
var audioEight = document.getElementById('audioEight');
var audioNine = document.getElementById('audioNine');
var audioTen = document.getElementById('audioTen');

var key = document.getElementsByClassName("key");//global variable

//array
var keys = [];
var sound = [];


sound[0] = new Howl({
    src: ['audio/1.mp3'],
})

sound[1] = new Howl({
    src: ['audio/2.mp3'],
})

sound[2] = new Howl({
    src: ['audio/3.mp3'],
})

sound[3] = new Howl({
    src: ['audio/4.mp3'],
})

sound[4] = new Howl({
    src: ['audio/5.mp3'],
})

sound[5] = new Howl({
    src: ['audio/6.mp3'],
})

sound[6] = new Howl({
    src: ['audio/7.mp3'],
})

sound[7] = new Howl({
    src: ['audio/8.mp3'],
})

sound[8] = new Howl({
    src: ['audio/9.mp3'],
})

sound[9] = new Howl({
    src: ['audio/laser.mp3'],
})


document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);


function keyPressed(evt) {
    console.log(evt.keyCode);
    //A=65}
    if (evt.keyCode == 65) {
        audioOne.play();
        key[0].style.backgroundColor = "red";
    }
    //S=83
    if (evt.keyCode == 83) {
        audioTwo.play();
        key[1].style.backgroundColor = "blue";
    }
    if (evt.keyCode == 68) {
        audioThree.play();
        key[2].style.backgroundColor = "yellow";
    }
    if (evt.keyCode == 70) {
        audioFour.play();
        key[3].style.backgroundColor = "gray";
    }

    if (evt.keyCode == 74) {
        audioFive.play();
        key[4].style.backgroundColor = "red";
    }

    if (evt.keyCode == 75) {
        audioSix.play();
        key[5].style.backgroundColor = "blue";
    }

    if (evt.keyCode == 76) {
        audioSeven.play();
        key[6].style.backgroundColor = "yellow";
    }

    if (evt.keyCode == 186) {
        audioEight.play();
        key[7].style.backgroundColor = "gray";
    }

    if (evt.keyCode == 222) {
        audioNine.play();
        key[8].style.backgroundColor = "red";
    }

    if (evt.keyCode == 32) {
        audioTen.play();
        key[9].style.backgroundColor = "blue";
    }
}

function keyReleased(evt) {
    console.log(evt.keyCode);
    //A keyup
    if (evt.keyCode == 65) {
        key[0].style.backgroundColor = "white";
    }

    if (evt.keyCode == 83) {
        key[1].style.backgroundColor = "white";
    }

    if (evt.keyCode == 68) {
        key[2].style.backgroundColor = "white";
    }

    if (evt.keyCode == 70) {
        key[3].style.backgroundColor = "white";
    }

    if (evt.keyCode == 74) {
        key[4].style.backgroundColor = "white";
    }

    if (evt.keyCode == 75) {
        key[5].style.backgroundColor = "white";
    }

    if (evt.keyCode == 76) {
        key[6].style.backgroundColor = "white";
    }

    if (evt.keyCode == 186) {
        key[7].style.backgroundColor = "white";
    }

    if (evt.keyCode == 222) {
        key[8].style.backgroundColor = "white";
    }

    if (evt.keyCode == 32) {
        key[9].style.backgroundColor = "white";
    }

}

// function keyUp(evt) {
//     keys[evt.keycode] = true;

//     if (keys[65]) {
//         sound[0].play();
//     }

//     if (keys[83]) {
//         sound[1].play();
//     }

//     if (keys[68]) {
//         sound[2].play();
//     }

//     if (keys[70]) {
//         sound[3].play();
//     }

// }

// function keyDown(evt) {
//     delete keys[evt.keyCode];

//     if (evt.keyCode == 65) {
//         key[0].style.backgroundColor = 'white';
//     }

//     if (evt.keyCode == 83) {
//         key[1].style.backgroundColor = 'white';
//     }

//     if (evt.keyCode == 68) {
//         key[2].style.backgroundColor = 'white';
//     }

//     if (evt.keyCode == 70) {
//         key[3].style.backgroundColor = 'white';
//     }

//     keys[evt.keyCode];

// }