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