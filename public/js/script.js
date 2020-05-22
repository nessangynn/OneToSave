// Your web app's Firebase configuration

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


const otherForm=document.querySelector('#subscribeI,#subscribeC,#subscribe');
otherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('subscribe').add({
    address: otherForm.address.value
  })
  otherForm.address.value="";
})

/*const anotherForm=document.querySelector('#subscribe');
anotherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('subscribe').add({
    address: anotherForm.address.value
  })
  anotherForm.address.value="";
})*/




// ABOUT PAGE
// Contact us form

//get data
db.collection('contact').get().then((snapshot)=>{
  snapshot.docs.forEach(doc=>{
    console.log(doc.data())
  })
})
db.collection('subscribe').get().then((snapshot)=>{
  snapshot.docs.forEach(doc=>{
    console.log(doc.data())
  })
})

//saving data
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





// CHARITIES PAGE

