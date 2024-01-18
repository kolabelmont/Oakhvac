const menubtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const faqs =document.querySelectorAll('.faq');


faqs.forEach((faq) => {
    faq.addEventListener('click', () =>{
    faq.classList.toggle('active');
    })
})

menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click" , () => {
    menubtn.classList.remove("active");  
    navMenu.classList.remove("active");   
}))