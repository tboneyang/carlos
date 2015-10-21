var content = function() {
  /*
  var options = {
    itemSelector: ".grid-item",
    isAnimated: true,
    layoutPriorities:{
      upperPosition: 1,
      shelfOrder: 1
    }
  }

  $container = $("#grid").masonry(options);
  */
}

  // or with jQuery
  var $grid;

  function triggerMasonry() {
  // don't proceed if $grid has not been selected
  if ( !$grid ) {
    return;
  }
  // init Masonry
  $grid.masonry({
    // options...
    itemSelector: ".grid-item",
    isAnimated: true,
    layoutPriorities:{
      upperPosition: 1,
      shelfOrder: 1
    }
  });
// trigger masonry on document ready
$(function(){
  $grid = $('#grid');
  triggerMasonry();
});
// trigger masonry when fonts have loaded
Typekit.load({
  active: triggerMasonry,
  inactive: triggerMasonry
});
};

$(document).on('page:load', triggerMasonry);
$(document).ready(triggerMasonry);