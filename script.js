const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 400;

// วาดพื้นหลังอวกาศ
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ข้อความทดสอบ
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Space Runner", 20, 40);
let player = {
  x: 50,
  y: 300,
  width: 40,
  height: 40,
  dy: 0,
  gravity: 1,
  jump: -15,
  onGround: true
};
function drawPlayer() {
  ctx.fillStyle = "white";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // แรงโน้มถ่วง
  player.dy += player.gravity;
  player.y += player.dy;

  // พื้น
  if (player.y >= 300) {
    player.y = 300;
    player.dy = 0;
    player.onGround = true;
  }

  drawPlayer();

  requestAnimationFrame(update);
}

update();
function jump() {
  if (player.onGround) {
    player.dy = player.jump;
    player.onGround = false;
  }
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

document.addEventListener("touchstart", jump);
