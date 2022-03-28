const paragraph = document.getElementById("paragraph");

const item = document.createElement("LI");

item.innerHTML = "aqui estoy yo ";

const text2 = document.createTextNode("ahora si o no ");

paragraph.appendChild(item);

document.write(item);