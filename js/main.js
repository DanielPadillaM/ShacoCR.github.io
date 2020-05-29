(function eyes(){
let balls = document.querySelector(".ball");
document.onmousemove = function(){
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
    balls.style.left = x;
    balls.style.top = y;
    balls.style.transform = "translate(-"+x+",-"+y+")";
  
}})();

  (function text(){
    let infoSection =document.querySelector(".about");
    infoSection.addEventListener("mouseenter",function(){
      let autor= document.querySelector(".autor");
      autor.style.opacity = "1";
    });
  })();
//  window.onscroll = function() {myFunction()};

//  function myFunction() {
//    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
//     let autor= document.querySelector(".autor");
//      autor.style.opacity = "1";
     
//    } 
//  }