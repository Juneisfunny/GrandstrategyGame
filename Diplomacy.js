function DiplomacyShow() {
    document.getElementById("DiplomacyView").classList.remove("Hide");
    document.getElementById("DiplomacyView").classList.add("Show");
}

function DiplomacyHide() {
    document.getElementById("DiplomacyView").classList.add("Show");
    document.getElementById("DiplomacyView").classList.remove("Hide");
}

function GetRegionValue(Terr) {
    Val = 0;

    //Getting Value of all the buildings
    for (i = 1; i != 8; i++) {
        Val = Val + Buildings[TerrList[Terr].buildslot[i]].cost;
    }


    //Checking Townhall Value   
    Townhall = TerrList[Terr].buildslot[0];
    for (i = Buildings[Townhall].tier; i != -1; i--) {
        Val = Val + Buildings[Townhall - i].cost;
    }
    return Val;

}


function DiplomacyChoice(arg) {
    switch (arg) {
        case (0):
            Factions[Player].rels[TerrList[CurrentlySelected].faction] += 10;
            break;

        case (1):
            Factions[Player].rels[TerrList[CurrentlySelected].faction] -= 10;
            break;

        case (2):
            TerrList[CurrentlySelected].faction = Player;
            break;

        case (3):
            TradeMenuController();
            break;
    }
}

function DialogueGet() {

    rel = Factions[Player].rels[TerrList[CurrentlySelected].faction];
    if (rel >= 0) {
        rand = (Math.floor((Math.random() * DiplomacyDial[0].pos[0].length - 1) + 1));
        return DiplomacyDial[Factions[TerrList[CurrentlySelected].faction].factionType].pos[0][Math.round(rand)]; //Factions[CurrentPlayer].race
    }

}


function DiplomacyInit(pos, neut, neg) {
    this.pos = pos;
    this.neut = neut;
    this.neg = neg;
}

var DiplomacyDial = [
    new DiplomacyInit([
            ["Hello, fellow elven brethern", "The elven court welcomes you", "Greetings, friend"],
            ['How may the Elven Court help you today']
        ],
        [],
        []
    )
]

function TradeRescConv(Checked) { //Returns the exotic resource value

    temp = 0; //Total value

    Checked = TerrList[Checked].faction;

    for (i = 0; i != Resources.length; i++) {
        if (Resources[i].tag == "Exotic") { //If the resource is exotic

            //pure EVIL - I hate it here
            temp = temp + Factions[Checked].resc[i] * Resources[i].value; // = Amount * value\

            //alert(Resources[i].name + " - " + Resources[i].value + Factions[Checked].resc[i])
        }
    }

    return temp;
}
