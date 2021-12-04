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

//when page is scroll make things parallax
//move certain tags based on how far from anchor point
//anchor point is middle of the section
//parallax will be ratio of distance scrolled to middle point
document.addEventListener('scroll', function(){
  const topViewport = window.pageYOffset
  const midViewport = topViewport +  (window.innerHeight / 2)

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionMid = sectionTop + (section.offsetHeight / 2)

    const distanceToSection = midViewport - sectionMid

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })





  })
})
