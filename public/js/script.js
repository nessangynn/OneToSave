// Search bar
if (typeof jQuery === "undefined") { 
    throw new Error("jQuery required"); 
}

(function($) {
  
    $('#search-button').on('click', function(e) {
      if($('#search-input-container').hasClass('hdn')) {
        e.preventDefault();
        $('#search-input-container').removeClass('hdn')
        return false;
      }
    });
    
    $('#hide-search-input-container').on('click', function(e) {
      e.preventDefault();
      $('#search-input-container').addClass('hdn')
      return false;
    });
    
  })(jQuery);

// HOME PAGE
// Swiper function for home page
var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
// ABOUT PAGE
// Contact us form
function formSubmit(){
    var a = document.forms["myform"]["name"].value;
    var b = document.forms["myform"]["email"].value;
    var c = document.forms["myform"]["message"].value;

    if (a == "" | b =="" | c=="") {
    alert("You need to fill out the box with *");
    return false;
  }else{
        alert("We receive you message!");
        return true;
    }

};

// CHARITIES PAGE