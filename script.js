document.getElementById("birthdayForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const instagram = document.getElementById("instagram").value;
  const message = document.getElementById("message").value;

  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#ffe0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text
  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText("Happy Birthday 🎉", 100, 50);
  ctx.fillText(name, 150, 100);
  ctx.fillText(message, 50, 150);

  if(instagram) {
    ctx.fillText("Instagram: @" + instagram, 50, 200);
  }
});
