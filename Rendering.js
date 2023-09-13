const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var CurrentlySelected = "n/a";

function clickAnalysis(event) {
    clickX = event.pageX;
    clickY = event.pageY;
    RegionClicked = false;

    TerrList.forEach(ScrollThroughTerr)

    function ScrollThroughTerr(value, index) {
        if (clickX <= TerrList[index].posX + cameraX + TerrList[index].sizeX &&
            clickX >= TerrList[index].posX + cameraX &&
            clickY <= TerrList[index].posY + cameraY + TerrList[index].sizeY &&
            clickY >= TerrList[index].posY + cameraY) {
            CurrentlySelected = index;
            RegionClicked = true;

        }
    }

    if (RegionClicked == true) {
        document.getElementById("TownDisplay").classList.remove("Hide");
        document.getElementById("TownDisplay").classList.add("Show");
    } else {
        //CurrentlySelected="n/a";
        document.getElementById("TownDisplay").classList.add("Hide");
    }

    updateRegion();
    updateDisplay();
}

var GameTicks = 1
var TickGoal = 50;

function Gameclock() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    GameTicks++
    if (GameTicks == TickGoal) { // Drawing Clouds
        console.log("sending a cloud at " + GameTicks)
        AddSceneObject("Cloud", cameraY + (Math.floor(Math.random() * 1080)), GameTicks + 80 + cameraX)
        TickGoal = GameTicks + (Math.floor(Math.random() * 900) + 200)
    }

    //AnimationTicks()
    //DrawWaves()

    TerrList.forEach(RenderDirt);
    TerrList.forEach(RenderTerr);
    TerrList.forEach(DrawGrid);
    TerrList.forEach(DrawOutline)

    //DrawShoreWaves()

    function RenderDirt(value, index) {
        if (CurrentlySelected == index) {
            x = "#291d10"
        } else {
            x = "#45311c";
        }
        ctx.fillStyle = x;
        ctx.fillRect(TerrList[index].posX + cameraX, TerrList[index].posY + cameraY + 20, TerrList[index].sizeX, TerrList[index].sizeY);
    }

    function RenderTerr(value, index) {
        /*if (CurrentlySelected == index) {
            x = Factions[TerrList[index].faction].selcolor
        } else {
            x = Factions[TerrList[index].faction].color
        }*/

        if (SeasonTimer != 3) {
            ctx.fillStyle = Biomes[TerrList[index].biome].color1;
        } else {
            ctx.fillStyle = Biomes[TerrList[index].biome].color3;
        }
        ctx.fillRect(TerrList[index].posX + cameraX, TerrList[index].posY + cameraY, TerrList[index].sizeX, TerrList[index].sizeY);
    }


    function DrawGrid(value, index) {


        if (SeasonTimer != 3) {
            x = Biomes[TerrList[index].biome].color2;
        } else {
            x = Biomes[TerrList[index].biome].color4;
        }

        ctx.fillStyle = x;
        if (TerrList[index].posX % 10 == 0 && TerrList[index].sizeX % 10 == 0) { // I have 0 memory of writing this code
            for (i = 0; TerrList[index].sizeX / 10 > i; i = i + 2) {
                for (a = 0; TerrList[index].sizeY / 10 > a; a++) {
                    if (a % 2 == 0) {
                        ctx.fillRect(TerrList[index].posX + cameraX + (i * 10), TerrList[index].posY + cameraY + (a * 10), 10, 10)
                    } else {
                        if (TerrList[index].sizeX / 10 > i + 1) {
                            ctx.fillRect(TerrList[index].posX + cameraX + (i * 10) + 10, TerrList[index].posY + cameraY + (a * 10), 10, 10)
                        }

                    }
                }
            }
        } else { //99% sure this is the same code???????????
            for (i = 0; TerrList[index].sizeX / 10 > i; i = i + 2) {

                PosXoffset = (TerrList[index].posX % 10)
                SizeXoffset = (TerrList[index].sizeX % 10)

                for (a = 0; TerrList[index].sizeY / 10 > a; a++) {

                    if ((TerrList[index].sizeX) / 10 > a) {
                        if (a % 2 == 0) {
                            ctx.fillRect(TerrList[index].posX + cameraX + (i * 10) - PosXoffset, TerrList[index].posY + cameraY + (a * 10), 10, 10)
                        } else {
                            if (TerrList[index].sizeX / 10 > i + 1) {
                                ctx.fillRect(TerrList[index].posX + cameraX + (i * 10) + 10 - PosXoffset, TerrList[index].posY + cameraY + (a * 10), 10, 10)
                            }
                        }
                    }
                }
            }
        }
    }

    function DrawOutline(value, index) {
        if (CurrentlySelected == index) {
            x = Factions[TerrList[index].faction].selcolor
        } else {
            x = Factions[TerrList[index].faction].color
        }
        Temp = TerrList[index]

        ctx.fillStyle = x;
        ctx.fillRect(Temp.posX + cameraX, Temp.posY + cameraY, Temp.sizeX, 5);
        ctx.fillRect(Temp.posX + cameraX, Temp.posY + cameraY + Temp.sizeY - 5, Temp.sizeX, 5);
        ctx.fillRect(Temp.posX + cameraX, Temp.posY + cameraY, 5, Temp.sizeY);
        ctx.fillRect(Temp.posX + cameraX + Temp.sizeX - 5, Temp.posY + cameraY, 5, Temp.sizeY);
    }

    DrawForestObjects()
    DrawGameWorldObjects()
    if (Devmode == true) {
        DrawDevObjects()
    }

    DrawSceneObjects()

    DrawRenders()

}

canvas.addEventListener("mousedown", clickAnalysis, false);
setInterval(Gameclock, 25);