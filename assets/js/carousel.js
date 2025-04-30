const carouselInner=document.querySelector('.carousel-inner')
const carouselTtems=document.querySelectorAll('.carousel-item')
const nexticon=document.querySelector('.carousel-control-next-icon')
const previcon=document.querySelector('.carousel-control-prev-icon')
const nextSlide=()=>{
    carouselTtems[0].classList.remove('active')
    carouselTtems[1].classList.add('active')
    document.querySelector('.carousel-pointprev').classList.add('active')
    document.querySelector('.carousel-pointnext').classList.remove('active')
}
const prevSlide=()=>{
    carouselTtems[1].classList.remove('active')
    carouselTtems[0].classList.add('active')
    document.querySelector('.carousel-pointprev').classList.remove('active')
    document.querySelector('.carousel-pointnext').classList.add('active')
}
nexticon.addEventListener('click',nextSlide)

previcon.addEventListener('click',prevSlide)
document.querySelector('.carousel-pointprev').addEventListener('click',nextSlide)
document.querySelector('.carousel-pointnext').addEventListener('click',prevSlide)