//Credit https://codepen.io/gavra/pen/tEpzn
// set up text to print, each item in array is new line
var aText = new Array(
    "Welcome to Phong Ly's portfolio!",
    //"My name is Phong Ly",
     "A fullstack web developer from Oulu, Finland",
     "<a id='more-button' href='#'>Read more</a>"
);

var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("landing-terminal-console-text");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 100);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();