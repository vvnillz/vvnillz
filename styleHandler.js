var background = document.getElementById("vvnillz1");
var backDiv = document.getElementById("backDiv");
var instaIcon = document.getElementById("instaIcon");
var ytIcon = document.getElementById("ytIcon");
var spotifyIcon = document.getElementById("spotifyIcon");
var emotes = document.getElementById("emotes");
var icons = document.getElementById("icons");
var mainDiv = document.getElementById("mainDiv");

var platform = "";
//from https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-72.php
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
platform = detectDeviceType();

if(platform == "Desktop")
{
    background.style = "margin-top: 260px;margin-left: auto;margin-right: auto; display: block; opacity: 100%; max-width: 40%; max-height: fit-content;background-color: transparent;";
    instaIcon.style = "margin-left: auto;margin-right: 4px; max-height: 4%;max-width: 4%; ";
    ytIcon.style = "margin-left: 4px;margin-right: 4px; max-height: 4%;max-width: 4%; ";
    spotifyIcon.style = "margin-left: 4px;margin-right: 4px;max-height: 4%;max-width: 4%; ";
    emotes.style = "margin-top: 2%;margin-left: 4px;margin-right: 4px;max-height: 3.5%;max-width: 3.5%; ";
}
else 
{
    //thank you sanicbtw 

    mainDiv.style = "position: absolute; bottom: 51rem; text-align:center;";
    background.style = "margin-left: auto;margin-right: auto; display: block; max-width: 90%; background-color: transparent;";
    backDiv.style = "position: relative; display: block; text-align: -webkit-center";
    icons.style.position = "relative";

    instaIcon.style = "margin-right: 1rem; max-width: 12%; ";
    ytIcon.style = "margin-right: 1rem; max-width: 12%; ";
    spotifyIcon.style = "margin-right: 1rem; max-width: 12%; ";
    emotes.style = "margin-right: 1rem; max-width: 12%; ";

    background.className = "";
    instaIcon.className = "";
    ytIcon.className = "";
    spotifyIcon.className = "";
    emotes.className = "";
}