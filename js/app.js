

const ham =document.querySelector('.ham');
const lista_menu=document.querySelector('.lista_menu');
ham.addEventListener('click' , ()=>{
        lista_menu.classList.toggle('active');
})