import $ from 'jquery';

export default function() {
  window.onload = function() {
    $('.preloader-wrapper')
      .css('opacity', '1.0')
      .animate({ opacity: 0 }, 1200, function() {
        $('.class').css('visibility', 'hidden');
      });
  };
}
