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
        this.x = start_pos[0];
        this.y = start_pos[1];
        this.texture = texture;
        this.width = width;
        this.height = height;
        this.tl = 0;
        this.tr = 0
    }
    move(key) {
        if (key.keyCode == 68) {
            if (this.tl < 4) {
                this.tl++;
            }
        }
        if (key.keyCode == 67) {
            if (this.tl > 0) {
                this.tl--;
            }
        }
        if (key.keyCode == 75) {
            if (this.tr < 4) {
                this.tr++;
            }
        }
        if (key.keyCode == 77) {
            if (this.tr < 0) {
                this.tr--;
            }
        }
        if (key.keyCode == 32) {
            //Скинуть роутер
        }
        
        this.x += this.tr - this.tl;
    }
    draw() {
        context.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
}

addEventListener("keydown", prask.move;