//functions for website
var styleFlag = true;

// if(document.readyState === 'ready' || document.readyState === 'complete') {
//     styleFlag = true;
// }

function styleButtonChange() {

    if (styleFlag){
        // document.getElementById("pageId").style.fontSize = "25px";
        document.getElementById("pageId").style.color = "white";
        document.getElementById("pageId").style.backgroundColor = "black";
        document.getElementById("changeButton").style.color = "black";
        document.getElementById("changeButton").textContent = "Light Mode";
        document.getElementById("changeButton").style.backgroundColor = "lightgrey";
        styleFlag = false;
    }
    else{
        // document.getElementById("pageId").style.fontSize = null;
        document.getElementById("pageId").style.color = null;
        document.getElementById("pageId").style.backgroundColor = null;
        document.getElementById("changeButton").style.color = null;
        document.getElementById("changeButton").textContent = "Dark Mode";
        document.getElementById("changeButton").style.backgroundColor = null;
        styleFlag = true;
    }
}

