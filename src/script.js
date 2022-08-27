
$(window).resize(function() {
  if ($(window).width() < 768) { // md brackpoints of bootstrap 5
      $('.removevh').removeClass('vh-100');
  } else {
      $('.removevh').addClass('vh-100');
  }
}).resize();
