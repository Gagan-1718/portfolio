let menuIcon=document.querySelector('#menu-icon');
let navBar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-mark');
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.togggle('active');
};

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
        let top=window.scrollY;

    sections.forEach(sec => {
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAtrribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="'+id+'"]').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',top>100);

    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}

navLinks.forEach(link=>{
    link.onclick=()=>{
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.remove('active');
    };
});

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
}); 

ScrollReveal().reveal('.home-content,heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1,about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content', {origin:'right'});

const typed=new Typed('.mulitple-text',{
    strings: ['AIML Engineer', 'Tech Enthusiast ','Tabla Artist'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true,

});

