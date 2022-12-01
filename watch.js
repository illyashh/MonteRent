
const watchContainer = document.querySelector('.tel__watch-container')
const watch = document.querySelector('.tel__watch')
for (let i = 0; i < watch.childNodes.length; i++) {
  watch.childNodes[i].remove()
}

const telHours = document.querySelector('.tel__hours')
const telMinutes = document.querySelector('.tel__minutes')
const telColon = document.querySelector('.tel__colon')
const telAmPm = document.querySelector('.tel__am-pm')

function loadDate() {
  const date = new Date();

  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  let amOrPm

  if (!hours[1]) { hours = '0' + hours }
  if (!minutes[1]) { minutes = '0' + minutes }

  if (hours < 12) { amOrPm = ' am' }
  if (hours > 12) { amOrPm = ' pm' }

  telHours.innerHTML = hours
  telMinutes.innerHTML = minutes
  telColon.innerHTML = ':'
  telAmPm.innerHTML = amOrPm

  watch.append(telHours)
  watch.append(telColon)
  watch.append(telMinutes)
  watch.append(telAmPm)
}

function clockStart() {
  loadDate()
  setInterval(loadDate, 1000)
}
clockStart()


//const date = new Date()
