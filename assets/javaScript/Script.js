const navMenu=document.getElementById('nav-menu'), 
toggleMenu=document.getElementById('toggle-menu'),
closeMenu=document.getElementById('close-menu')

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

window.addEventListener('scroll',()=>{
    let content=document.querySelector('.about-section');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
       content.classList.add('active')
    }else {
        content.classList.remove('active')
    }
});
window.addEventListener('scroll',()=>{
    let content=document.querySelector('.education-area');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active1')
    }else {
        content.classList.remove('active1')
    }
});
window.addEventListener('scroll',()=>{
    let content=document.querySelector('.skill-area');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active2')
    }else {
        content.classList.remove('active2')
    }
});
window.addEventListener('scroll',()=>{
    let content=document.querySelector('.service-area');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active3')
    }else {
        content.classList.remove('active3')
    }
});
window.addEventListener('scroll',()=>{
    let content=document.querySelector('.projects-area');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active4')
    }else {
        content.classList.remove('active4')
    }
});