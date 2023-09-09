var Turn = 0;
var CurrentPlayer = Player;

function RescIncome() {
    function GetResc(value, index) {
        if (value.faction == CurrentPlayer) {
            for (i = 0; i != 8; i++) {
                switch (Buildings[value.buildslot[i]].resc) {
                    case ("n/a"):
                        break;
                    case (0):
                        Factions[CurrentPlayer].resc[0] = Factions[CurrentPlayer].resc[0] + Buildings[value.buildslot[i]].income;
                        break;
                    case (2):
                        Factions[CurrentPlayer].resc[2] = Factions[CurrentPlayer].resc[2] + Buildings[value.buildslot[i]].income;
                        break;
                    case (4):
                        Factions[CurrentPlayer].resc[4] = Factions[CurrentPlayer].resc[4] + Buildings[value.buildslot[i]].income;
                        break;
                    case (5):
                        Factions[CurrentPlayer].resc[5] = Factions[CurrentPlayer].resc[5] + Buildings[value.buildslot[i]].income;
                        break;
                }
            }
        }

    }
    TerrList.forEach(GetResc)

    function TradeAnalysis() {
        //meow
    }

    Factions[CurrentPlayer].resc[0] += 2500;

    //TradeRescConv()
}

function TurnCycle() {
    /*Player++
    //alert(Player+" == "+Factions.length)
    if(Player==Factions.length){
        Player=0;
    }
    CurrentPlayer=Player;
    if(CurrentPlayer==Factions.length){
        CurrentPlayer=0;
    }
    */
    RescIncome();
    //AiTurn();
}

var SeasonTimer = 0;
var TurnTimerTicks = 50;

function TurnEnd() {
    Turn = Turn + 1;
    RescIncome()
    /*for(x=0; x!=Factions.length; x++){
        TurnCycle()
    }*/
    TurnCycle()
    /*if (CurrentPlayer == 0) {
        SeasonTimer++;
        if (SeasonTimer == 4) {
            SeasonTimer = 0;
        }
    }*/

    SeasonTimer++;
    if(SeasonTimer==4){
        SeasonTimer=0
    }

    TurnTimerTicks = 0;
}