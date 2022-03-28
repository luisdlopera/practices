const paragraph = document.getElementById("paragraph");

const item = document.createElement("LI");

let text = "esto es un texto";

const text2 = document.createTextNode("ahora si o no ");

item.appendChild(text2);

paragraph.appendChild(item);

document.write(item);