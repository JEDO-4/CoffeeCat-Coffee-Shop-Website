
const btnNav =document.querySelector('.btn-nav');
const dropdownBtn=document.querySelector('.dropdown-btn');
btnNav.addEventListener('click',()=>{
    document.querySelector('.navbar-collapse').classList.add('active')
    document.querySelector('.cover').classList.add('active')
})
document.querySelector('.cover').addEventListener('click',()=>{
    document.querySelector('.navbar-collapse').classList.remove('active')
    document.querySelector('.cover').classList.remove('active')
})
dropdownBtn.addEventListener('click',()=>{
    document.querySelector('.dropdown').classList.toggle('active')
})