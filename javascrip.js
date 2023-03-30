const toggle = document.querySelector('.toggle')
const link = document.querySelector('.links')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('rotate')
    link.classList.toggle('active')

})