// ==UserScript==
// @name         Kaltura Download
// @namespace    mcmuck
// @version      2024-02-08
// @description  copys blob data into clipboard for Kaltura Course Media. matches rutgers canvas.
// @author       mcmuck
// @match        https://rutgers.instructure.com/courses/263719/external_tools/*
// @match        https://208082-1.kaf.kaltura.com/media/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kaltura.com
// @grant        none
// ==/UserScript==


let text = ""
function main()
{
    //let element = document.getElementById("kplayer_ifp");

    let iframeElem = document.getElementById("kplayer_ifp")

    if (iframeElem != null)
    {
        let htmlText = iframeElem.contentDocument.body.innerHTML;
        let index = htmlText.search("pid_kplayer")
        let elemText = htmlText.slice(index)
        let elemList = elemText.split(" ")
        let src = elemList[10].split("\"")

        let button = document.createElement("button");
        button.id = 'myID';
        button.innerHTML = ' Click me to copy the download link! ';

        text = src[1];
        console.log("Loaded")

        addClickListenerToElem(button, copyTextToCB)

        document.body.insertBefore(button,document.body.childNodes[0]);
    }
}


function copyTextToCB()
{
    console.log(text)
    navigator.clipboard.writeText(text);
    alert("Copied the link.")
}

function addClickListenerToElem(elem, funct) // this function is defined in pointsAudio
{
    if (elem.addEventListener){
        elem.addEventListener("click", funct, false);}
    else if (elem.attachEvent){
        elem.attachEvent('onclick', funct);}
}



(function() {
    'use strict';

    setTimeout(main, 1000)

})();



