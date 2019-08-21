$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carousel-button-icon').hasClass('fa-pause')) {
           $('#mycarousel').carousel('pause');
           $('#carousel-button-icon').removeClass('fa-pause');
           $('#carousel-button-icon').addClass('fa-play');
        } else {
           $('#mycarousel').carousel('cycle');
           $('#carouselButton').children('span').removeClass('fa-play');
           $('#carouselButton').children('span').addClass('fa-pause'); 
        }
    });
});