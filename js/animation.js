// animation text on pictures at top of main page
$( '.top' ).on( 'mouseenter', 'a', function() {
  let children = $( this ).find( 'p' );
  let childrenChild = children.children( '.child-text' );
  let topMargin = $( this ).height() - $( children[0] ).height();
  let objCss = {
    top: '0px',
    opacity: '1'
  }
  let func = setTimeout( function(){
    if( $( children ).queue( 'fx' ).length <= 1 ) {
      // debugger;
      $( children ).animate( { top: topMargin + 'px' }, 400 );
      $( childrenChild[0] ).delay( 200 ).animate( objCss, 600 );
      $( '.top' ).on( 'mouseleave', 'a', function() {
        let children = $( this ).find( 'p' );
        let childrenChild = children.children( '.child-text' );
        let objCss = {
          top: '40px',
          opacity: '0'
        }
        if( $( children ).queue( 'fx' ).length <= 1 ) {
          // debugger;
          $( children ).delay( 600 ).animate( { top: $( this ).height() - 60 + 'px' }, 400 );
          $( childrenChild[0] ).delay( 200 ).animate( objCss, 400 );
        }
      });
    }
  }, 500 );
  $( this ).mouseleave( function(){
    clearTimeout( func );
  });
});
// dropdown animation of header
  $('body').on('click',  function(ev){
    // console.log(ev.target.closest('div'));
    switch (ev.target.className) {
      case 'entered__button':
      ev.target.closest('.header__entered').classList.toggle('active');
        break;
      case 'header__entered':
      ev.target.classList.toggle('active');
        break;
      case 'entered__menu':
        break;
      case 'link':
        break;
      default:
      $('.header__entered').removeClass('active');
    }
    if ( ev.target.closest('div').className === 'hamburger' || ev.target.className === 'hamburger') {
      $('#nav').toggleClass('active');
    } else if ( ev.target.closest('ul') === null || !ev.target.id === 'nav' ) {
      $('#nav').removeClass('active');
    }
  });
  // drop down header position
  $('.entered__menu').each(function(){
    $('.entered__menu').css({marginLeft: ( -$(this).width() / 2 ) + 'px'});
  });
  // constructor slideToggle
  (function(){
    $('#main').on('click', '.list__title', function(){
      if ( window.innerWidth <= 1023 ) {
        $('#tabs').slideToggle(350);
        $(this).toggleClass('active');
      }
    });
  })();
  // slide toggle orders
  $('#main').on('click', '.list__item', function(){
    $(this).next('.orders__slider').slideToggle(350);
  });
  // mask
  // $('input.phone').mask('+99(999)999-99-99');
  // button up orders
  $(window).scroll(function(){
    if ( window.scrollY > 0 ) {
      $('.up').css({opacity: 1});
      $('.up').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 1000);
      });
    } else {
      $('.up').css({opacity: 0});
    }
  });
  // page fragor animation on click
  $('.fragor').on('click', '.li__title', function(){
    $(this).closest('li').toggleClass('active').find('div.li__text').slideToggle(350);
  });
