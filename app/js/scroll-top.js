(function() {
$( document ).ready(function() {
    toTopBind();
    
    // across site click to top button and #top link, back to top
    $('body').on('click',' #to-top, a[href="#top"]', function(){
        $('body, html').stop().animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

function toTopBind() {
    if( $('#to-top').length > 0 && $(window).width() > 600) {
        if($(window).scrollTop() > 350){
            $(window).on('scroll', showToTop);
        }else {
            $(window).on('scroll', hideToTop);
        }
    }
}

function showToTop(){
    if( $(window).scrollTop() > 350 ){
        $('#to-top').stop(true,true).animate({ 'bottom' : '17px'},'slow');  
        $(window).off('scroll',showToTop);
        $(window).on('scroll',hideToTop);
    }
}

function hideToTop(){
    if( $(window).scrollTop() < 350 ){
        $('#to-top').stop(true,true).animate({ 'bottom' : '-30px'},'slow'); 
        $(window).off('scroll',hideToTop);
        $(window).on('scroll',showToTop);   
    }
}
}).call(this);