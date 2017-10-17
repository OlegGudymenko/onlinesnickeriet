// responsiove nav header
$('.header__bot .hamburger').click(function(){
    $('.header__bot').toggleClass('active');
    $('div.hamburger').toggleClass('active');
    $('#nav').toggleClass('active');
    $('.login-link').toggleClass('visible')
    $('.header__become-partner').toggleClass('visible')
    
    if($(window).width() < 768) {
        $('#main').toggleClass('hidden');
    }
})
// responsiove nav header

//constructor inline-styles
function customCss(){
  $('#step-0.popover').css('display','none');
  $('#design-action-rensa').text('');
}
customCss()
