var backButton = document.getElementById("backButton");
var backA = document.getElementById("backA");
var mainEmoteDiv = document.getElementById("mainEmoteDiv");

var emoteW = document.getElementById("emoteW");
var emoteBlush = document.getElementById("emoteBlush");
var emoteShyBlush = document.getElementById("emoteShyBlush");
var emoteShyLove = document.getElementById("emoteShyLove");
var emoteLovePlead = document.getElementById("emoteLovePlead");
var emoteCry = document.getElementById("emoteCry");

var platform = "";
//from https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-72.php
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
platform = detectDeviceType();

if(platform == "Desktop")
{
    backButton.style = "margin-left: auto;margin-right: auto;max-height: 10%;max-width: 10%; ";
}
else 
{
    //thank you sanicbtw 
    mainEmoteDiv.style = "position: absolute; bottom: 60rem; text-align:center;";

    backButton.style = "margin-right: 1rem; max-width: 35%; margin-top: 4rem;";

    emoteW.style = "height: 120px; margin-right: 1rem;";
    emoteBlush.style = "height: 120px; margin-right: 1rem; max-width: 50%;";
    emoteShyBlush.style = "height: 120px; margin-right: 1rem; max-width: 50%;";
    emoteShyLove.style = "height: 120px; margin-right: 1rem; max-width: 50%;";
    emoteLovePlead.style = "height: 120px; margin-right: 1rem; max-width: 50%;";
    emoteCry.style = "height: 120px; margin-right: 1rem; max-width: 50%;";

    backButton.className = "";
    emoteW.className = "";
    emoteBlush.className = "";
    emoteShyBlush.className = "";
    emoteShyLove.className = "";
    emoteLovePlead.className = "";
    emoteCry.className = "";
}