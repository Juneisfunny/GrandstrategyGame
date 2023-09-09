var isTradeMenuOpen = false;
var PlayerOffer = []; // Values post Resources.length are territories
//WHAT THE FUCK DID I MEAN BY THE ABOVE ^^
    

function TradeOfferUpdate(){ 
    
    function getTemplate(arg){ //returns a template
        templateStr = Resources[PlayerOffer[i]].name
        templateStr += ""
        
        return templateStr
    }
    
    WorkField = document.getElementById("DiplomacyGivingWP");
    WorkField.innerHTML="";
    for(i=0;i!=PlayerOffer.length;i++){
        if(PlayerOffer[i]){
        
        }
        WorkField.innerHTML+=Resources[PlayerOffer[i]].name+"<br>";
    }


}

function TradeMenuController() {

    //Controlling Display

    if (isTradeMenuOpen === false) { //Opening the display and clearing PlayerOffer
        document.getElementById("TradeView").classList.remove("Hide");
        document.getElementById("TradeView").classList.add("Show");
        isTradeMenuOpen = true;

    } else { //Closing the display and clearing PlayerOffer
        document.getElementById("TradeView").classList.remove("Show");
        document.getElementById("TradeView").classList.add("Hide");
        isTradeMenuOpen = false;
    }

    menu = document.getElementById("DiplomacyGiving"); //locating the menu

    tempText = "";

    for (i = 0; i != Resources.length; i++) { //Player menu
        if (Resources[i].tag == "Exotic" || i == 0) {
            tempText += Resources[i].name + " " + Factions[Player].resc[i] + " <input type='button' value='give' onclick='DiplomacyGive(" + i + ")'><br>"
            //Draw buttons
        }

    }

    menu.innerHTML = tempText; //finalising String

    //document.getElementById("DiplomacyGiving").innerHTML = "taj"

}

function DiplomacyGive(arg) { //Giving items away

    //Check if item IS NOT on the list

    isOnOfferList = false //assume it is not

    for (i = 0; i != PlayerOffer.length; i++) { // Scroll through every item on the list
        if (PlayerOffer[i] == arg) { // Check if the item on the list is the function arg
            isOnOfferList = true 
        }
    }

    if (isOnOfferList == false) { //Add it to the offer list
        PlayerOffer[PlayerOffer.length]=arg       
        TradeOfferUpdate() 
        console.log('Added'+arg+' to the list at '+PlayerOffer.length)
    }
    

    //
}