$abrir = document.querySelector('.abrir-menu');
$nav = document.querySelector('.nav');
$cerrar = document.querySelector('.cerrar');

$abrir.addEventListener("click",() =>{
    $nav.classList.add('nav-visibiliti') /*anadir una clase */

})
$cerrar.addEventListener("click",() =>{
    $nav.classList.remove('nav-visibiliti')/*quitar una clase */
    
})