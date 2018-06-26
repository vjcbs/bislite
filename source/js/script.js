$(document).ready( function() {

  let menuToggler = $('.navbar-toggler');
  let menuTogglerIcon = $('.navbar-toggler-icon');

  menuToggler.click( function(e) {
    if ($(this).attr('aria-expanded') == 'true') {
      menuTogglerIcon.css('background', 'url("../img/icon-menu-open.svg") no-repeat center');
    } else {
      menuTogglerIcon.css('background', 'url("../img/icon-menu-close.svg") no-repeat center');
    }
  });

  let filterButtons = $('.portfolio__btn-group .btn');

  filterButtons.click(function (e) {
    filterButtons.removeClass('btn-active');
    // e.target.classList.add('btn-active');
    $(this).addClass('btn-active');
  })

})
