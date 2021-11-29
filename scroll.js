const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

//when page is scrolled update the pixels tag to say how far scrolled

document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = Math.floor(pixels)
})

document.addEventListener('scroll',function(){
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollDistance = pageHeight - window.innerHeight
  const scrollPercent = pixels / totalScrollDistance
  progressTag.style.width = `${100 * scrollPercent}%`
  console.log(scrollPercent)

})

//when page is scrolled make progress bar update accordingly
