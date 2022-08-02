var elements = new ElementsHandler();
var styling = new StylesHandler();
var basicDebugger = new Debugger(false);

styling.setFavicon("./assets/favicon.png");
styling.setBodyStyle("background-image: url('./assets/nillybg.png')");

//set center box
if(platform == "Desktop")
{   styling.setClassStyle("outer", `width: 100%; height: 97.9vh; display: flex; justify-content: center; align-items: center;`);
}
else
{
    styling.setClassStyle("outer", `width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center;`);
}

elements.addDiv("first");
elements.addDiv("mainDiv");
elements.addDiv("iconsDiv");
elements.setClass("first", "outer");

//main
elements.addImage("./assets/vvnillz.png", "vvnillz1");
if(platform == "Desktop")
{
    styling.setStyle("vvnillz1", "max-width: 40%; display: block; margin-left: auto; margin-right: auto; ");
    elements.setClass("vvnillz1", "main");
}
else
{
    styling.setStyle("vvnillz1", "max-width: 60%; display: block; margin-left: auto; margin-right: auto;");
}
//insta
elements.addImage("./assets/icons/ig.png", "instaIcon");
elements.addAnchor("https://www.instagram.com/vvnillz/", "", "instaLink");

//yt
elements.addImage("./assets/icons/yt.png", "youtubeIcon");
elements.addAnchor("https://www.youtube.com/channel/UC6m4C81dE0RfQbPwTrvOtxg", "", "youtubeLink");

//spoti
elements.addImage("./assets/icons/spot.png", "spotifyIcon");
elements.addAnchor("https://open.spotify.com/user/swyf5qdb0qzwatdyg7q4705j6", "", "spotifyLink");

//emotes
elements.addImage("./assets/icons/vvnillzemotes.gif", "emotes");
elements.addAnchor("https://sanicbtw.github.io/sanicbtw/", "", "emotesLink");

//set styles to icons
if(platform == "Desktop")
{
    styling.setStyle("instaIcon", "margin-left: 75vh; max-width: 4%; max-height: 4%; margin-right: 4px; ");
    styling.setStyle(["youtubeIcon", "spotifyIcon"], "max-width: 4%; max-height: 4%; margin-left: 4px; margin-right: 4px");
    styling.setStyle("emotes", "max-width: 3.5%; max-height: 3.5%; margin-left: 4px; margin-right: 4px; margin-top: 2%");
}
else
{
    styling.setStyle("instaIcon", "margin-left: 6rem; max-width: 12%; margin-right: 1rem; ");
    styling.setStyle(["youtubeIcon", "spotifyIcon"], "max-width: 12%; margin-right: 1rem");
    styling.setStyle("emotes", "max-width: 12%; margin-right: 1rem;");
}

//append images to links
elements.appendTo("instaIcon", "instaLink");
elements.appendTo("youtubeIcon", "youtubeLink");
elements.appendTo("spotifyIcon", "spotifyLink");
elements.appendTo("emotes", "emotesLink");

//set attributes
elements.setAttribute(["instaLink", "youtubeLink", "spotifyLink", "emotesLink"], "target", "_blank");

//oop forgot about this one
elements.setAttribute(["vvnillz1", "instaIcon", "instaLink", "youtubeIcon", "youtubeLink", "spotifyIcon", "spotifyLink", "emotes"], "draggable", "false");

//set classes
if(platform == "Desktop")
{
    elements.setClass("instaIcon", "main2");
    elements.setClass("youtubeIcon", "main2");
    elements.setClass("spotifyIcon", "main2");
    elements.setClass("emotes", "main3");
}

//append icons to the icons div
elements.appendTo(["instaLink", "youtubeLink", "spotifyLink", "emotesLink"], "iconsDiv");
elements.appendTo(["mainDiv"], "first");
elements.appendTo(["vvnillz1", "iconsDiv"], "mainDiv");