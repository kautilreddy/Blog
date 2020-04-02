var images = [];
var openPhotoSwipe = function(index) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
        index: parseInt(index),
        showAnimationDuration: 300,
        hideAnimationDuration: 300,
        getThumbBoundsFn: function(index) {
            //See http://photoswipe.com/documentation/options.html#getThumbBoudnsFn
            var thumbnail = images[index].el;
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
            var rect = thumbnail.getBoundingClientRect(); 
            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
        }
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, images, options);
    gallery.init();

};

function getGridItemWidthPercent(){
    if(window.matchMedia('(max-width: 900px)').matches){
        return 0.494;
    }else if(window.matchMedia('(max-width: 340px)').matches){
        return 0.492;
    }else{
        return 0.3333333;
    }
}

var $layoutDiv = $('.layout');
var layoutDivWidth = $layoutDiv.width();
$( document ).ready(function() {
    var loadedImages = [];
    //initializing masonry
    $.each($('.grid-item'),function(index,item){
        $img = $(item).children('img')[0];
        var data = {
            src:$img.dataset.original,
            h:parseInt($img.dataset.h),
            w:parseInt($img.dataset.w),
            el:$img
        };
        var ratio = data.h/data.w;
        item.dataset.index = index;
        images.push(data);
        item.style.setProperty('--aspect-ratio',ratio);
    });
    const observer = lozad('.grid-item img',{
        // load: function(el) {
        //     el.src = el.dataset.src;
        // },
        loaded:function(element){
            loadedImages.push(element);
            $(element).css('height','auto');
        }
    }).observe();

    $layoutDiv.imagesLoaded().progress(function() {
        // $.each(loadedImages, function(index, item){
        //     $(item).height('auto');
        // });
        $layoutDiv.masonry({
            gutter: 5,
            itemSelector: '.grid-item'
        });
    });
    $('.grid-item').click(function(){
        openPhotoSwipe(this.dataset.index);
    });
});
