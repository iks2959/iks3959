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

  $('#slide3>ul>li').hide();
$('#slide3>ul>li:first-child').show();

setInterval(function(){
    $('#slide3>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('#slide3>ul');
},3000);
출처: https://sudal89.tistory.com/47 [가을밤에 내리는 비:티스토리]