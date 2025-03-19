
class Coin extends AnimatedObject {
    constructor(_color, width, height, x, y, _type) {
        super("yellow", width, height, x, y, "coin");
    }

    update(_level, deltaTime) {
        this.updateFrame(deltaTime);
    }
}
