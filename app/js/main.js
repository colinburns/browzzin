jQuery(document).ready(function($) {

  runMasonry();

  // Function to change the number of columns by simply changing the class on ContentContainer
  $(document).on("click", ".grid-layout-trigger", function(e) {
    e.preventDefault;
    var Columns = $(this).data('column-count');
    $('.grid-layout-trigger').removeClass('active');
    $('#ContentContainer').removeClass('column-1').removeClass('column-2').removeClass('column-3').removeClass('column-4');
    $('#ContentContainer').addClass('column-'+Columns);
    $(this).addClass('active');
    runMasonry();
  });

  $(document).on("focus", "#BrowzzinSearch", function(e) {
    e.preventDefault;
    $(this).parent().find('button').hide();
    //TODO: Shortcut - normally I would make sure that when this form field is empty that the search button would be turned back on.
  });

  $(document).on("click", ".tab-trigger", function(e) {
    e.preventDefault;
    var TargetContainer = $(this).data('action');
    $('.tab-trigger').removeClass('active');
    $(this).addClass('active');
    $('.popup-tabs').hide();
    $('.'+TargetContainer).show();
  });

  $(document).on("click", ".close-popover", function(e) {
    e.preventDefault;
    $('#PopOver').fadeOut('slow');
  });

  $(document).on("click", ".item-container", function(e) {
    e.preventDefault;
    $('#PopOver').fadeIn('slow');
  });

  $(document).on("click", ".product-heart", function(e) {
    e.preventDefault;
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).addClass('inactive');
    }else{
      $(this).removeClass('inactive');
      $(this).addClass('active');
    }
  });

  $(document).on("click", ".back-button", function(e) {
    e.preventDefault;
    alert('Action not implemented');
  });

  $(document).on("click", ".close-add-to-cart", function(e) {
    e.preventDefault;
    $('.add-to-cart-overlay').hide();
  });

  $(document).on("click", ".close-add-to-cart", function(e) {
    e.preventDefault;
    $('.add-to-cart-overlay').hide();
  });

  $(document).on("click", ".product-feature-image, .product-content h3 a, .product-add-to-cart", function(e) {
    e.preventDefault;
    $('.add-to-cart-overlay').show();
  });

  function runMasonry(){
    $('.layout-grid').masonry({
      columnWidth: '.item-container',
      itemSelector: '.item-container'
    });
    // Adding this second method in to round
    // masonry after a short delay in case
    // the first method executes prior to the
    // full page being loaded.
    // Lets run this every half a second for a total of
    // 5 seconds to ensure it's working correctly
    var InvokeInterval = setInterval(function(){
      $('.layout-grid').masonry({
        columnWidth: '.item-container',
        itemSelector: '.item-container'
      });
    }, 500);
    // Lets make sure that we stop this interval job
    // after 5 seconds.
    setTimeout(function(){
        clearInterval(InvokeInterval);
    }, 5000);
  }

});
