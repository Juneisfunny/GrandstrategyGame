var Player = 1;
var Devmode = true;


var ForestZones = [
    new ForestBlock(150, 60, 450, 310, 'Temperate', 0.7),
    new ForestBlock(70, 85, 210, 220, 'Temperate', 1),
    new ForestBlock(60, 50, 640, 250, 'Temperate', 0.3),



]
var FactionTypes = [ //name, defsheet, milsheet, econsheet
    new FactionType("HighElves", "0", "n/a", "3"),
    new FactionType("DesertUndead", "12", "n/a", "3"),

    //Cosmetic Only -- not fit for playing loool

    new FactionType("SlavicHumans", "0", "n/a", "3"),
]


var Factions = [ //name, color, selcolor, factionType, race, unique relationships

    //Elves
    new Faction("Kyalluna", "#348723", "#4fc437", 0, 0),
    new Faction("Uva Unarith", "#bfbfbf", "#949494", 0, 0),
    new Faction("Nalore", "#8c4a3a", "#733b2e", 0, 0),
    new Faction("Asmalone", "#2d8c5b ", "#25734b", 0, 0),
    new Faction("Immlune", "#6d7325", "#595e1d", 0, 0),
    new Faction("Ilyhlon", "#718c1d", "#586e16", 0, 0),
    //Kingdom - 6 - VVV
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
    new Race("Kingdom", [10, 20, 0, 0, 0]),
    new Race("Skavs", [-20, 0, 30, 0, 0]),



]

//im 90% sure there is a reason why they're 10 tiles apart each 

//but dont take my word for it ^^

var TerrList = [ //(posX, posY, faction, sizeX, sizeY, name name, desc, buildslot0, buildslot1, buildslot2, buildslot3, uniqueSheet, unqfaction, unqresc

    new Territory(420, 380, 2, 80, 40, "Nalore City", "Lorem Ipsum", 6, 0, 0, 0, "n/a", "n/a", "n/a", [430, 400, 0.4], 0),
    new Territory(420, 290, 2, 220, 90, "Northern Nalore", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [602, 360, 0.4], 0),
    new Territory(320, 290, 2, 100, 190, "Nalore", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [390, 450, 0.4], 0),
    new Territory(320, 480, 2, 180, 60, "South Nalore", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [470, 510, 0.4], 0),

    new Territory(140, 50, 0, 80, 120, "Northern Kyalluna", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [160, 70, 0.4], 0),
    new Territory(170, 170, 0, 150, 90, "Kyalluna", "Lorem Ipsum", 6, 0, 0, 0, "n/a", "n/a", "n/a", [225, 180, 0.4], 0),
    new Territory(320, 140, 0, 230, 90, "Kyalluna Straits", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [320, 140, 0.4], 0),
    new Territory(320, 230, 0, 230, 60, "Mountains", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [320, 230, 0.4], 0),

    new Territory(550, 190, 3, 90, 100, "Asmalone's landing", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(640, 220, 3, 70, 90, "Asmalone Straits", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(850, 100, 3, 160, 50, "Asmalone", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(880, 150, 3, 120, 60, "Asmalone City", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),


    new Territory(160, 260, 1, 160, 130, "North of Unarith", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(190, 390, 1, 130, 120, "Uva Unarith", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(170, 510, 1, 150, 60, "Unarith City", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(250, 590, 1, 70, 90, "Unarith Straits", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),

    new Territory(0, 540, 4, 70, 90, "Immlune", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(320, 540, 4, 220, 120, "The Great Expanse", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(320, 660, 4, 170, 50, "Elven Straits", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),
    new Territory(540, 550, 4, 80, 70, "Tip of Unarith", "Lorem Ipsum", 5, 0, 0, 0, "n/a", "n/a", "n/a", [1, 1, 0.4], 0),


    /*
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

*/
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

//foresight is a bitch and im retarded VV

/*special sheets (if applicable):
    are set in terrlist with the required faction (or race)
    inside of sheet def
*/
var Sheets = [ //note, name, faction, column1, column2, column3, column4, column5, column6
    new BuildSheets("n/a", "Elven City - Regular", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]), //0
    new BuildSheets("n/a", "Elven City - Nalore", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 9], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Elven Econ", "HighElves", ["n/a", "n/a", "n/a", "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
    new BuildSheets("n/a", "Elven City - Ofaena Thalas", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 16], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]), //5
    new BuildSheets("n/a", "Elven City - Shaf Thalor", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 17], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),
    new BuildSheets("n/a", "Elven City - Waslond", "HighElves", [5, 6, 7, 8], ["n/a", "n/a", "n/a", 18], ["n/a", "n/a", "n/a", "n/a"], ["n/a", "n/a", "n/a", "n/a"]),

    new BuildSheets("Wine", "Elven Econ - Wine", "HighElves", [13, 14, 15, "n/a"], [10, 11, 12, "n/a"], [19, 20, 21, "n/a"], [22, 23, 24, "n/a"]),
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