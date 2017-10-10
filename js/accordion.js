$('#tabs').on('click', function(ev) {
    var target = ev.target;
    if ( target.tagName === 'P' &&  target.className === 'toggle' ) {
      var $this = $(target);
      if($this.parent().find('.inner').hasClass('show')){
        $this.parent().find('.inner').removeClass('show').slideUp(350);
        $this.parent().removeClass('active');
      } else {
        $this.closest('#tabs').find('li .inner').removeClass('show').slideUp(350);
        $this.closest('#tabs').children('li.active').removeClass('active');
        $this.parent().find('.inner').addClass('show').slideDown(350);
        $this.parent().addClass('active');
      }
    } else if ( target.tagName === 'LI' && target.parentElement.className == 'inner show' ) {
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
