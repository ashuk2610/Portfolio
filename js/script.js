//---------------------------------------- Respnsive Navbar Code 


let nav_btn = document.querySelector(".nav-btn");

let navbar = document.querySelector(".navbar");


nav_btn.addEventListener('click', function () {

    navbar.classList.toggle("active")

});



// ------------------------------------------------- Closing Navbar after Clicking Nav Link 

var navLinks =document.querySelectorAll('.nav-link')


navLinks.forEach(function(elem){

 elem.addEventListener('click',function(){
    navbar.classList.remove('active');
  });

});



//--------------------------------------------------------- changing bg color of navbar after scrolling 200 px 


window.addEventListener('scroll' ,function(){

  if(window.pageYOffset >= 200){

  navbar.classList.add('nav-bg');

  }

  else{
  navbar.classList.remove('nav-bg');

  }
})


// end 





