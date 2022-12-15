const storyBtn = document.querySelector('.main__menu-story')
const feedbackBtn = document.querySelector('.main__menu-feedback')
const videosBtn = document.querySelector('.main__menu-videos')
const storyLabel = document.querySelector('.main__story-label')
const feedbackLabel = document.querySelector('.main__feedback-label')
const videosLabel = document.querySelector('.main__videos-label')

storyBtn.addEventListener('click', () => {
  storyLabel.scrollIntoView({ behavior: 'smooth' })
})
feedbackBtn.addEventListener('click', () => {
  feedbackLabel.scrollIntoView({ behavior: 'smooth' })
})
videosBtn.addEventListener('click', () => {
  videosLabel.scrollIntoView({ behavior: 'smooth' })
})
