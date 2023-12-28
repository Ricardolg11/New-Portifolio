const btnBemVindo=document.querySelector('#sobre-mim');
const apresentation=document.querySelector('#apresentation')

btnBemVindo.addEventListener('click',(event)=>{
    event.preventDefault()
    apresentation.style.display="block"
})