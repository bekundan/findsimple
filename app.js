$(document).ready(function(){
		
	
//		
//    $('body').click(function(){
//        $("#introimg").fadeIn(5000);
//        $('.arrow_icon a').animate({
//            color:'red'
//        })
//    })
//        $(".submit_btn").click(function(){
//            
//           alert("demo"); 
//        });
		// $(".project_card img").hover(function(){
		// 	$(".card_overlay").css({
		// 		display:"block",
		// 		cursur:"pointer"
		// 	});
		// 		$(".card_overlay").mouseleave(function(){
		// 			$(this).css({
		// 		display:"none"
		// 	});
		// 		})
		// 	});

       
		$("nav a,.arrow_icon a").click(function(e){
			e.preventDefault();
			target=$(this.hash).offset().top;
			$("html").animate({
				scrollTop:target
			},4000);	
		})
    $('html,body').scrollTop(0);
		$(window).on('load',function(){
            setTimeout(function(){
                $('html,body').scrollTop(0);
            },100);
        });
});