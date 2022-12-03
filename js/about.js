const feedback = document.querySelector('.feedback')
const fl = document.querySelector('.fl')

feedback.addEventListener('click', () => {
  fl.scrollIntoView()
  console.log('work');
})