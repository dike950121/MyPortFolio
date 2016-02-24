$(document).ready(function($) {

  // accordion
  $('.accordion').find('.accordion-toggle').click(function(){
    $(this).toggleClass('active');

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $('.nav .accordion-content .accordion-content').not($(this).next()).slideUp('fast');
    $('.nav .accordion-content .accordion-toggle').not($(this)).removeClass('active');
  });


  // mobile nav
  $('.mobile-nav').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('mobile-nav-expanded');
  });


  $('.partner').each(function() {
    if (isWhite($(this).css('border-color'))){
      $(this).addClass("darken-colors");
    }
  });

  $('.partner-cta').each(function() {
    $(this).css('color', isDark($(this).css('background-color')) ? 'white' : 'black');
  });

});


function isDark( color ) {
  var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
  return parseFloat(match[1])
  + parseFloat(match[2])
  + parseFloat(match[3])
  < 3 * 256 / 2; // r+g+b should be less than half of max (3 * 256)
}

function isWhite( color ) {
  var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
  console.log(parseFloat(match[1]) + "+" + parseFloat(match[2]) + "+" + parseFloat(match[3]));
  return parseFloat(match[1])
  + parseFloat(match[2])
  + parseFloat(match[3])
  > 650; // r+g+b should be less than half of max (3 * 256)
}
