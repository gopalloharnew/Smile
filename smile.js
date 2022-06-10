const eyeBalls = document.querySelectorAll("[data-eye-ball]")
const cursor = document.querySelector("#cursor")

function eyeAnimate(eyeBall, e) {
  const eyeBallRect = eyeBall.getBoundingClientRect()
  const ballX = eyeBallRect.x + eyeBallRect.width / 2
  const ballY = eyeBallRect.y + eyeBallRect.height / 2

  let dy = e.y - ballY
  let dx = e.x - ballX
  let theta = Math.atan2(dy, dx)

  let translateX = (Math.cos(theta) * 40).toFixed(2)
  let translateY = (Math.sin(theta) * 40).toFixed(2)
  if (e.target.closest(".eye")) {
    eyeBall.style.transform = `translate(0%, 0%) scale(1.1)`
  } else {
    eyeBall.style.transform = `translate(${translateX}%, ${translateY}%)`
  }
}

function mouseMove(e) {
  eyeBalls.forEach((eyeBall) => eyeAnimate(eyeBall, e))
  cursor.style.left = e.x + "px"
  cursor.style.top = e.y + "px"
}

document.addEventListener("mousemove", mouseMove)
