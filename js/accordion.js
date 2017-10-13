$('#tabs').on('click', function(ev) {
    var target = ev.target;
    if ( target.tagName === 'P' &&  target.className === 'toggle' ) {
      var $this = $(target);
      var selectedTab = $this.text();

      if($this.parent().find('.inner').hasClass('show')){
        $this.parent().find('.inner').removeClass('show').slideUp(350);

        // $this.parents('#tabs').find('>li:not(.active)').slideToggle()
        // $this.parents('#tabs').find('>li.active').find('p').slideToggle()
          $this.parent().removeClass('active');
      } else {
        $this.closest('#tabs').find('li .inner').removeClass('show').slideUp(350);
        $this.closest('#tabs').children('li.active').removeClass('active');
        $this.parent().find('.inner').addClass('show').slideDown(350);
        $this.parent().addClass('active');
        // $this.parents('#tabs').find('>li:not(.active)').slideToggle()
        // $('.list__title').text( selectedTab )
        // $this.parents('#tabs').find('>li.active').find('p').slideUp(350)
      }

    } else if ( target.tagName === 'LI' && target.parentElement.className == 'inner show' ) {
      $('.inner .active').removeClass('active');
      $(target).addClass('active');

    }
});
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
$('.inner').on({scroll: function(ev) {
      var target = ev.currentTarget;
      if( target.scrollHeight === target.clientHeight + target.scrollTop ) {
        target.scrollTop -= 1;
        } else if ( target.scrollTop < 1 ){
        target.scrollTop += 1;
      }

    }
  });
