const btnBemVindo=document.querySelector('#sobre-mim');
const apresentation=document.querySelector('#apresentation')

btnBemVindo.addEventListener('click',(event)=>{
    event.preventDefault()
    apresentation.style.display="block"
})

const menudiv=document.getElementById('menu-mobile');
const animar = document.getElementById('btn-menu');


menudiv.addEventListener('click', animarbuttton)

function animarbuttton(){
    menudiv.classList.toggle('abri')
    animar.classList.toggle('ativo')
}