// function changeHead(){
//     document.getElementById("head").innerHTML="My_website"
// }
// changeHead();
// alert("helelo")
setTimeout(function changeHead(){
    document.getElementById("head").innerHTML=" Visit My website"
}, 5000)
//$('#name').css('color','grey')
// document.getElementById("about").animate.fadeOut(100).fadeIn(100).fadeIn(100);
setTimeout(function(){
    $('#name').fadeIn(1000).fadeOut(1000).fadeIn(1000);
  
    // $('#name').fadeOut(1000);
},1000)
//$('#name').css('font-size','3rem')