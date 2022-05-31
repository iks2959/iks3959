document.querySelector('.navbar_togleBtn').addEventListener('click',function(){
    document.querySelectorAll('.nav_menu')[0].classList.toggle('show');
   });

   var 슬라이드 = 1;

   $('.right').on('click',function(){
     if(슬라이드 == 1){
       $('.slide-container').css('transform', 'translateX(-100vw)');
       슬라이드 += 1
     } else if (슬라이드 = 2) {
       $('.slide-container').css('transform', 'translateX(-200vw)');
       슬라이드 += 1
     } else if (슬라이드 = 3) {
       $('.slide-container').css('transform', 'translateX(-300vw)');
     }
   })

   $('.left').on('click',function(){
    if(슬라이드 == 3){
      $('.slide-container').css('transform', 'translateX(-100vw)');
      슬라이드 -= 1
    } else if (슬라이드 = 2) {
      $('.slide-container').css('transform', 'translateX(-0vw)');
      슬라이드 -= 1
    }
  })

  $('#slide > div:gt(0)').hide();

setInterval(function(){
    $('#slide > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slide');
},3000);

