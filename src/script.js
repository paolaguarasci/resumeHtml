$(window)
  .resize(function () {
    let el0 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-semibold">Location</div>';
    let el1 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-semibold">Web</div>';
    let el2 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-semibold">Phone</div>';
    let el3 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-semibold">Email</div>';
    let el4 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-light">Rende (CS), IT</div>';
    let el5 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-light">paolaguarasci.xyz</div>';
    let el6 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-light">+39 347 1234567</div>';
    let el7 =
      '<div class="col-md-3 col-6 mt-1 mb-2 text-wrap text-break text-light text-start fw-light">paolaguarasci@gmail.com</div>';

    let littleTable = $('#littleTable');

    let normalOrder = [el0, el1, el2, el3, el4, el5, el6, el7];
    let mobileOrder = [el0, el4, el1, el5, el2, el6, el3, el7];

    if ($(window).width() < 768) { // 768px is md brackpoints on bootstrap 5
      $('.removevh').removeClass('vh-100');
      $('.removew75').removeClass('w-75');
      littleTable.empty();
      littleTable.append(mobileOrder);
    } else {
      $('.removevh').addClass('vh-100');
      $('.removew75').addClass('w-75');
      littleTable.empty();
      littleTable.append(normalOrder);
    }
  })
  .resize();

$(document).ready(() => {
  $('.progress-bar').each(function () {
    $(this).addClass(`progress-bar-${$(this).data('percent')}`);
  });
});

$(document).on('scroll', function () {
  let scrollOffset = $(document).scrollTop();
  let containerOffset = $('#section3').offset().top - window.innerHeight;

  if (scrollOffset > containerOffset) {
    $('.progress-bar').each(function () {
      $(this).addClass(`progress-bar-${$(this).data('percent')}-animate`);
    });

    $(document).off('scroll');
  }
});
