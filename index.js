const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

var logo = document.getElementById('vvnillz1');
var igIcon = document.getElementById('instaIcon');
var ytIcon = document.getElementById('youtuIcon');
var spotiIcon = document.getElementById('spotiIcon');
var emotes = document.getElementById('emoteIcon');

function onLoad()
{
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
        logo.style.cssText = 'max-width: 40%; display: block; margin-left: auto; margin-right: auto;';
        logo.classList.add('main');
    }
    else
    {
        logo.style.cssText = 'max-width: 60%; display: block; margin-left: auto; margin-right: auto;';
    }

    if (detectDeviceType() == "Desktop")
    {
        igIcon.style.cssText = "max-width: 4%; max-height: 4%;";
        ytIcon.style.cssText = "max-width: 4%; max-height: 4%; margin-left: 1rem;";
        spotiIcon.style.cssText = "max-width: 4%; max-height: 4%; margin-left: 1rem;";
        emotes.style.cssText = "max-width: 3.5%; max-height: 3.5%; margin-left: 1rem;";

        igIcon.classList.add('main2');
        ytIcon.classList.add('main2');
        spotiIcon.classList.add('main2');
        emotes.classList.add('main3');
    }
    else
    {
        igIcon.style.cssText = "max-width: 12%;";
        ytIcon.style.cssText = "max-width: 12%;";
        spotiIcon.style.cssText = "max-width: 12%;";
        emotes.style.cssText = "max-width: 12%;";
    }
}

function openLink(link)
{
    window.open("https://" + link, "_blank").focus();
}