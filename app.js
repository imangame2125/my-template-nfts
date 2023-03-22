const mainSlider = [
  {
    largText: 'Exclusive NFTs by',
    thinText: 'paulo sanchez',
    highlightedText: 'NFTs'
  },

  {
    largText: 'Crystal On',
    thinText: 'Metaverse',
    highlightedText: 'On'
  },

  {
    largText: 'Only 1/1 drop',
    thinText: 'on this projects',
    highlightedText: 'drop'
  },
]


const sliders = document.querySelectorAll('.sliders label')
const bigText = document.querySelector('.big-text')
const smallText = document.querySelector('.small-text')



let currentSlide = 0



for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index]
  slider.addEventListener('click', () => {
    bigText.innerHTML = formatText(mainSlider[index])
    smallText.textContent = mainSlider[index].thinText
  })


}

setInterval(() => {
  if (currentSlide > mainSlider.length - 1) {
    currentSlide = 0
  }
  bigText.innerHTML = formatText(mainSlider[currentSlide]);
  smallText.textContent = mainSlider[currentSlide].thinText
  smallText.style.color = '#875d9a'
  currentSlide++
}, 2000)




function formatText(textObject) {
  const words = textObject.largText.split(' ')
  const formatedWords = words.map((item) => {
    if (item === textObject.highlightedText) {
      return `<span class="text-green">${item}</span>`
    } else {
      return item
    }
  })
  let result = formatedWords.join(' ')
  return result
}


const navbar = document.querySelector('.nav-bar');
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-active')
  } else {
    navbar.classList.remove('nav-active')
  }
}



