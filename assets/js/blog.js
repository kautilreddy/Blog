var initialDisplay = true;
function showimage(imgId) {
    if(initialDisplay){
        initialDisplay=false;
        $('#about').removeClass('initial');
    }
    $('.story-img').each(function(index) {
        if ($(this).attr("id") == imgId) {
            $(this).stop().fadeTo(400,1);
            $(this).addClass("active");
        } else {
            $(this).stop().fadeTo(400,0);
            $(this).removeClass("active");
        }
    });
}
var goldenRatio = 0.9;
var isDesktop= true;
var mobileClassText = "mobile";
$( document ).ready(function() {
    console.log("HHHHHHHHH     HHHHHHHHH                              lllllll      lllllll                             !!! \nH:::::::H     H:::::::H                              l:::::l      l:::::l                            !!:!!\nH:::::::H     H:::::::H                              l:::::l      l:::::l                            !:::!\nHH::::::H     H::::::HH                              l:::::l      l:::::l                            !:::!\n  H:::::H     H:::::H           eeeeeeeeeeee          l::::l       l::::l         ooooooooooo        !:::!\n  H:::::H     H:::::H         ee::::::::::::ee        l::::l       l::::l       oo:::::::::::oo      !:::!\n  H::::::HHHHH::::::H        e::::::eeeee:::::ee      l::::l       l::::l      o:::::::::::::::o     !:::!\n  H:::::::::::::::::H       e::::::e     e:::::e      l::::l       l::::l      o:::::ooooo:::::o     !:::!\n  H:::::::::::::::::H       e:::::::eeeee::::::e      l::::l       l::::l      o::::o     o::::o     !:::!\n  H::::::HHHHH::::::H       e:::::::::::::::::e       l::::l       l::::l      o::::o     o::::o     !:::!\n  H:::::H     H:::::H       e::::::eeeeeeeeeee        l::::l       l::::l      o::::o     o::::o     !!:!!\n  H:::::H     H:::::H       e:::::::e                 l::::l       l::::l      o::::o     o::::o      !!! \nHH::::::H     H::::::HH     e::::::::e               l::::::l     l::::::l     o:::::ooooo:::::o          \nH:::::::H     H:::::::H      e::::::::eeeeeeee       l::::::l     l::::::l     o:::::::::::::::o      !!! \nH:::::::H     H:::::::H       ee:::::::::::::e       l::::::l     l::::::l      oo:::::::::::oo      !!:!!\nHHHHHHHHH     HHHHHHHHH         eeeeeeeeeeeeee       llllllll     llllllll        ooooooooooo         !!!\n");
    ratio = $(window).width()/$(window).height();
    if(ratio>goldenRatio){
        removeMobileClass();
    }
    setViewAndImages();
    $( ".thumb" ).bind( "touchstart", function() {
        showimage($(this).attr('name'));
    });
});
function addMobileClass(){
    $(".devider").each(function(){
        $(this).addClass(mobileClassText);
    });
    $(".thumb").each(function(){
        $(this).addClass(mobileClassText);
    });
    $('.story-img').each(function(index) {
        var imgUrl = "url(backgrounds/"+$(this).attr('name')+"m.jpg)";
        $(this).css('background-image',imgUrl);
    });
}
function removeMobileClass(){
    $(".devider").each(function(){
        $(this).removeClass(mobileClassText);
    });
    $(".thumb").each(function(){
        $(this).removeClass(mobileClassText);
    });
    $('.story-img').each(function(index) {
        var imgUrl = "url(backgrounds/"+$(this).attr('name')+".jpg)";
        $(this).css('background-image',imgUrl);
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
};