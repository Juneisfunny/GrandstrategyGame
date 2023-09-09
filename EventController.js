const box = document.querySelector(".box");


var oldX;
var oldY;

var newX;
var newY;

var cameraX = 0;
var cameraY = 0;

var PredictedIncome;

function updateDisplay() {
    //pageX.innerText = event.pageX;
    //pageY.innerText = event.pageY;
    function PredictIncome() {
        PredictedIncome = 2500;

        function GetResc(value, index) {
            if (value.faction == CurrentPlayer) {

                for (i = 0; i != 8; i++) {
                    switch (Buildings[value.buildslot[i]].resc) {

                        case ("n/a"):
                            break;
                        case (0):
                            PredictedIncome = PredictedIncome + Buildings[value.buildslot[i]].income;
                            break;
                        case (2):
                            break;
                    }
                }
            }

        }
        TerrList.forEach(GetResc)
        return PredictedIncome;
    }
    document.getElementById("x").innerText = cameraX;
    document.getElementById("y").innerText = cameraY;
    document.getElementById("z").innerText = Factions[Player].resc[0] + " +(" + PredictIncome() + ")"
    document.getElementById("ctrl").innerText = Factions[TerrList[CurrentlySelected].faction].name + TerrList[CurrentlySelected].faction;
    document.getElementById("turncount").innerText = Turn;
    document.getElementById("rsc").innerText = Factions[Player].resc[5];
    document.getElementById("ctrl1").innerText = TerrList[CurrentlySelected].regionname + CurrentlySelected + " " + GetRegionValue(CurrentlySelected);
    document.getElementById("rels").innerText = Factions[Player].rels[TerrList[CurrentlySelected].faction];

    //dev menu

    tempPlayer = TerrList[CurrentlySelected].faction
    document.getElementById("SlPlyr").innerText = tempPlayer;
    document.getElementById("CrPlyr").innerText = CurrentPlayer;
    document.getElementById("CrPlyrGold").innerText = Factions[tempPlayer].resc[0];

    updateBuild()
}

function updateRegion() {
    //Dialogue Box
    if (CurrentlySelected != "n/a" && TerrList[CurrentlySelected].faction <= 11) {
        document.getElementById("FlagSmall").src = "img/flag_small/" + TerrList[CurrentlySelected].faction + ".png";
        document.getElementById("Faction_Portrait").src = "img/flag_small/" + TerrList[CurrentlySelected].faction + ".png";
    } else {
        document.getElementById("FlagSmall").src = "img/flag_small/default.png";
        document.getElementById("Faction_Portrait").src = "img/flag_small/default.png";
    }

    document.getElementById("FactionIdentifier").innerText = Factions[TerrList[CurrentlySelected].faction].name + " " + TradeRescConv(CurrentlySelected);

    document.getElementById("FactionDialogue").innerText = DialogueGet();

}

function getMouseDown(event) {
    oldX = event.pageX;
    oldY = event.pageY;
}

function getMouseUp(event) {
    newX = event.pageX;
    newY = event.pageY;
    cameraX = cameraX + (newX - oldX)
    cameraY = cameraY + (newY - oldY)
    updateDisplay(event)
}

function closeTownUpgrade() {
    document.getElementById("TownUpgrade").classList.add("Hide");
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);

box.addEventListener("mousedown", getMouseDown, false);
box.addEventListener("mouseup", getMouseUp, false);