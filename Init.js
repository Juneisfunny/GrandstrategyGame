function Faction(name, color, selcolor, factionType, race, attitude, unq) {
    this.name = name;
    this.color = color;
    this.selcolor = selcolor;
    this.factionType = factionType;
    this.resc = [100000, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.race = race;
    this.unqrel = unq;
    this.attitude
    this.rels = [];
}

function Race(name, rel, desc) { //Im not racist BUT
    this.name = name;
    this.rels = rel;
    this.desc = desc;
}

function Resource(name, tag, value) {
    this.name = name;
    this.tag = tag;
    this.value = value;
}

function Biome(name, color1, color2, color3, color4) {
    this.name = name
    this.color1 = color1
    this.color2 = color2
    this.color3 = color3
    this.color4 = color4
}

function Territory(posX, posY, faction, sizeX, sizeY, name, desc, buildslot0, buildslot1, buildslot2, buildslot3, uniqueSheet, unqfaction, unqresc, centerpos, biome) {
    this.posX = posX;
    this.posY = posY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.faction = faction;
    this.regionname = name;
    this.buildslot = [buildslot0, buildslot1, buildslot2, buildslot3, 0, 0, 0, 0];

    this.tier = 0;
    this.uniqueSheet = uniqueSheet;
    this.unqfaction = unqfaction;
    this.unqresc = unqresc;
    this.centerpos = centerpos;

    this.biome = biome
}

function Building(name, desc, income, resc, cost, tier, demolishable) {
    this.name = name;
    this.desc = desc;
    this.income = income;
    this.resc = resc;
    this.cost = cost;
    this.tier = tier;
    this.demolishable = demolishable
}

function BuildSheets(note, name, faction, column1, column2, column3, column4, column5, column6) {
    this.note = note;

    this.name = name;
    this.faction = faction;
    this.column = [column1, column2, column3, column4];
}

function FactionType(name, defsheet, milsheet, econsheet) {
    this.name = name;
    this.defsheet = defsheet;
    this.econsheet = econsheet;
}

var Player = 1;
var Devmode = false;


function ForestBlock(size_x, size_y, x, y, type, density) {
    this.foliage = 0;
    this.size_x = size_x;
    this.size_y = size_y;
    this.x = x;
    this.y = y;
    this.type = type;
    this.density = density;
    this.tree_x = [];
    this.tree_y = [];
    this.tree_type = [];
    this.tree_size = [];
}
var ForestZones = [
    new ForestBlock(170, 60, 140, 40, 'Temperate', 1),
    new ForestBlock(150, 50, 310, 60, 'Temperate', 0.5),
    new ForestBlock(80, 90, 460, 50, 'Temperate', 1),
    new ForestBlock(170, 150, 300, 250, 'Temperate', 1),
    new ForestBlock(130, 50, 335, 200, 'Temperate', 0.5),
    new ForestBlock(130, 50, 105, 390, 'Temperate', 0.3),
    new ForestBlock(100, 220, 560, 60, 'Temperate', 0.8),
    new ForestBlock(180, 100, 255, 480, 'Desert', 0.2),
    new ForestBlock(150, 200, 45, 500, 'Desert', 0.3),
    new ForestBlock(120, 200, 260, 620, 'Desert', 0.3),


]
var FactionTypes = [ //name, defsheet, milsheet, econsheet
    new FactionType("HighElves", "0", "n/a", "3"),
    new FactionType("DesertUndead", "12", "n/a", "3"),
    new FactionType("HighElvenCult", "0", "n/a", "3"),

    //Cosmetic Only -- not fit for playing loool

    new FactionType("SlavicHumans", "0", "n/a", "3"),
]


var Factions = [ //name, color, selcolor, factionType, race, unique relationships

    //Elves
    new Faction("Thalor", "#348723", "#4fc437", 0, 0),
    new Faction("Sylvaneth", "#bfbfbf", "#949494", 0, 0),
    new Faction("Nalore", "#8c4a3a", "#733b2e", 2, 0),
    new Faction("Arha Allanar", "#2d8c5b ", "#25734b", 0, 0),
    new Faction("Lilm Lenora", "#6d7325", "#595e1d", 0, 0),
    new Faction("Fylle Thalore", "#718c1d", "#586e16", 0, 0),
    //Desert Undead - 6 - VVV
    new Faction("Aksesir", "#f2dc99", "#cfbf8f", 1, 1),
    new Faction("Aksesir", "#aed1c2", "#839c91", 1, 1),
    new Faction("Aksesir", "#00ff00", "#ff00ff", 1, 1),
    new Faction("Aksesir", "#ff00ff", "#00ff00", 1, 1),
    //Skavs - 10 - VVV
    new Faction("Karkovice", "#ffffff", "#DBBA23", 3, 2),
    new Faction("Slabbfjobf", "#ff00ff", "#ff0000", 3, 2),

]

var Races = [
    new Race("High Elves", [30, 10, -10, 0, 0]),
    new Race("Desert Undead", [10, 20, 0, 0, 0]),
    new Race("Skavs", [-20, 0, 30, 0, 0]),
    new Race("Nords", [10, 20, 0, 0, 0]),
    new Race("Monchs", [10, 20, 0, 0, 0])


]

var Biomes = [
    new Biome("ElvenForest", "#6fa647", "#51802f", "#e3e3e3", "#c9c9c9"),
    new Biome("Desert", "#d9c989", "#bdae75", "#d9c989", "#bdae75"),
    new Biome("NordLands", "#cce38d", "#bacf80", "#e3e3e3", "#c9c9c9"),
]
var TerrList = [ //(posX, posY, faction, sizeX, sizeY, name name, desc, buildslot0, buildslot1, buildslot2, buildslot3, uniqueSheet, unqfaction, unqresc

    new Territory(10, 10, 0, 200, 80, "Shfeserine", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [25, 65, 0.4], 0),
    new Territory(130, 90, 0, 80, 50, "Southern Shfeserine", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [160, 120, 0.4], 0),
    new Territory(70, 90, 0, 60, 90, "Shaf Thalor", "Lorem Ipsum", 6, 0, 0, 0, 6, 0, "n/a", [80, 140, 0.4], 0),

    new Territory(200, 210, 1, 60, 60, "Shylla Aiqua", "Lorem Ipsum", 6, 0, 0, 0, 2, 0, 2, [215, 235, 0.4], 0),
    new Territory(260, 170, 1, 100, 160, "Great Expanse", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [270, 295, 0.4], 0),
    new Territory(360, 170, 1, 100, 70, "Onyfmelle", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [405, 173, 0.4], 0),

    new Territory(210, 0, 2, 80, 80, "Ofaena Thalas", "Lorem Ipsum", 6, 0, 0, 0, 5, 0, "n/a", [220, 20, 0.4], 0),
    new Territory(210, 80, 2, 170, 90, "Ayi Nalore", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [220, 150, 0.4], 0),
    new Territory(290, 20, 2, 140, 60, "Northern Ayi Nalore", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [330, 40, 0.4], 0),

    new Territory(50, 260, 3, 60, 120, "Waslond", "Lorem Ipsum", 6, 0, 0, 0, 7, 0, "n/a", [70, 280, 0.4], 0),
    new Territory(160, 330, 3, 200, 120, "Lehmelle Expanse", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [180, 350, 0.4], 0),
    new Territory(30, 380, 3, 130, 70, "Reselion", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [40, 400, 0.4], 0),

    new Territory(460, 320, 4, 80, 110, "Lenora", "Lorem Ipsum", 6, 0, 0, 0, "n/a", "n/a", "n/a", [480, 350, 0.4], 0),
    new Territory(360, 240, 4, 100, 210, "Annalin", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [520, 230, 0.4], 0),
    new Territory(460, 200, 4, 100, 120, "Milfashys", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [400, 420, 0.4], 0),

    new Territory(380, 80, 5, 80, 90, "Saenas", "Lorem Ipsum", 6, 0, 0, 0, "n/a", "n/a", "n/a", [0, 0, 0], 0),
    new Territory(460, 80, 5, 210, 120, "Asyalenora", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [0, 0, 0], 0),
    new Territory(430, 10, 5, 280, 70, "Sylohil", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [0, 0, 0], 0),
    //Desert Pharaons
    new Territory(30, 450, 6, 280, 100, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [100, 470, 0.4], 1),
    new Territory(310, 450, 6, 150, 140, "Farte", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [230, 605, 0.4], 1),
    new Territory(210, 550, 6, 100, 80, "Setva", "Lorem Ipsum", 38, 0, 0, 0, 13, 1, "n/a", [370, 460, 0.4], 1),
    //Cosmetic Only -- not fit for playing loool

    new Territory(20, 550, 7, 190, 210, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0.4], 1),
    new Territory(110, 760, 7, 100, 70, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),
    new Territory(70, 830, 7, 140, 120, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),

    new Territory(210, 630, 8, 100, 240, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),
    new Territory(310, 590, 8, 320, 140, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),
    new Territory(310, 730, 8, 150, 140, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),

    new Territory(210, 870, 9, 210, 120, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),
    new Territory(420, 870, 9, 130, 170, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),
    new Territory(460, 730, 9, 120, 140, "Khafudos", "Lorem Ipsum", 37, 0, 0, 0, "n/a", "n/a", "n/a", [40, 730, 0], 1),

    //Skavs

    new Territory(670, 160, 10, 160, 120, "Dernivka", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [690, 180, 0.4], 0),
    new Territory(560, 200, 10, 110, 120, "Dernivka", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [560, 200, 0.4], 0),
    new Territory(670, 280, 10, 80, 90, "Dernivka", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [670, 280, 0.4], 0),

    new Territory(830, 180, 11, 170, 100, "SFDFSDFSAD", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [670, 280, 0], 2),


]
var Buildings = [ //(name,desc,income,resc, cost, tier, demolishable)

    new Building("Empty Plot", "", 0, "none", 0, 0, 0), //0

    new Building("Townhall", "", 200, 0, 0, 0, 1),
    new Building("City Center", "", 400, 0, 10, 1, 1),
    new Building("Big City Center", "", 600, 0, 20, 2, 1),
    new Building("Metropolis", "", 800, 0, 30, 3, 1),

    new Building("Elven Village", "", 200, 0, 1000, 0, 1),
    new Building("Elven Town", "", 400, 0, 3000, 1, 1),
    new Building("Elven City", "", 600, 0, 7500, 2, 1),
    new Building("Elven Metropolis", "", 800, 0, 25000, 3, 1),

    new Building("Court of the Elven King", "", 800, 0, 30, 3, 0),

    new Building("Farm", "", 200, 0, 300, 0, 0), //10
    new Building("Big Farm", "", 300, 0, 900, 1, 0),
    new Building("Farming Estate", "", 400, 0, 1200, 2, 0),

    new Building("Local Elven Winery", "", 3, 2, 1250, 0, 0),
    new Building("Elven Winery", "", 6, 2, 2500, 1, 0),
    new Building("Grand Elven Winery", "", 12, 2, 5000, 2, 0), //15

    new Building("Grand Temple of Shitt'har", "", 800, 0, 8000, 3, 0),
    new Building("Tree of Life", "", 800, 0, 8000, 3, 0),
    new Building("Waslond Sea Gates", "", 800, 0, 8000, 3, 0),

    new Building("Elven Trinkets Workshop", "", 3, 5, 1250, 0, 0),
    new Building("Elven Trinkets Factory", "", 6, 5, 2500, 1, 0), //20
    new Building("Grand Trinkets Factory", "", 12, 5, 5000, 2, 0),

    new Building("Elven Park", "", 300, 0, 1250, 0, 0),
    new Building("Elven Plaza", "", 600, 0, 2500, 1, 0),
    new Building("Elven Promenade", "", 1200, 0, 5000, 2, 0),

    new Building("Small Iron Mine", "", 3, 6, 1250, 0, 0), //25
    new Building("Iron Mine", "", 6, 6, 2500, 1, 0),
    new Building("Grand Iron Mine", "", 12, 6, 5000, 2, 0),

    new Building("Small Diamond Mine", "", 3, 7, 1250, 0, 0),
    new Building("Diamond Mine", "", 6, 7, 2500, 1, 0),
    new Building("Grand Diamond Mine", "", 12, 7, 5000, 2, 0), //30

    new Building("Small Forest", "", 3, 8, 1250, 0, 0),
    new Building("Lumberjack's Hut", "", 6, 8, 2500, 1, 0),
    new Building("Lumbermill", "", 12, 8, 5000, 2, 0),

    new Building("Spices Trading Outpost", "", 300, 0, 1250, 0, 0),
    new Building("Spices Market", "", 600, 0, 2500, 1, 0), //35 
    new Building("Grand Spices Market", "", 1200, 0, 5000, 2, 0),

    new Building("Desert Village", "", 200, 0, 0, 0, 1),
    new Building("Desert Town", "", 400, 0, 3000, 1, 1),
    new Building("Desert City", "", 600, 0, 7500, 2, 1),
    new Building("Desert Metropolis", "", 800, 0, 25000, 3, 1), //40

    new Building("Throne of the Desert King", "", 800, 0, 8000, 3, 0),
]
var Sheets = [ //note, name, faction, column1, column2, column3, column4, column5, column6
    new BuildSheets("n/a", "Elven City - Regular", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]), //0
    new BuildSheets("n/a", "Elven City - Seaport", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Elven City - Shylla Aiqua", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 9], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Elven Econ", "HighElves", ["n/a", "n/a", "n/a", "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
    new BuildSheets("Wine", "Elven Econ - Wine", "HighElves", [13, 14, 15, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
    new BuildSheets("n/a", "Elven City - Ofaena Thalas", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 16], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]), //5
    new BuildSheets("n/a", "Elven City - Shaf Thalor", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 17], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Elven City - Waslond", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 18], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),

    new BuildSheets("Iron", "Elven Econ - Iron", "HighElves", [25, 26, 27, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
    new BuildSheets("Diamonds", "Elven Econ - Diamonds", "HighElves", [28, 29, 30, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
    new BuildSheets("Wood", "Elven Econ - Wood", "HighElves", [31, 32, 33, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]), //10
    new BuildSheets("Spices", "Elven Econ - Spices", "HighElves", [34, 35, 36, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),

    new BuildSheets("n/a", "Desert Pharaon", "DesertUndead", [37, 38, 39, 40], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Desert Pharaon - Setva", "DesertUndead", [37, 38, 39, 40], ["n/a", "n/a", "n/a", 41], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
]
var Resources = [ //name, tag, value
    new Resource("Gold", "Main", 1), //0
    new Resource("Food", "Growth", 0),
    new Resource("Wine", "Exotic", 12),
    new Resource("Trade Amount", "Main", 0),
    new Resource("Exotic Animals", "Exotic", 14),
    new Resource("Elven Trinkets", "Exotic", 5), //5

    new Resource("Iron", "Exotic", 10),
    new Resource("Diamonds", "Exotic", 20),
    new Resource("Wood", "Exotic", 7),
    new Resource("Spices", "Exotic", 11),
    new Resource("Obsidian", "Exotic", 17), //10
    new Resource("Ice Gems", "Exotic", 13),


]

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