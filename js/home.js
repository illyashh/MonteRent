window.addEventListener('load', function(){

  let leftSwitcher
  leftSwitcher = document.querySelector(".slider__left-switcher")
  leftSwitcher.addEventListener('click', leftSwitcherFunc)

  let rightSwitcher
  rightSwitcher = document.querySelector(".slider__right-switcher")
  rightSwitcher.addEventListener('click', rightSwitcherFunc)


  let photo1 = "<img class=\"slider__photo\" src=" +
    "\"../img/glc1.jpg\" alt=\"glc63s\">"

  let photo2 = "<img class=\"slider__photo\" src=" +
    "\"../img/glc2.jpg\" alt=\"glc63s\">"

  let photo3 = "<img class=\"slider__photo\" src=" +
    "\"../img/glc3.jpg\" alt=\"glc63s\">"



  function leftSwitcherFunc () {
    console.log('hello world')
    let elem = document.querySelector(".slider__photo").outerHTML
    if(elem === photo1) {
      document.querySelector(".slider__photo").outerHTML = photo3
    } else if(elem === photo2) {
      document.querySelector(".slider__photo").outerHTML = photo1
    } else {
      document.querySelector(".slider__photo").outerHTML = photo2
    }
  }

  function rightSwitcherFunc () {
    let elem = document.querySelector(".slider__photo").outerHTML
    if(elem === photo1) {
      document.querySelector(".slider__photo").outerHTML = photo2
    } else if(elem === photo2) {
      document.querySelector(".slider__photo").outerHTML = photo3
    } else {
      document.querySelector(".slider__photo").outerHTML = photo1
    }
  }

})