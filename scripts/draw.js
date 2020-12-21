function draw() {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach(ball => {

    ball.wallCollision();
    ball.checkBallCollision(balls);

    if (!ball.isPaused) {
      ball.pos.x += ball.v.x;
      ball.pos.y += ball.v.y;
    }

    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#313638";
    ctx.fill();
    ctx.closePath();

  });

  newBallColor = isPlaceAvaliable ? AVALIABLE : NOT_ABALIABLE;

  if (isCreatingNewBall) {
    ctx.beginPath();
    ctx.fillStyle = newBallColor;
    ctx.arc(newX, newY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  if (isSettingVelocity) {

    const topX = newX - vx * 10;
    const topY = newY - vy * 10;
    const angle = Math.atan2(vy, vx);

    ctx.lineWidth = 2;
    ctx.strokeStyle = NOT_ABALIABLE;
    ctx.fillStyle = NOT_ABALIABLE;

    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.lineTo(newX, newY);
    ctx.stroke();

    ctx.beginPath();
    ctx.translate(topX, topY);
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(10, 5);
    ctx.lineTo(10, -5);
    ctx.fill();

    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

}
