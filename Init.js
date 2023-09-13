var FactionCount = Factions.length;
var WaveColorQueue = [];
var WaveCoastLine = [];
var SeaRoughness = 0;
var WaveSpeed = 0;

//The value doesn't matter, just that they're defined
var CurrentlySelected = 0;
var pos = -1;

function InitMain() {

    /*if(Devmode==true){
        document.getElementById("Devmenu").classList.add("Show");
        document.getElementById("Devmenu").classList.remove("Hide");
    }*/

    PredetermineWaves()


    //TerrList.forEach(LocateShores)
    Factions.forEach(RelationAssign);

    ForestZones.forEach(PredetermineTreePlacement)
    TerrList.forEach(AssignTier)

    function PredetermineWaves() {
        for (i = 0; i != 2000; i++) {
            rand = (Math.floor(Math.random() * 5))
            WaveColorQueue.push(rand)
        }
    }

    /*function LocateShores(value, index) {
        temp = value //Get the territory's info

        function isTouching(Edge1) { //Check if the corner is touching anything
            for (i = 0; i != TerrList.length; i++) {
                if (Edge1[0] <= TerrList[i].posX + TerrList[index].sizeX &&
                    Edge1[0] >= TerrList[i].posX &&
                    Edge1[1] <= TerrList[i].posY + TerrList[index].sizeY &&
                    Edge1[1] >= TerrList[i].posY) {
                    return true;
                }
            }
            return false;
        }

        Edge1 = [temp.posX + temp.sizeX, temp.posY + temp.sizeY + 20] //Finding Edge1
        Edge2 = [temp.posX, temp.posY + temp.sizeY + 20] //Finding Edge2

        HasFoundShape = []

        if (!isTouching(Edge1)) { //Check if its touching Edge1
            HasFoundShape[0] = false;
            if (!isTouching(Edge2)) { //Check if its touching Edge2
                x = 0;
                HasFoundShape[1] = false;
            } else {
                //Id rather kms than code this rn
            }
        } else {
            HasFoundShape = true;
        }

        if (HasFoundShape[0] == false) {
            if (HasFoundShape[1] == false) { //if there is no shape in the way
                TempList[0][0] = index //Get Index
                TempList[0][0] = index
                WaveCoastLine.push(TempList) //Push Index to Queue                
            } else {
                for (x = 0; x != temp.sizeX; x = x + 10) {
                    if (isTouching([0, 0])) {}
                }
            }
        }
    }*/



    function PredetermineTreePlacement(value, index) {
        for (i = 0; i != 100; i++) {
            max_x = ForestZones[index].x + ForestZones[index].size_x;
            min_x = ForestZones[index].x;
            x = Math.floor(Math.random() * (max_x - min_x) + min_x);

            ForestZones[index].tree_x[i] = x;

            max_y = ForestZones[index].y + ForestZones[index].size_y;
            min_y = ForestZones[index].y;
            y = Math.floor(Math.random() * (max_y - min_y) + min_y);

            ForestZones[index].tree_y[i] = y;
            temp = Math.floor(Math.random() * (10) + 1)
            if (temp == 10) {
                ForestZones[index].tree_type[i] = 2
            } else {
                ForestZones[index].tree_type[i] = 1
            }

        }
    }

    function AssignTier(value, index) {
        TerrList[index].tier = Buildings[TerrList[index].buildslot[0]].tier
    }

    function RelationAssign(value, index) {
        for (i = 0; i != FactionCount; i++) {

            //0 - Factions[index].race
            Factions[index].rels[i] = Races[Factions[index].race].rels[Factions[i].race];
        }
    }
    //PredetermineWavePlacement()
}
InitMain()