const eyeBalls = document.querySelectorAll("[data-eye-ball]")

function eyeAnimate(eyeBall, e) {
  const eyeBallRect = eyeBall.getBoundingClientRect()
  const ballX = eyeBallRect.x + eyeBallRect.width / 2
  const ballY = eyeBallRect.y + eyeBallRect.height / 2

  // let dy = e.y - ballY
  // let dx = e.x - ballX
  // let theta = Math.atan2(dy, dx)
  // theta *= 180 / Math.PI
  // if (theta < 0) theta = 360 + theta

  // eyeBall.style.transform = `rotate(${theta}deg)`

  let dy = e.y - ballY
  let dx = e.x - ballX
  let theta = Math.atan2(dy, dx)

  let translateX = Math.cos(theta) * 40
  let translateY = Math.sin(theta) * 40
  if (e.target.closest(".eye")) {
    eyeBall.style.transform = `translate(0%, 0%) scale(1.1)`
  } else {
    eyeBall.style.transform = `translate(${translateX}%, ${translateY}%)`
  }
}

function mouseMove(e) {
  eyeBalls.forEach((eyeBall) => eyeAnimate(eyeBall, e))
}

document.addEventListener("mousemove", mouseMove)
