class Segment {


    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.points = 0;

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
        segmento.movenX()
        element.style.setProperty('left', segmento.x + "px");
        console.log('moving left');
    } else if (flag == 1) {
        segmento.movepY();
        element.style.setProperty('top', segmento.y + "px");
        console.log('strzalkagora');
    } else if (flag == 2) {
        segmento.movepX();
        element.style.setProperty('left', segmento.x + "px");
        console.log('strzalkaprawo');
    } else if (flag == 3) {
        segmento.movenY()
        element.style.setProperty('top', segmento.y + "px");
        console.log('strzalkadol');
    }

    mealEngine();
}

const hitboxEngine = function (v, min, max) {

    return (v >= min) && (v <= max);

}

const mealEngine = function () {

    if (document.querySelector('#field').children.length == 1) {
        randX = randomInt(0, 870);
        randY = randomInt(0, 570);
        const m = document.createElement('div');
        m.classList.add("meal")
        m.style.setProperty('left', randX + "px");
        m.style.setProperty('top', randY + "px");
        field.appendChild(m);
    }

    if (hitboxEngine(segmento.x, randX - 30, randX + 30) && hitboxEngine(segmento.y, randY - 30, randY + 30)) {
        segmento.points++;
        document.querySelector('#field').removeChild(document.querySelector(".meal"));
    }


}

const pointCounter = function () {

    document.querySelector(".contentBox").innerHTML = `Points:${segmento.points}`; //REMEMBER - BIG LETTERS (inner --> HTML <-- not Html)!

}



window.addEventListener('keydown', direction);
working = window.setInterval(directionm, 10);
working2 = window.setInterval(mealEngine, 10);
working3 = window.setInterval(pointCounter, 10);