let i;
let btn;
let text;

//Creatin Of Elements
let mainDiv = document.createElement("div");
let input = document.createElement("input");
input.id = "screen";

document.body.appendChild(mainDiv);
mainDiv.appendChild(input);

//Make Some Style
mainDiv.style.width = "440px";
mainDiv.style.height = "690px";
mainDiv.style.padding = "20px";
mainDiv.style.border = "3px solid #000";
mainDiv.style.margin = "auto";
mainDiv.style.borderRadius = "15px";
mainDiv.style.backgroundColor = "#314059";

input.style.boxSizing = "border-box";
input.style.display = "block";
input.style.width = "440px";
input.style.height = "80px";
input.style.fontSize = "30px";
input.style.marginTop = "45px";
input.style.marginBottom = "30px";
input.style.border = "4px solid #000";
input.style.borderRadius = "10px";
input.style.backgroundColor = "#B5C9E2";

//Create Buttons

/*
 * C % / x
 * 7 8 9 -
 * 4 5 6 +
 * 1 2 3 .
 * 0 | = |
 *
*/

const BUTTONS = "=0.321+654-987x/%C";
i = 17;
while (i > -1) {
  text = document.createTextNode(BUTTONS[i]);

  btn = document.createElement("button");

  btn.appendChild(text);

  mainDiv.appendChild(btn);

  btn.style.width = "90px";
  btn.style.height = "90px";
  btn.style.margin = "10px";
  btn.style.borderRadius = "50%";
  btn.style.backgroundColor = "#B09390";
  btn.style.border = "2px solid #000";
  btn.style.fontSize = "30px";
  btn.style.cursor = "pointer";

  if (i == 0) {
    btn.style.width = "310px";
    btn.style.borderRadius = "50px";
  }

  btn.onmouseover = function () {
    this.style.backgroundColor = "#342526";
    this.style.color = "#FFF";
  };

  btn.onmouseleave = function () {
    this.style.backgroundColor = "#B09390";
    this.style.color = "#000";
  };

  btn.onclick = function () {
    this.style.backgroundColor = "red";
  };

  btn.onblur = function () {
    this.style.backgroundColor = "#B09390";
  };


  i--;
}
