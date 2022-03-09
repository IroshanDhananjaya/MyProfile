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
    let content=document.querySelector('.whoAmIArea-container2');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active-whoAmIArea-container2')
    }else {
        content.classList.remove('active-whoAmIArea-container2')
    }
});
window.addEventListener('scroll',()=>{
    let content=document.querySelector('.whoAmIArea-container3');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active-whoAmIArea-container3')
    }else {
        content.classList.remove('active-whoAmIArea-container3')
    }
});

window.addEventListener('scroll',()=>{
    let content=document.querySelector('.about-right');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
       content.classList.add('active-about-right')
    }else {
        content.classList.remove('active-about-right')
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
    let content=document.querySelector('.projects-area');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPostion=window.innerHeight;
    if(contentPosition<screenPostion){
        content.classList.add('active4')
    }else {
        content.classList.remove('active4')
    }
});
