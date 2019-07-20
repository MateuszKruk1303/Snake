class segment {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    movepX() {
        this.x++;
    }

    movenX() {
        this.x--;
    }

    movepY() {
        this.y++;
    }

    movenY() {
        this.y--;
    }

}

const element = document.querySelector("#segment")
const segment = new Segment(3, 5);

const direction = function (e) {


    if (e.keyCode == 38) {
        obiekt.style.setProperty('top', segment.movepY() + "%");
        console.log('strzalkagora');

    } else if (e.keyCode == 39) {
        obiekt.style.setProperty('left', segment.movenX() + "px");
        console.log('strzalkaprawo');

    } else if (e.keyCode == 40) {
        obiekt.style.setProperty('top', y + "px");
        console.log('strzalkadol');
    } else if (e.keyCode == 37) {
        obiekt.style.setProperty('left', x + "px");
        console.log('strzalkalewo');
    }
}

window.addEventListener('keydown', ruch);