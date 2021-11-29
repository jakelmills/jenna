const pixelsTag = document.querySelector("div.pixels")

//when page is scrolled update the pixels tag to say how far scrolled

document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = Math.floor(pixels)
})
