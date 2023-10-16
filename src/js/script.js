const token="​nkXqdVdcTQAcWulaSu8G1CLE​"
const btnBemVindo=document.querySelector('#sobre-mim');
const apresentation=document.querySelector('#apresentation')
const option={
    headers:{
        Authorization: `Bearer <${token}>`
    },
    method:"get"
}

btnBemVindo.addEventListener('click',(event)=>{
    event.preventDefault()
    apresentation.style.display="block"
})


