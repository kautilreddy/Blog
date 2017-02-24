function showimage(imgId) {
    $('.story-img').each(function(index) {
        if ($(this).attr("id") == imgId) {
            $(this).stop().fadeIn();
            $(this).addClass("active");
        } else {
            $(this).stop().fadeOut();
            $(this).removeClass("active");
        }
    });
};
var goldenRatio = 0.9;
var isDesktop= true;
var mobileClassText = "mobile";
$( document ).ready(function() {
    setViewAndImages();
});
function addMobileClass(){
    $(".devider").each(function(){
        $(this).addClass(mobileClassText);
    });
    $(".thumb").each(function(){
        $(this).addClass(mobileClassText);
    });
}
function removeMobileClass(){
    $(".devider").each(function(){
        $(this).removeClass(mobileClassText);
    });
    $(".thumb").each(function(){
        $(this).removeClass(mobileClassText);
    });
}
function setViewAndImages(){
    ratio = $(window).width()/$(window).height();
    var currentScreenIsDesktop = true;
    if(ratio<goldenRatio){
        currentScreenIsDesktop = false;
    }
    if(currentScreenIsDesktop!=isDesktop){
        if(currentScreenIsDesktop){
            removeMobileClass();
        }
        else{
            addMobileClass();
        }
        isDesktop = currentScreenIsDesktop;
    }
}
window.onresize = function(){
    setViewAndImages();
}