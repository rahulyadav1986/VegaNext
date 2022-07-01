
jQuery('.mobile-menu').slicknav({
    label: '',
    prependTo: 'header',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
       
    }
});




jQuery('#industries-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],	
	  dots:false,
    autoplay:true,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

jQuery('#client-slider').owlCarousel({
  loop:false,
  margin:34,
  nav:true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],	
  dots:false,
  autoplay:true,	
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
        items:5
      }
  }
});