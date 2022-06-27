const eyeBalls = document.querySelectorAll("[data-eye-ball]")
const cursor = document.querySelector("#cursor")
const smile = document.querySelector(".smile-circle")
const smileRect = smile.getBoundingClientRect()

function setEyeball(x, y, eyeball, eyeballRect, target) {
  cursor.style.left = x + "px"
  cursor.style.top = y + "px"
  let mouseP = y - (eyeballRect.y + eyeballRect.height / 2)
  let mouseB = x - (eyeballRect.x + eyeballRect.width / 2)
  let mouseH = Math.hypot(mouseP, mouseB)

  let eyeBallH = 3
  let eyeBallSize = 1
  if (target.closest(".eye")) {
    eyeBallH = 0
    eyeBallSize = 1.25
  }
  let addSad =
    x > smileRect.x &&
    y > smileRect.y &&
    x < smileRect.x + smileRect.width &&
    y < smileRect.y + smileRect.height
  eyeball.classList.toggle("red-eye", target.closest(".eye"))
  smile.classList.toggle("sad", addSad)
  let eyeBallP = (mouseP / mouseH) * eyeBallH
  let eyeBallB = (mouseB / mouseH) * eyeBallH
  eyeball.style.transform = `translate(${eyeBallB}vmin, ${eyeBallP}vmin) scale(${eyeBallSize})`
}

function track(eyeball) {
  const eyeballRect = eyeball.getBoundingClientRect()
  document.addEventListener("mousemove", (e) => {
    setEyeball(e.x, e.y, eyeball, eyeballRect, e.target)
  })

  document.addEventListener(
    "touchmove",
    (e) => {
      let a = e.changedTouches[0]
      console.log(e.changedTouches)
      e.preventDefault()
      setEyeball(a.pageX, a.pageY - 100, eyeball, eyeballRect, a.target)
    },
    { passive: false }
  )
}

track(eyeBalls[0])
track(eyeBalls[1])
