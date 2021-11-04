const registerBtn = document.querySelector(".btn-register");
const req = document.querySelectorAll(".req > input");
const fillz = document.querySelector(".fill-req");
registerBtn.addEventListener("click", function(e) {
  e.preventDefault()
  for (let i = 0; i < req.length; i++) {
    console.log(req[i].value);
     if(req[i].value === '') {
        fillz.style.visibility = "visible"
     } 
     if(req[i].value != '') {
        fillz.style.visibility = "hidden"
     } 
    
  }
  
}) 


// jQuery
$(document).ready(function () {


  $(".variants__item").click(function () {
      $("#positions").val($(this).text())
  });
  $(".region__item").click(function () {
    $("#region").val($(this).text());
  });

 

  $("#region").click(function (e) {

// console.log(e.target.nodeName)

     if (e.target.nodeName !== "INPUT") {
       $(".region__ul").slideUp();
     
     }

      $(".region__ul").slideToggle();
  });

  $("#positions").click(function () {
     $(".variants__ul").slideToggle();
  });
})

