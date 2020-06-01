var firebaseConfig = {
  apiKey: "AIzaSyAE1DagAv8qN8_nUzMhKCezSz9hoNBIgC0",
  authDomain: "onetosave-cd865.firebaseapp.com",
  databaseURL: "https://onetosave-cd865.firebaseio.com",
  projectId: "onetosave-cd865",
  storageBucket: "onetosave-cd865.appspot.com",
  messagingSenderId: "668764127740",
  appId: "1:668764127740:web:5122e830c03bac5fd93279",
  measurementId: "G-1W04YL0FJM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

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
// subscribe us form data
const otherForm=document.querySelector('#subscribeI,#subscribeC,#subscribe');
otherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('subscribe').add({
    address: otherForm.address.value
  })
  otherForm.address.value="";
})

otherForm.addEventListener('submit',function(){
  alert("Thank you for subscribing!");
})

/*function formSubmit(){
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
    var a = document.getElementsByClassName("form-group").value;
    if(a==""){
      alert("You need to fill out the box with *");
      return false;
    }else{
      alert("we receive you message!");
    }

};*/

//saving contact form
const form = document.querySelector('#add-contact-form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  db.collection('contact').add({
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value 
  })
  form.name.value = "";
  form.email.value = "";
  form.subject.value="";
  form.message.value="";
  
})

//a popup message after form success submit
form.addEventListener('submit',function(){
  alert("We recieve you message!");
  //window.close();
})


//using reload method to chose the window
form.addEventListener('submit',function(){
  var timerId = setTimeout(showSpecial, 1000);
  
})

function showSpecial(){
  location.reload();
}




// CHARITIES PAGE