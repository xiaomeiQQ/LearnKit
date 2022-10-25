// Go to top
    // $(".go-to-top").click(function (e) {
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
    //     if ($(".go-to-top").hasClass("hide")) {
    //         $(".go-to-top").toggleClass("hide");
    //     }
    //     } else {
    //     $(".go-to-top").addClass("hide");
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

$(window).scroll(function (){Anime();});

$(window).on('load', function(){Anime();});
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
