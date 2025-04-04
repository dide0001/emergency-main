document.querySelector("#lighterCircle").addEventListener("mouseover", lighterHighlight);
document.querySelector("#lighterCircle").addEventListener("mouseout", lighterUnHighlight);
document.querySelector("#lighterCircle").addEventListener("click", lighterInfo);

function lighterHighlight() {
    console.log("lighterHighlight");
    document.querySelector("#lighterCircle").style.fill = "white"
}
function lighterUnHighlight() {
    console.log("lighterUnHighlight");
    document.querySelector("#lighterCircle").style.fill = "grey"
}

function lighterInfo(){
    console.log("lighterInfo");
    document.querySelector(".info-text > h2").textContent = "Brænd din kiosk";
    document.querySelector(".info-text > article > p").textContent = "brænd din kiosk ned og claim forsikringspengene til at åbne en ny kiosk";
}


document.querySelector("#moneyCircle").addEventListener("mouseover", moneyHighlight);
document.querySelector("#moneyCircle").addEventListener("mouseout", moneyUnHighlight);
document.querySelector("#moneyCircle").addEventListener("click", moneyInfo);

function moneyHighlight() {
    console.log("moneyHighlight");
    document.querySelector("#moneyCircle").style.fill = "white"
}
function moneyUnHighlight() {
    console.log("moneyUnHighlight");
    document.querySelector("#moneyCircle").style.fill = "grey"
}

function moneyInfo(){
    console.log("lighterInfo");
    document.querySelector(".info-text > h2").textContent = "Røv 7-11";
    document.querySelector(".info-text > article > p").textContent = "Røv 711 kiosken på Nørrebro, bare rolig de er vandt til det";
}


document.querySelector("#bikeCircle").addEventListener("mouseover", bikeHighlight);
document.querySelector("#bikeCircle").addEventListener("mouseout", bikeUnHighlight);
document.querySelector("#bikeCircle").addEventListener("click", bikeInfo);

function bikeHighlight() {
    console.log("bikeHighlight");
    document.querySelector("#bikeCircle").style.fill = "white"
}
function bikeUnHighlight() {
    console.log("bikeUnHighlight");
    document.querySelector("#bikeCircle").style.fill = "grey"
}

function bikeInfo(){
    console.log("bikeInfo");
    document.querySelector(".info-text > h2").textContent = "Zig en cykel";
    document.querySelector(".info-text > article > p").textContent = "Zig en cykel, cykler på nørrebro er allemands-eje";
}
