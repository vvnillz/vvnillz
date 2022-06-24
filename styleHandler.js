var background = document.getElementById("vvnillz1");
var backDiv = document.getElementById("backDiv");
var instaIcon = document.getElementById("instaIcon");
var ytIcon = document.getElementById("ytIcon");
var spotifyIcon = document.getElementById("spotifyIcon");
var emotes = document.getElementById("emotes");
var icons = document.getElementById("icons");

var platform = "";
//from https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-72.php
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
platform = detectDeviceType();

if(platform == "Desktop")
{
    background.style = "margin-top: 120px;margin-left: auto;margin-right: auto; display: block; opacity: 100%; max-width: 70%; max-height: fit-content;background-color: transparent;";
    instaIcon.style = "margin-left: auto;margin-right: auto;max-height: 4%;max-width: 4%; ";
    ytIcon.style = "margin-left: auto;margin-right: auto;max-height: 4%;max-width: 4%; ";
    spotifyIcon.style = "margin-left: auto;margin-right: auto;max-height: 4%;max-width: 4%; ";
    emotes.style = "margin-top: 7%;margin-left: auto;margin-right: auto;max-height: 3.5%;max-width: 3.5%; ";
}
else
{
    background.style = "margin-left: auto;margin-right: auto; display: block; max-width: 90%; background-color: transparent;";
    backDiv.style = "position: absolute; display: block; text-align: -webkit-center";
    backDiv.style.top = (screen.height - 100) + "px";
    icons.style = "position: absolute; margin-right: auto; margin-left: 8rem;";
    icons.style.top = (screen.height + 200) + "px";
    instaIcon.style = "margin-right: 1rem; max-width: 15%; ";
    ytIcon.style = "margin-right: 1rem; max-width: 15%; ";
    spotifyIcon.style = "margin-right: 1rem; max-width: 15%; ";
    emotes.style = "margin-right: 1rem; max-width: 15%; ";

    background.className = "";
    instaIcon.className = "";
    ytIcon.className = "";
    spotifyIcon.className = "";
    emotes.className = "";
}