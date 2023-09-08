// system.js

// con1
const contents1 = document.querySelector('#contents1')
const con1_title = document.querySelector('#contents1 .wrap h2')
const underline = document.querySelectorAll('#contents1 .wrap ul li .info h3 span')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= contents1.offsetTop-1000){
        for(let i of underline){i.classList.add('active')};
        con1_title.classList.add('active')
    }else{
        for(let i of underline){i.classList.remove('active')};
        con1_title.classList.remove('acvite')
    }
})
// con2
const contents2 = document.querySelector('#contents2')
const con2_title = document.querySelector('#contents2 h2')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= contents2.offsetTop-1000){
        con2_title.classList.add('active')
    }else{
        con2_title.classList.remove('acvite')
    }
})
// con2 내용
const con2_li = document.querySelectorAll('#contents2 ul li')
const con2_li_wrap = document.querySelectorAll('#contents2 ul li .wrap')
con2_li.forEach(function(target, index){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= target.offsetTop-1000){
            con2_li_wrap[index].classList.add('active')
        }else{
            con2_li_wrap[index].classList.remove('acvite')
        }
    })
})