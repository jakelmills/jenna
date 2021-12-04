const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const headerTag = document.querySelector('header')
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll('section')
const clientTag = document.querySelector('div.client')
const pageTag = document.querySelector('div.page')

//when page is scrolled update the pixels tag to say how far scrolled

document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = Math.floor(pixels)
})

//when page is scrolled make progress bar update accordingly

document.addEventListener('scroll',function(){
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollDistance = pageHeight - window.innerHeight
  const scrollPercent = pixels / totalScrollDistance
  progressTag.style.width = `${100 * scrollPercent}%`
  console.log(scrollPercent)

})

//when page is scrolled, see how far done and check for each section
//if passed section update the text in header

document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page')

      if (section.hasAttribute('data-isdark')) {
        headerTag.classList.add('white')
        progressTag.classList.add('white')
      } else {
        headerTag.classList.remove('white')
        progressTag.classList.remove('white')
      }
    }
  })
})
