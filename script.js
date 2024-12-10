// header toggle

let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typed Effect

let typed=new Typed('.auto-input',{
    strings:['Front-End Developer!','Freelancer!','Web Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
// Action link state on Scroll

//Get all links with class "nav-link"
let navLinks=document.querySelectorAll('nav ul li a')
//Add event listener to each link
let sections=document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos=window.scrollY + 20
    sections.forEach(section => {
              if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
                navLinks.forEach(link =>{
                    link.classList.remove('active');
                    if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                        link.classList.add('active')
                    }
                });
              }
    });
});