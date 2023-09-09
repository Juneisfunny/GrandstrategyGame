var BuildPlace = "n/a";
var BuildRegion = "n/a";
var Sheet = "n/a"

function updateBuild() {
    for (y = 0; y != 8; y++) {
        if (TerrList[CurrentlySelected].faction == Player) {
            document.getElementById("Box" + y).innerText = Buildings[TerrList[CurrentlySelected].buildslot[y]].name;
        } else {
            document.getElementById("Box" + y).innerText = Buildings[TerrList[CurrentlySelected].buildslot[y]].name + "\n(Not Owned)";
        }


    }
}

function BuildMenu(arg, sheet) {

    document.getElementById("TownUpgrade").classList.remove("Hide");
    document.getElementById("TownUpgrade").classList.add("Show");

    if (arg != "n/a") {
        BuildPlace = arg;
        BuildRegion = CurrentlySelected;
        document.getElementById("Upgr1").innerText = TerrList[CurrentlySelected].regionname;
    }


    function DeductSheet(sht) {
        switch (sht) {
            case (0):
                if (Factions[Player].factionType == TerrList[BuildRegion].unqfaction) {
                    return TerrList[BuildRegion].uniqueSheet;
                } else {
                    return FactionTypes[Factions[Player].factionType].defsheet;
                }
                break;
            case (1):
                if (TerrList[BuildRegion].unqresc == "n/a") {
                    return FactionTypes[Factions[Player].factionType].econsheet;
                } else {
                    rtrn = 0

                    function FindUnqSheet(value, index) {
                        //alert(Resources[TerrList[BuildRegion].unqresc].name+"=="+Sheets[index].note)
                        if (Resources[TerrList[BuildRegion].unqresc].name == Sheets[index].note) {
                            rtrn = index;
                        }
                    }
                    Sheets.forEach(FindUnqSheet)
                    return rtrn;
                }
                break;
        }

    }
    Sheet = DeductSheet(sheet)


    for (x = 0; x != 4; x++) {
        for (i = 0; i != 4; i++) {
            if (Sheets[Sheet].column[x][i] != "n/a") {
                document.getElementById("Box" + x + "-" + i).innerText = Buildings[Sheets[Sheet].column[x][i]].name + Sheets[Sheet].column[x][i] + "\n" + Buildings[Sheets[Sheet].column[x][i]].cost;
            } else {
                document.getElementById("Box" + x + "-" + i).innerText = "";
            }
        }
    }
}

function BuildUpgrade(z, y) {

    if (Factions[Player].resc[0] - Buildings[Sheets[Sheet].column[z][y]].cost > 0 &&
        TerrList[BuildRegion].buildslot[BuildPlace] != Sheets[Sheet].column[z][y] &&
        TerrList[BuildRegion].faction == Player && (
            Buildings[TerrList[BuildRegion].buildslot[0]].tier >= Buildings[Sheets[Sheet].column[z][y]].tier || (BuildPlace == 0))) {
        //)&&(TerrList[BuildRegion].uniqueSheet||FactionTypes[Factions[Player].factionType].defsheet
        if (Buildings[Sheets[Sheet].column[z][y]].demolishable == 1 || Buildings[TerrList[BuildRegion].buildslot[BuildPlace]].demolishable == 1) {
            if (Sheets[Sheet].column[z][y - 1] == TerrList[BuildRegion].buildslot[BuildPlace]) {
                BuildConstruct(z, y)
            }
        } else {
            BuildConstruct(z, y)
        }

    }
}

function BuildConstruct(z, y) {

    TerrList[BuildRegion].buildslot[BuildPlace] = Sheets[Sheet].column[z][y];
    Factions[Player].resc[0] = Factions[Player].resc[0] - Buildings[Sheets[Sheet].column[z][y]].cost

    if (BuildPlace == 0) {

        TerrList[BuildRegion].tier = Buildings[TerrList[BuildRegion].buildslot[0]].tier
    }
}