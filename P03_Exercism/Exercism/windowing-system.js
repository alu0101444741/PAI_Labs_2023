// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

export function ProgramWindow() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
}

ProgramWindow.prototype.resize = function (newSize) {
    if (newSize.width <= 1) {
        this.size.width = 1;
    }
    else if ((newSize.width + this.position.x) >= this.screenSize.width){
        this.size.width = this.screenSize.width - this.position.x;
    }
    else {
        this.size.width = newSize.width;
    }

    if (newSize.height <= 1) {
        this.size.height = 1;
    }
    else if ((newSize.height + this.position.y) >= this.screenSize.height){
        this.size.height = this.screenSize.height - this.position.y;
    }
    else {
        this.size.height = newSize.height;
    }
}

ProgramWindow.prototype.move = function (newPosition) {
    if (newPosition.x < 0) {
        this.position.x = 0;
    }
    else if ((newPosition.x + this.size.width) >= this.screenSize.width){
        this.position.x = this.screenSize.width - this.size.width;
    }
    else {
        this.position.x = newPosition.x;
    }

    if (newPosition.y < 0) {
        this.position.y = 0;
    }
    else if ((newPosition.y + this.size.height) >= this.screenSize.height){
        this.position.y = this.screenSize.height - this.size.height;
    }
    else {
        this.position.y = newPosition.y;
    }
}

export function changeWindow(newWindow) {
    let newSize = new Size(400, 300);
    let newPosition = new Position(100, 150);

    newWindow.resize(newSize);
    newWindow.move(newPosition);

    return(newWindow);
}
