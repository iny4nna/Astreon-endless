console.log("JS LOADED");

const canvas = document.getElementById("game");

if (!canvas) {
  alert("ไม่เจอ canvas");
}

const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("HELLO GAME", 50, 100);
