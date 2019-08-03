class Segment {


    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    movepX() {
        if (this.x < 870) {

            this.x += 30;

        } else {

        }
    }

    movenX() {
        if (this.x > 0) {

            this.x -= 30;

        } else {


        }

    }

    movepY() {
        if (this.y > 0) {

            this.y -= 30;

        } else {


        }

    }

    movenY() {

        if (this.y < 570) {

            this.y += 30;

        } else {


        }

    }

}

class Next extends Segment {




}


// left - 37
// up - 38
//right - 39
//down - 40

var flag = 0;
const seg = [];
seg[0] = new Segment(300, 60);
var element = document.querySelector(".segment")
var randX = 0;
var randX = 0;
var hitboxX = 0;
var hitboxY = 0;
var y = 0;
var segments = [];
const s = [];
s[0] = seg[0];
var segmeX = 300;
var segmeY = 60;
var pointz = 0;
var c;
let i = 0;



function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Delay(i) {

}

const direction = function (e) {

    if (e.keyCode == 37) {
        flag = 0;
    } else if (e.keyCode == 38) {
        flag = 1;
    } else if (e.keyCode == 39) {
        flag = 2;
    } else if (e.keyCode == 40) {
        flag = 3;
    }
}

// left - 37
// up - 38
//right - 39
//down - 40

const directionm = function () {

    if (flag == 0) { //left

        element = document.querySelector(`.segment:nth-child(${s.length})`);
        seg[s.length - 1].movenX();
        element.style.setProperty('left', seg[s.length - 1].x + 'px');

    } else if (flag == 1) { //up


        element = document.querySelector(`.segment:nth-child(${s.length})`);
        seg[s.length - 1].movepY();
        element.style.setProperty('top', seg[s.length - 1].y + 'px');



    } else if (flag == 2) { //right



        element = document.querySelector(`.segment:nth-child(${s.length})`);
        seg[s.length - 1].movepX();
        element.style.setProperty('left', seg[s.length - 1].x + 'px');



    } else if (flag == 3) { //down

        element = document.querySelector(`.segment:nth-child(${s.length})`);
        seg[s.length - 1].movenY();
        element.style.setProperty('top', seg[s.length - 1].y + 'px');

    }

    mealEngine();
}



const othermovement = function () {


    // if (i > 0) {

    //     nju = s[i]
    //     nju.style.setProperty('top', seg[i + 1].y + 'px');
    //     nju.style.setProperty('left', seg[i + 1].x + 'px');
    //     --i;



    // } else {

    //     i = s.length - 2;
    //     nju = s[i]
    //     nju.style.setProperty('top', seg[i + 1].y + 'px');
    //     nju.style.setProperty('left', seg[i + 1].x + 'px');
    //     --i;
    // }

    i = s.length - 2

    for (i = s.length - 2; i > 0; i--) {

        nju = s[i];
        nju.style.setProperty('top', seg[i + 1].y + 'px');
        nju.style.setProperty('left', seg[i + 1].x + 'px');


    }

}




const hitboxEngine = function (v, min, max) {

    return (v >= min) && (v <= max); //ok

}

const mealEngine = function () {

    if (document.querySelector('#field').children.length == pointz + 1) {
        randX = randomInt(0, 870);
        randY = randomInt(0, 570);
        const m = document.createElement('div'); //ok
        m.classList.add("meal");
        m.style.setProperty('left', randX + "px");
        m.style.setProperty('top', randY + "px");
        field.appendChild(m);
    }

    if (hitboxEngine(seg[seg.length - 1].x, randX - 30, randX + 30) && hitboxEngine(seg[seg.length - 1].y, randY - 30, randY + 30)) {

        document.querySelector('#field').removeChild(document.querySelector(".meal"));
        s[seg.length] = document.createElement('div');
        s[seg.length].classList.add("segment");
        pointz++;


        if (flag == 1) {

            seg[seg.length] = new Segment(seg[seg.length - 1].x, seg[seg.length - 1].y - 32);
            s[seg.length - 1].style.setProperty('left', seg[seg.length - 1].x + "px");
            s[seg.length - 1].style.setProperty('top', seg[seg.length - 1].y - 32 + "px");
            field.appendChild(s[seg.length - 1]);

        } else if (flag == 3) {

            seg[seg.length] = new Segment(seg[seg.length - 1].x, seg[seg.length - 1].y + 32);
            s[seg.length - 1].style.setProperty('left', seg[seg.length - 1].x + "px");
            s[seg.length - 1].style.setProperty('top', seg[seg.length - 1].y + 32 + "px");
            field.appendChild(s[seg.length - 1]);



        } else if (flag == 2) {

            seg[seg.length] = new Segment(seg[seg.length - 1].x + 32, seg[seg.length - 1].y);
            s[seg.length - 1].style.setProperty('left', seg[seg.length - 1].x + 32 + "px");
            s[seg.length - 1].style.setProperty('top', seg[seg.length - 1].y + "px");
            field.appendChild(s[seg.length - 1]);

        } else {

            seg[seg.length] = new Segment(seg[seg.length - 1].x - 32, seg[seg.length - 1].y);
            s[seg.length - 1].style.setProperty('left', seg[seg.length - 1].x - 32 + "px");
            s[seg.length - 1].style.setProperty('top', seg[seg.length - 1].y + "px");
            field.appendChild(s[seg.length - 1]);


        }

    }


}

const pointCounter = function () {

    document.querySelector(".contentBox").innerHTML = `Points:${pointz}`; //REMEMBER - BIG LETTERS (inner --> HTML <-- not Html)!

}



window.addEventListener('keydown', direction);
working = window.setInterval(directionm, 50);
working2 = window.setInterval(mealEngine, 10);
working3 = window.setInterval(pointCounter, 10);