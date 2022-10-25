// scrolltop
    // $(".scrolltop").click(function (e) {
    //     e.preventDefault();
    //     $("html,body").animate(
    //     {
    //         scrollTop: 0,
    //     },
    //     600
    //     );
    // });
  
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 200) {
    //     if ($(".scrolltop").hasClass("hide")) {
    //         $(".scrolltop").toggleClass("hide");
    //     }
    //     } else {
    //     $(".scrolltop").addClass("hide");
    //     }
    // });

// ----------進場特效---------------
  function Anime(){
      // --------------------fadeUp---------------
      $('.fadeUpTrigger').each(function(){
          var elemPos = $(this).offset().top-50;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('fadeUp');
          }else{
          $(this).removeClass('fadeUp');
          }
      });
      // ----------------fadeLeft--------------------
      $('.fadeLeftTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLeft');
      }else{
      $(this).removeClass('fadeLeft');
      }
      });
      // ------------------fadeRight-----------------
      $('.fadeRightTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
      }else{
      $(this).removeClass('fadeRight');
      }
      });
  }

  $(window).scroll(function (){Anime()});

  $(window).on('load', function(){Anime()});
// -------course example for tabchange--------
  $( function() {
      $( "#tabs" ).tabs({
        collapsible: true
      });
  });
  //----------course example for FAQ-----------
  $( function() {
      $( "#accordion" ).accordion({
        heightStyle: "content"
      });
    } );
// ----------首頁和內頁的收藏按鈕-----------
let hearts = document.getElementsByClassName("heart");
let hclick =this.document.getElementsByClassName("heart");
// -----多按鈕迴圈------
  for(let i=0; i<hearts.length; i++){
    hearts[i].onclick = function(){
      if(hearts.title=="加入收藏"){
          hclick[i].src = "./img_src/like_click.png";
          hearts.title = "取消收藏";
      }else{
          hclick[i].src = "./img_src/like_unclick.png";
          hearts.title ="加入收藏";
      }
  }}
// ----------購物車頁的收藏按鈕-----------

