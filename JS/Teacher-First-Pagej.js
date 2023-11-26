// password logic


$("form .inputContainer .inputIcon:eq(1)").click(function() {
  var p = document.getElementById("pwd");
  if(p.type == "password"){
    p.type = "text";
    $("form .inputContainer img")[1].src="image/eye.png"
  }
  else{
    p.type = "password";
    $("form .inputContainer img")[1].src="image/hide.png"
  }
});


// teacher profile

$(".tfp-nav .tfp-img:last-child").on("click",function(){
    $(".in").toggleClass('active');
});

$(".tfp-nav .tfp-img:first-child").on("click",function(){
    $(".out").toggleClass("deActive");
});


