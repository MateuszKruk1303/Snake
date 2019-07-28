class Segment {


    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.points = [];

    }

    movepX() {
        if (this.x < 870) {

            this.x += 2;

        } else {

        }
    }

    movenX() {
        if (this.x > 0) {

            this.x -= 2;

        } else {


        }

    }

    movepY() {
        if (this.y > 0) {

            this.y -= 2;

        } else {


        }

    }

    movenY() {

        if (this.y < 570) {

            this.y += 2;

        } else {


        }

    }

}

class Backsegment extends Segment {

    constructor(x, y) {

        super(x, y)

    }
}


// left - 37
// up - 38
//right - 39
//down - 40

var flag = 0;
const segmento = new Segment(300, 60);
const element = document.querySelector(".segment")
var randX = 0;
var randX = 0;
var hitboxX = 0;
var hitboxY = 0;
var y = 0;
var segments = [];
const s = [];
s[0] = segmento;



function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

const directionm = function () {

    if (flag == 0) {
        for (var i = 0; i <= s.length; i++) {

            s[i].movenX();
            element.style.setProperty('left', segmento.x + "px");
            console.log('moving left');

        }

    } else if (flag == 1) {

        for (var i = 0; i <= s.length; i++) {

            s[i].movepY();
            element.style.setProperty('top', segmento.y + "px");
            console.log('strzalkagora');

        }

    } else if (flag == 2) {

        for (var i = 0; i <= s.length; i++) {

            s[i].movepX();
            element.style.setProperty('left', segmento.x + "px");
            console.log('strzalkaprawo');

        }


    } else if (flag == 3) {

        for (var i = 0; i <= s.length; i++) {

            s[i].movenY()
            element.style.setProperty('top', segmento.y + "px");
            console.log('strzalkadol');

        }

    }

    mealEngine();
}

const hitboxEngine = function (v, min, max) {

    return (v >= min) && (v <= max);

}

const mealEngine = function () {

    if (document.querySelector('#field').children.length == segmento.points.length + 1) {
        randX = randomInt(0, 870);
        randY = randomInt(0, 570);
        const m = document.createElement('div');
        m.classList.add("meal")
        m.style.setProperty('left', randX + "px");
        m.style.setProperty('top', randY + "px");
        field.appendChild(m);
    }

    if (hitboxEngine(segmento.x, randX - 30, randX + 30) && hitboxEngine(segmento.y, randY - 30, randY + 30)) {
        segmento.points[segmento.points.length] = 1;
        document.querySelector('#field').removeChild(document.querySelector(".meal"));
        s[segmento.points.length] = document.createElement('div');
        s[segmento.points.length].classList.add("segment");
        if (flag == 1 || flag == 3) {
            s[segmento.points.length].style.setProperty('left', segmento.x + "px");
            s[segmento.points.length].style.setProperty('top', segmento.y + 32 + "px");

        } else {
            s[segmento.points.length].style.setProperty('left', segmento.x + 32 + "px");
            s[segmento.points.length].style.setProperty('top', segmento.y + "px");

        }

        field.appendChild(s[segmento.points.length]);
        s.reverse();

    }


}

const pointCounter = function () {

    document.querySelector(".contentBox").innerHTML = `Points:${segmento.points.length}`; //REMEMBER - BIG LETTERS (inner --> HTML <-- not Html)!

}



window.addEventListener('keydown', direction);
working = window.setInterval(directionm, 10);
working2 = window.setInterval(mealEngine, 10);
working3 = window.setInterval(pointCounter, 10);