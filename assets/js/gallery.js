  var images = [
 //        {
 //            src: 'backgrounds/1.jpg',
 //            w: 2482,
 //            h: 1132
 //        },
 //        {
 //            src: 'backgrounds/2.jpg',
 //            w: 6000,
 //            h: 2732
 //        },
 //        {
 //            src: 'backgrounds/3.jpg',
 //            w: 2482,
 //            h: 1132
 //        },
 //        {
 //            src: 'backgrounds/4.jpg',
 //            w: 2482,
 //            h: 1141
 //        },
 //        {
 //            src: 'backgrounds/5.jpg',
 //            w: 1532,
 //            h: 692
 //        },
 //        {
 //            src: 'backgrounds/6.jpg',
 //            w: 4000,
 //            h: 1825
 //        },
 //        {
 //            src: 'backgrounds/1m.jpg',
 //            w: 636,
 //            h: 1132
 //        },
 //        {
 //            src: 'backgrounds/2m.jpg',
 //            w: 4000,
 //            h: 6000
 //        },
 //        {
 //            src: 'backgrounds/3m.jpg',
 //            w: 1597,
 //            h: 2841
 //        },
 //        {
 //            src: 'backgrounds/4m.jpg',
 //            w: 2857,
 //            h: 3892
 //        },
 //        {
 //            src: 'backgrounds/5m.jpg',
 //            w: 620,
 //            h: 1100
 //        },
 //        {
 //            src: 'backgrounds/6m.jpg',
 //            w: 2259,
 //            h: 4000
 //        }
];
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

$( document ).ready(function() {
    //initializing masonry
    var $layoutDiv = $('.layout');

    $.each($('.grid-item'),function(index,item){
        var data = {
            src:item.dataset.src,
            h:parseInt(item.dataset.h),
            w:parseInt(item.dataset.w),
            el:item
        };
        item.dataset.index = index;
        images.push(data);
    });
    $('.grid-item').click(function(){
        openPhotoSwipe(this.dataset.index);
    });
    $layoutDiv.masonry({
        gutter: 5,
        itemSelector: '.grid-item'
    });
});