class Mask {
    constructor(ship, background, width, height) {
        this.ship = ship;
        this.background = background;
        this.width = width;
        this.height = height;
    }
    draw() {
        context.drawImage(this.background, this.ship.x - (this.width - this.ship.width) / 2, this.ship.y - (this.height - this.ship.height) / 2, this.width, this.height);
    }
}

class Praska {
    constructor(start_pos, texture, width, height) {
        this.x = start_pos;
        this.y = //must hardcode;
        this.texture = texture;
        this.width = width;
        this.height = height;
    }
    move(key) {
        /* Управление
        if (key == 'd') {
            
        }
        if (key == 'c') {
            
        }
        if (key == 'k') {
            
        }
        if (key == 'm') {
            
        }
        if (key == "space") {
            
        }
        */
    }
    draw() {
        context.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
}