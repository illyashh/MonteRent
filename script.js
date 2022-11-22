window.addEventListener('load', function(){

  let switcher = document.getElementsByClassName('slider__left-switcher')[0]
  switcher.addEventListener('click', func)

  let glcCockpitPhotoHtmlElement = "<img class=\"slider__photo\" src=\"img/glc63cockpit.jpg\" alt=\"glc63s\">"
  function func () {
    document.getElementsByClassName('slider__photo')[0].outerHTML = glcCockpitPhotoHtmlElement
  }

})