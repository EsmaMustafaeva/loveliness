const welcomeButton = document.querySelector(".section-welcome__button")
welcomeButton.onclick = function(){
    document.location.href='HTML/about.html'
}
const btnShowMore = document.querySelector(".section-new__button")
const imgPlus = document.querySelector(".plus-wrapper")
btnShowMore.onclick = function(){
    imgPlus.classList.toggle("plus-wrapper--active")
}