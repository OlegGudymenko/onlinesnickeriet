// $('#tabs').on('click', function(ev) {
//     var target = ev.target;
//     if ( target.tagName === 'P' &&  target.className === 'toggle' ) {
//       var $this = $(target);
//       var selectedTab = $this.text();

//       if($this.parent().find('.inner').hasClass('show')){

//         $this.parent().find('.inner').removeClass('show').slideUp(350);
//         // ------------
//         if( !$this.parent().hasClass('active') ){
//           $this.parent().removeClass('active');
//         }
//         // -----------
//       } else {
//          // -----------
//         if( $this.parent().hasClass('active') ){
//              $this.closest('#tabs').find('li .inner').addClass('show').slideUp(350);
//              $this.parent().find('.inner').addClass('show').slideDown(350);
//         }
//          // -----------
//         else{
//           $this.closest('#tabs').find('li .inner').removeClass('show').slideUp(350);
//           $this.closest('#tabs').children('li.active').removeClass('active');
//           $this.parent().find('.inner').addClass('show').slideDown(350);
//           $this.parent().addClass('active');
//         }
//       }

//     } else if ( target.tagName === 'LI' && target.parentElement.className == 'inner show' ) {
//       $('.inner .active').removeClass('active');
//        // -----------
//        if($(window).width() < 768) {
//         $('.inner').slideUp(350);
//         $('.inner').removeClass('show')
//         $('#tabs').slideUp(350);
//       }
//        // -----------
//       $(target).addClass('active');

//     }
// });
(function($)
{
    $('#tabs').on('click', function(ev) {
        var target = ev.target;
        if ( target.tagName === 'P' &&  target.className === 'toggle' ) {
            var $this = $(target);
            if($this.parent().hasClass('active')){
                $this.parent().find('.inner').slideUp(350); //removeClass('show')
                $this.parent().removeClass('active');
            } else {
                $this.closest('#tabs').find('li .inner').slideUp(350); //.removeClass('show')
                $this.closest('#tabs').children('li.active').removeClass('active');
                $this.parent().find('.inner').slideDown(350); //.addClass('show')
                $this.parent().addClass('active');
            }
        } else if ( target.tagName === 'LI' && target.parentElement.className == 'inner' ) {
            $('.inner .active').removeClass('active');
            $(target).addClass('active');
        }
    });
// function to stop scroll
    $('.inner').on({scroll: function(ev) {
        var target = ev.currentTarget;
        if( target.scrollHeight === target.clientHeight + target.scrollTop ) {
            target.scrollTop -= 1;
        } else if ( target.scrollTop < 1 ){
            target.scrollTop += 1;
        }

   }
    });
})(jQuery)
var tabsHeadName;

(function(){
  tabsHeadName = $('.list__title').text();

  $('#main').on('click', '.list__title', function(){

    if ( window.innerWidth <= 1023 ) {
      $('#tabs').slideToggle(350);
      $(this).toggleClass('active');
      $(this).text(tabsHeadName)
    }
  });

})();

 // $('#tabs').on('click','li',function(){
 //   var selectItem =  $(this).find('p.toggle');
 //   selectItem.hide()
 //  //  console.log( selectItem.text() )
 //   $('.list__title').text( selectItem.text() )
 //   $(this).find('.inner').slideToggle(300)
 //
 //
 //     console.log(tabsHeadName)
 // });
// function to stop scroll
// $('.inner').on({scroll: function(ev) {
//       var target = ev.currentTarget;
//       if( target.scrollHeight === target.clientHeight + target.scrollTop ) {
//         target.scrollTop -= 1;
//         } else if ( target.scrollTop < 1 ){
//         target.scrollTop += 1;
//       }

//     }
//   });
