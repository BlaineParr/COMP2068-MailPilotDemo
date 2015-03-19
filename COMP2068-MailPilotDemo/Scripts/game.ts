/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/scoreboard.ts" />

var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var game: createjs.Container;

//Game objects
var plane: objects.Plane;
var island: objects.Island;
var clouds: objects.Cloud[] = [];
var ocean: objects.Ocean;
var scoreBoard: objects.ScoreBoard;

// asset manifest - array of asset objects
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" }

];

//Utility Functions///////////////////////////////////////////////////////////////////////////////
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
} //function preload ends

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
} //function init ends

function gameLoop() {
    stats.begin();
    stage.update(); // Refreshes our stage
    plane.update(); //updates plane's position
    island.update(); //updates island's position    
    ocean.update(); //updates ocean's position
    stats.end();

    if (scoreBoard.lives > 0) {
        checkCollision(island);

        for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
            clouds[cloud].update(); //updates cloud's position
            checkCollision(clouds[cloud]);
        } //for ends
    } //if ends;

    scoreBoard.update();

    if (scoreBoard.lives < 1) {
        game.removeAllChildren();
        game.removeAllEventListeners();
        createjs.Sound.stop();
        stage.removeAllChildren();
    } //if ends
} //function gameLoop ends


// Our Game Kicks off in here
function main() {
    //instantiate game conainer
    game = new createjs.Container;

    //add ocean to game
    ocean = new objects.Ocean();
    game.addChild(ocean);

    //add island to game
    island = new objects.Island();
    game.addChild(island);

    //add plane to game
    plane = new objects.Plane();
    game.addChild(plane);

    //add clouds to game
    for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
        clouds[cloud] = new objects.Cloud(); //updates cloud's position
        game.addChild(clouds[cloud]);
    } //for ends

    scoreBoard = new objects.ScoreBoard();

    setupStats();
} //function main ends

function setupStats() {
    stats.setMode(0)
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
} //function setupStats ends

//calculate the distance between two points
function distance(p1: createjs.Point, p2: createjs.Point): number {
    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
} //function distance ends

function checkCollision(collider: objects.GameObject) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = plane.x;
    p1.y = plane.y;
    p2.x = collider.x;
    p2.y = collider.y;
    if (distance(p2, p1) < ((plane.height * 0.5) + (collider.height * 0.5))) {
        if (!collider.isColliding) { //collision has occurred
            createjs.Sound.play(collider.soundString);
            collider.isColliding = true;

            switch(collider.name) {
                case "island": scoreBoard.score += 100;
                    break;
                case "cloud": scoreBoard.lives--;
            } //case ends
        } //if ends
    } //if ends
    else {
        collider.isColliding = false;
    } //else ends

    stage.addChild(game);
} //function plandAndCloud ends