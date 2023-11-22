const wrapper2=document.querySelector('.wrapper2');
const donation=document.querySelector('.donation');
const profile=document.querySelector('.b0');
const dono=document.querySelector('.b1');



profile.addEventListener('click',()=>{
    wrapper2.classList.add('active-popup');
})
dono.addEventListener('click',()=>{
    donation.classList.add('active');
})