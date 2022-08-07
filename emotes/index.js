const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

var backButton = document.getElementById("backBtn");

var emoteW = document.getElementById("emoteW");
var emoteBlush = document.getElementById("emoteBlush");
var emoteShyBlush = document.getElementById("emoteShyBlush");
var emoteShyLove = document.getElementById("emoteShyLove");
var emoteLovePlead = document.getElementById("emoteLovePlead");
var emoteCry = document.getElementById("emoteCry");

function onLoad() {
    var outerStyle = document.createElement("style");
    if (detectDeviceType() == "Desktop") {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 97.9vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    else {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    document.head.appendChild(outerStyle);


    if (detectDeviceType() == "Desktop")
    {
        backButton.style.cssText = "max-height: 10%; max-width: 10%";

        emoteW.classList.add('main4');
        emoteBlush.classList.add('main4');
        emoteShyBlush.classList.add('main4');
        emoteShyLove.classList.add('main4');
        emoteLovePlead.classList.add('main4');
        emoteCry.classList.add('main4');
        backButton.classList.add('main5');
    }
    else
    {
        backButton.style.cssText = 'max-width: 50%;';

        emoteW.style.cssText = "height: 120px; max-width: 50%; ";
        emoteBlush.style.cssText = "height: 120px; max-width: 50%; margin-left: 1rem;";
        emoteShyBlush.style.cssText = "height: 120px; max-width: 50%; ";
        emoteShyLove.style.cssText = "height: 120px; max-width: 50%; margin-left: 1rem;";
        emoteLovePlead.style.cssText = "height: 120px; max-width: 50%;";
        emoteCry.style.cssText = "height: 120px; max-width: 50%; margin-left: 1rem;";
    }
}