jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
      $('#mobile-nav-toggle').addClass('toggle-menu-bottom-top');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#mobile-nav-toggle').removeClass('toggle-menu-bottom-top');      
      $('#header').removeClass('header-fixed');
      
    }
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
});


const JsonLinks = {
  ConseilJS: 'conseiljs.html',
  Nautilus_Cloud: 'https://nautilus.cloud/',
  ConseilPy: 'https://github.com/baking-bad/conseilpy',
  Conseil: 'conseil.html',
  TezosKit: 'https://github.com/keefertaylor/TezosKit',
  Electron: 'https://www.electronjs.org/',
  React: 'https://reactjs.org/'
}

function goto (key) {
  window.location.href = JsonLinks[key]
}
