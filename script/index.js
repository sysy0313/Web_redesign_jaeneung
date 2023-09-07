// index js
// visual_slide
const visual_slide = new Swiper('#visual_slide',{
    autoplay:{
        delay:6000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'fade',// effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    on:{
        init:function(){
            //슬라이드가 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.slide_title h1 span').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title h1 em').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title p').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title h1 span').style.transform = 'translateY(0)'
            this.slides[this.activeIndex].querySelector('.slide_title h1 em').style.transform = 'translateY(0)'
            this.slides[this.activeIndex].querySelector('.slide_title p').style.transform = 'translateY(0)'
        },
        slideChange:function(){
            //슬라이드 변경될 때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0; 만들기
            this.slides.forEach(target => {
                target.querySelector('.slide_title h1 span').style.opacity = '0'
                target.querySelector('.slide_title h1 em').style.opacity = '0'
                target.querySelector('.slide_title p').style.opacity = '0'
                target.querySelector('.slide_title h1 span').style.transform = 'translateY(80px)'
                target.querySelector('.slide_title h1 em').style.transform = 'translateY(80px)'
                target.querySelector('.slide_title p').style.transform = 'translateY(80px)'
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.slide_title h1 span').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title h1 em').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title p').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_title h1 span').style.transform = 'translateY(0)'
            this.slides[this.activeIndex].querySelector('.slide_title h1 em').style.transform = 'translateY(0)'
            this.slides[this.activeIndex].querySelector('.slide_title p').style.transform = 'translateY(0)'
        }
    },
});
// 교육과정 slide
const curriculum_slide = new Swiper('#curriculum_slide',{
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'horizontal',
    slidesPerView:'auto',
    spaceBetween:'20',
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        320:{slidesPerView:1}, //320이상일 때
        1050:{slidesPerView:2}, //1050이상일 때
        1250:{slidesPerView:3},//1250이상일 경우 슬라이드 4개 표시
    },
});
const notice_slide = new Swiper('#notice_slide',{
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'horizontal',
    slidesPerView:'auto',
    spaceBetween:'20',
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        320:{slidesPerView:1}, //320이상일 때
        550:{slidesPerView:2}, //550이상일 때
        1050:{slidesPerView:3},//1050이상일 경우 슬라이드 4개 표시
    },
});
// 스크롤 트리거
gsap.fromTo('#curriculum .cha', {
    //from
    y:200,
},{
    //to
    y:0,
    duration:0.7,
    scrollTrigger:'#curriculum'
}
);
gsap.fromTo('#notice .cha', {
    //from
    y:200,
},{
    //to
    y:0,
    duration:0.7,
    scrollTrigger:'#notice'
}
);