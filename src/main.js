/*
 * All the colours, sizes etc.
 */
var bgcol = 0x232323;
var paddlecol = 0xfdfdfd;
var ballcol = paddlecol;

var paddlemargin = 5;
var paddlewidth = 20;

/*
 * Defining some variables so they can be used anywhere.
 */
var renderer,
    stage,
    graphics

function initPIXI() {
    renderer = PIXI.autoDetectRenderer(
        800, 500,
        {antialias: false, transparent: false, resolution: 1}
    );

    //document.body.appendChild(renderer.view);
    document.body.insertBefore(renderer.view, document.getElementById('caption'));

    stage = new PIXI.Container();
    renderer.render(stage);

    graphics = new PIXI.Graphics();
    stage.addChild(graphics);
}

function drawRect(fillColour, width, height, x, y) {
    graphics.beginFill(fillColour);
    graphics.drawRect(x, y, width, height)
}

function drawPaddle(lorr, y) {
    if (lorr == "l") var x = 5
    if (lorr == "r") var x = 800 - paddlewidth - paddlemargin;
}

function animate() {
    renderer.render(stage);
}

setInterval(animate, 50);
