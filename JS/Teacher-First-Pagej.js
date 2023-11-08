// password logic


$("form .inputContainer img").click(function(){
  var p = document.getElementById("pwd");
  if(p.type == "password"){
    p.type = "text";
  }
  else{
    p.type = "password";
  }
});


// teacher profile

$(".tfp-nav .tfp-img:last-child").on("click",function(){
    $(".in").toggleClass('active');
});

$(".tfp-nav .tfp-img:first-child").on("click",function(){
    $(".out").toggleClass("deActive");
});


