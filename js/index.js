$(document).ready(function(){
  $(".header-text").mouseover(function(){
    $("#chevron").css("transform", "scale(1.1)");
    $("#chevron").css("transition", "all 300ms ease-in");
  });
  $(".header-text").mouseout(function(){
    $("#chevron").css("transform", "scale(1.0)");
    $("#chevron").css("transition", "all 300ms ease-out");
  })
});
