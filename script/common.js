// header 스크롤
const header = document.querySelector('header')
window.addEventListener('scroll',function(){
    if(window.pageYOffset == 0){
        header.style.background = 'none'
    }else{
        header.style.background = '#fff'
    }
})

// sub 
const sub = document.querySelectorAll('#gnb > li .sub')
const sub_bg = document.querySelector('.sub_bg')
const gnb_li =  document.querySelectorAll('#gnb > li > a')
const nav = document.querySelector('nav')
// sub 이벤트
nav.addEventListener('mouseover', function(){
    sub_bg.classList.add('active')
    for(let i of sub){i.classList.add('active')}
    header.classList.add('active')
})
sub_bg.addEventListener('mouseout', function(){
    sub_bg.classList.remove('active')
    for(let i of sub){i.classList.remove('active')}
    header.classList.remove('active')
})
// m_nav_open
const m_nav_btn = document.querySelector('#m_nav_btn')
const m_nav_open = document.querySelector('.m_nav_open')
m_nav_btn.addEventListener('click', function(e){
    e.preventDefault();
    m_nav_open.classList.toggle('active')
})



// m_nav_sub
const m_gnb_li = document.querySelectorAll('#m_gnb > li:nth-child(2) > a, #m_gnb > li:nth-child(3) > a, #m_gnb > li:nth-child(3) > a, #m_gnb > li:nth-child(4) > a, #m_gnb > li:nth-child(5) > a ')
const m_gnb_sub = document.querySelectorAll('#m_gnb .sub')
m_gnb_li.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of m_gnb_sub){i.classList.remove('active')}
        m_gnb_sub[index].classList.add('active')
    })
})
