$("a").on("click",function(){ 
    $(".item").hide();
  $($(this).attr("for")).toggle();
  
})