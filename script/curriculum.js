const txt = document.querySelector('#txt');
const txt_title = document.querySelector('#txt .wrap h2')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= txt.offsetTop-1000){
        txt_title.classList.add('active')
    }else{
        txt_title.classList.remove('acvite')
    }
})