function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() *
            coloms - 1) + 1) * sacle;
        this.y = (Math.floor(Math.random() *
            rows - 1) + 1) * scale;

    }

    this.draaw = function() {
        ctx.fillStyle = "#4cafab";
        ctx.fillRect(this.x, scale, scale)
    }
}