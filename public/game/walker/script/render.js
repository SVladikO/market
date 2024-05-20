

function renderLine() {
    ctx.beginPath();
    ctx.moveTo(user.x, user.y);
    ctx.lineTo(mousePositionX, mousePositionY);
    ctx.stroke();
}

function renderRectangles() {
    rectangles.forEach(coordinates => {
        const [x, y] = coordinates;
        renderRectangle(x, y);
    })
}

function renderRectangle(x, y) {
    ctx.rect(x, y, rectangleSideLenght, rectangleSideLenght);
    ctx.fillStyle = style.box.bgColor;
    ctx.fill()
    ctx.strokeStyle = style.box.borderColor;
    ctx.lineWidth = style.box.borderLineWidth;
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
}

function renderUnit(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, style.user.dorRadius, 0, 300);
    ctx.fillStyle = style.user.bgColor;
    ctx.fill()
}

function renderUnitDirection(x, y, angle) {
    const step = 1;

    ctx.moveTo(x, y);
    ctx.arc(x, y, user.visibilityRadius, angle - step, angle + step, false);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
}