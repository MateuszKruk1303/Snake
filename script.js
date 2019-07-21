class Segment {


    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    movepX() {
        if (this.x < 97) {

            this.x += 1;

        } else {

        }
    }

    movenX() {
        if (this.x > 0) {

            this.x -= 1;

        } else {


        }

    }

    movepY() {
        if (this.y > 0) {

            this.y -= 1;

        } else {


        }

    }

    movenY() {

        if (this.y < 96) {

            this.y += 1;

        } else {


        }

    }

}

// left - 37
// up - 38
//right - 39
//down - 40

var flag = 0;
const element = document.querySelector(".segment")
const segmento = new Segment(40, 10);

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
        element.style.setProperty('left', segmento.x + "%");
        console.log('moving left');
    } else if (flag == 1) {
        segmento.movepY();
        element.style.setProperty('top', segmento.y + "%");
        console.log('strzalkagora');
    } else if (flag == 2) {
        segmento.movepX();
        element.style.setProperty('left', segmento.x + "%");
        console.log('strzalkaprawo');
    } else if (flag == 3) {
        segmento.movenY()
        element.style.setProperty('top', segmento.y + "%");
        console.log('strzalkadol');
    }
}


window.addEventListener('keydown', direction);
working = window.setInterval(directionm, 100);