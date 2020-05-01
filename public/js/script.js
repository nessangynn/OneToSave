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