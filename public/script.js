$(document).on('ready', function () {
    var slideCount = $('#slider .slide-block').length;
    var slideWidth = $('.slide-block').width();
    var marginleft =  slideWidth / 2 + (slideWidth *(slideCount-1)/2);
    $('#slide-wrapper').prepend($('.slide-block:nth-last-of-type(-n+2)').clone()).css({ marginLeft: - marginleft });
    //   console.log($('#slider').width(), $('#slide-wrapper').width(),$('.slide-block').outerWidth(true));

      $('.control_prev').click(function () {console.log('hi');
        $('#slide-wrapper').animate({
            marginLeft: - marginleft + slideWidth
        }, "slow", function () {
            $('.slide-block:last-child').prependTo('#slide-wrapper');
            $('#slide-wrapper').css('marginLeft', - marginleft);
        });
      });
  
      $('.control_next').click(function () {
        $('#slide-wrapper').animate({
            marginLeft: - marginleft - slideWidth
        },"slow", function () {
            $('.slide-block:first-child').appendTo('#slide-wrapper');
            $('#slide-wrapper').css('marginLeft', - marginleft);
        });
      });
  
  });    
  