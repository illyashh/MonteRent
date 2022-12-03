const watch = document.querySelector('.tel__watch')
for (let i = 0; i < watch.childNodes.length; i++) {
  watch.childNodes[i].remove()
}

const telHours = document.querySelector('.tel__hours')
const telMinutes = document.querySelector('.tel__minutes')
const telColon = document.querySelector('.tel__colon')
const telAmPm = document.querySelector('.tel__am-pm')

function loadClock() {
  const date = new Date()
  //const date = new Date(new Date() - 21*3600000);

  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let amOrPm

  if (!hours[1]) { hours = '0' + hours }
  if (!minutes[1]) { minutes = '0' + minutes }

  if (hours < 12) { amOrPm = ' am' }
  if (hours >= 12) { amOrPm = ' pm' }

  if (+hours === 0) { hours = 12 }

  telHours.innerHTML = hours
  telMinutes.innerHTML = minutes
  telColon.innerHTML = ':'
  telAmPm.innerHTML = amOrPm

  watch.append(telHours)
  watch.append(telColon)
  watch.append(telMinutes)
  watch.append(telAmPm)
}

function colonBlink () {
  setInterval(() => {
    telColon.classList.toggle('tel__colon--hidden')
  }, 1000)
}

function clockStart() {
  loadClock()
  colonBlink()
  setInterval(loadClock, 10 * 1000)
}
clockStart()


