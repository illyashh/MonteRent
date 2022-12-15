const usernameInput = document.querySelector('.form__username-input')
const emailInput = document.querySelector('.form__email-input')


usernameInput.addEventListener('click', () => {
  if (usernameInput.className.indexOf('red') >= 0) {
    usernameInput.className = 'form__username-input'
  }
})

emailInput.addEventListener('click', () => {
  if (emailInput.className.indexOf('red') >= 0) {
    emailInput.className = 'form__email-input'
  }
})

const submitBtn = document.querySelector('.form__button')
submitBtn.addEventListener('click', () => {
  const usernameValue = usernameInput.value
  const emailValue = emailInput.value

  if (!usernameValue && !emailValue) {
    usernameInput.className += ' form__username-input--red-border'
    emailInput.className += ' form__email-input--red-border'
    return
  }

  if (!usernameValue < 1) {
    usernameInput.className += ' form__username-input--red-border'
    return
  }

  if (!emailValue < 1) {
    emailInput.className += ' form__email-input--red-border'
    return;
  }


})


