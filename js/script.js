console.log('100% Pure Accommodation');

//Google Maps ------------------------------------------------------------------

// Accessiing apiKey from config.json
// var myKey = JSON.parse(apiKey);
//  console.log (myKey[0].key);
//
//  var script = document.createElement('script');
//  script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
//  document.getElementsByTagName('body')[0].appendChild(script);

// Swiper Carousel JS ----------------------------------------------------------

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// Locations Array -------------------------------------------------------------

var locations = [
  {
    id: 101,
    name: "Nomads Capital Hostel",
    city: "Wellington",
    address: "118/120 Wakefield Street, Te Aro, Wellington 6011",
    longAndLat: {lat: -41.289630, lng: 174.776860 },
    type: "Hostel | Wellington",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    rating: 3.96,
    img1: "images/wellington-hostel-img-1.jpg",
    img2: "images/wellington-hostel-img-2.jpg",
    img3: "images/wellington-hostel-img-3.jpg",
  },
  {
    id: 102,
    name:  "Rydges Wellington",
    city: "Wellington",
    address: "75 Featherston Street, Pipitea, Wellington 6011" ,
    longAndLat: {lat:  -41.280860, lng: 174.778720 },
    type: "Hotel | Wellington",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    rating: 4.71,
    img1: "images/wellington-hotel-img-1.jpg",
    img2: "images/wellington-hotel-img-2.jpg",
    img3: "images/wellington-hotel-img-3.jpg",
  },
  {
    id: 103,
    name: "Beautiful Colonial House",
    city: "Wellington",
    address: "30 Campbell Street, Karori, Wellington, 6012",
    longAndLat: {lat: -41.286430 , lng: 174.739750 },
    type: "House | Wellington",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    rating: 4.79,
    img1: "images/wellington-house-img-1.jpg",
    img2: "images/wellington-house-img-2.jpeg",
    img3: "images/wellington-house-img-3.jpg",
  },
  {
    id: 104,
    name: "Victoria Court Lodge",
    city: "Wellington",
    address: "201 Victoria Street, Te Aro, Wellington 6011",
    longAndLat: {lat: -41.293540, lng: 174.773640 },
    type: "Motel | Wellington",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    rating: 3.36,
    img1: "images/wellington-motel-img-1.jpg",
    img2: "images/wellington-motel-img-2.jpg",
    img3: "images/wellington-motel-img-3.jpg",
  },
  {
    id: 105,
    name: "Queen Street Backpackers",
    city: "Auckland",
    address: "4 Fort Street, Auckland CBD, Auckland 1010",
    longAndLat: {lat: -36.845850, lng: 174.766990 },
    type: "Hostel | Auckland",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    rating: 4.24,
    img1: "images/auckland-hostel-img-1.jpg",
    img2: "images/auckland-hostel-img-2.jpg",
    img3: "images/auckland-hostel-img-3.jpg",
  },
  {
    id: 106,
    name: "Hotel Grand Chancellor" ,
    city: "Auckland",
    address: "1 Hobson Street, Auckland CBD, Auckland 1010",
    longAndLat: {lat:  -36.845030, lng: 174.762570 },
    type: "Hotel | Auckland",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    rating: 4.33,
    img1: "images/auckland-hotel-img-1.jpg",
    img2: "images/auckland-hotel-img-2.jpg",
    img3: "images/auckland-hotel-img-3.jpg",
  },
  {
    id: 107,
    name: "Freemans Bay Cottage",
    city: "Auckland",
    address: "25 Georgina Street, Freemans Bay, Auckland 1011",
    longAndLat: {lat: -36.849430, lng: 174.747570 },
    type: "House | Auckland",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    rating: 4.60,
    img1: "images/auckland-house-img-1.jpg",
    img2: "images/auckland-house-img-2.jpg",
    img3: "images/auckland-house-img-3.jpg",
  },
  {
    id: 108,
    name: "Auckland Rose Park Hotel",
    city: "Auckland",
    address: "92-102 Gladstone Road, Parnell, Auckland 1010",
    longAndLat: {lat: -36.851260, lng: 174.785850 },
    type: "Motel | Auckland",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    rating: 3.58,
    img1: "images/auckland-motel-img-1.jpg",
    img2: "images/auckland-motel-img-2.jpg",
    img3: "images/auckland-motel-img-3.jpg",
  },
  {
    id: 109,
    name: "Lakefront Backpackers",
    city: "Queenstown" ,
    address: "88-90 Lake Esplanade, Queenstown 9300" ,
    longAndLat: {    lat: -45.036680, lng: 168.649410 },
    type: "Hostel | Queenstown",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    rating: 3.21,
    img1: "images/queenstown-hostel-img-1.jpg",
    img2: "images/queenstown-hostel-img-2.jpg",
    img3: "images/queenstown-hostel-img-3.jpg",
  },
  {
    id: 110,
    name:  "Millennium Hotel",
    city: "Queenstown" ,
    address: "32 Frankton Road, Queenstown 9300",
    longAndLat: {lat:  -45.033790, lng: 168.667080 },
    type: "Hotel | Queenstown",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    rating: 4.49,
    img1: "images/queenstown-hotel-img-1.jpg",
    img2: "images/queenstown-hotel-img-2.jpg",
    img3: "images/queenstown-hotel-img-3.jpg",
  },
  {
    id: 111,
    name: "Modern BelfastHouse",
    city: "Queenstown" ,
    address: "15 Belfast Terrace, Queenstown 9300",
    longAndLat: {lat: -45.029910, lng: 168.671040 },
    type: "House | Queenstown",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    rating: 4.07,
    img1: "images/queenstown-house-img-1.jpg",
    img2: "images/queenstown-house-img-2.jpg",
    img3: "images/queenstown-house-img-3.jpg",
  },
  {
    id: 112,
    name: "Four Seasons Motel",
    city: "Queenstown",
    address: "12 Stanley Street, Queenstown 9300",
    longAndLat: {lat: -45.033010, lng: 168.665170 },
    type: "Motel | Queenstown",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    rating: 4.26,
    img1: "images/queenstown-motel-img-1.jpg",
    img2: "images/queenstown-motel-img-2.jpg",
    img3: "images/queenstown-motel-img-3.jpg",
  },
]

var people;
var days;
var foodSum = 0;
var start;
var end;
// Date Picker -----------------------------------------------------------------

$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){
      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);
     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);
      $("#endDate").datepicker( "option", "maxDate", enDate );
  }
});
$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});

//Find the number of days between dates
function dateDiff() {
  start = $('#startDate').datepicker('getDate');
  end = $('#endDate').datepicker('getDate');
  days   = (end - start)/1000/60/60/24;
  //amount of days selected
  console.log(days);
  return days;

};


// Array -----------------------------------------------------------------------

function myArray(){
  document.getElementById('places').innerHTML = '';
  for (var i = 0; i < locations.length; i++) {
    console.log(locations.length);
    if (parseInt(people) >= locations[i].guestMax) {

    }
    displayArray(i);
  }

};

myArray();

function displayArray(j){
  document.getElementById('places').innerHTML
  +='<div class="col">'
  +  '<div class="card" style="width: 18rem;">'
  +    '<img src="' + locations[j].img1 + '" class="card-img-top" alt="...">'
  +    '<div class="card-body">'
  +      '<h5 class="card-title">' + locations[j].type + '</h5>'
  +      '<h5 class="card-rating">' + locations[j].rating + ' <i class="fas fa-star"></i></h5>'
  +      '<p class="card-text">' + locations[j].name + '</p>'
  +      '<p class="card-text2"> $' + locations[j].costPN + 'NZD per night</p>'
  // +      '<button type="button" onClick="reveal(this.id)" id="'+locations[j].id+'" class="btn btn-primary card-button" data-toggle="modal" data-target=".modal">View More</button>'
  + '<button type="button" class="btn btn-primary card-button button" id="'+ locations[j].id +'" onclick="reveal(this.id)" \
    data-toggle="modal" data-target="#myModal">View more'+'</button>'
  +    '</div>'
  +  '</div>'
  +'</div>'
};

var foodValue;
// var totalPeople;
document.getElementById('calcDate').addEventListener('click',function(){
  people = parseInt(document.getElementById('people').value);
   var checkboxArray = document.querySelectorAll('input[type=checkbox]:checked');
  console.log(checkboxArray);
  foodSum = 0;
  var foodValue = 0;
  for (var i = 0; i < checkboxArray.length; i++) {
    foodValue = parseInt(checkboxArray[i].value);
    console.log(foodValue);
    foodSum = foodSum + foodValue;
    console.log(foodSum);
  }
  var days = dateDiff();
  console.log(people);
  console.log(days);
  document.getElementById('places').innerHTML = '';
  for (var i = 0; i < locations.length; i++) {
    console.log(locations.length);
    if ((parseInt(people) >= locations[i].guestMin)
    && (parseInt(people) <= locations[i].guestMax)
    && (days >= locations[i].minNights)
    && (days <= locations[i].maxNights)){
      displayArray(i);
    }
  }
});

// Price Calc ------------------------------------------------------------------

// function getSelectValue(){
//   var selectedValue = document.getElementById("hungry").value;
//   console.log(selectedValue);
// };
// getSelectValue();

//Modal ------------------------------------------------------------------------
var totalPrice = 0;
var checkboxArray = [];

function reveal(clicked_id){
  $('#displayModal').show();
  var id = clicked_id;
  console.log(typeof(clicked_id));
  document.getElementById('displayModal').innerHTML = '';
    for (var g = 0; g < locations.length; g++) {
      console.log(typeof(locations[g].id));
        // console.log(locations.length);
        if (parseInt(clicked_id) === locations[g].id) {
          // clearModal();
           displayModal(g);
     }
     // console.log(g);
    };
};




function displayModal(j){
  totalPrice = (locations[j].price + foodSum) * days;
  console.log(locations[j].costPN);
  console.log(people * locations[j].costPN);
document.getElementById('displayModal').innerHTML
+= '<div id="myModal" class="modal" tabindex="-1" role="dialog">'
+  '<div class="modal-dialog modal-xl" role="document">'
+    '<div class="modal-content">'
+      '<div class="modal-header">'
+        '<h5 class="modal-title">'+ locations[j].name +'</h5>'
+        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
+          '<span aria-hidden="true">&times;'+'</span>'
+        '</button>'
+      '</div>'
+ '<h6 class="modal-subheading">' + locations[j].type + '</h6>'
+      '<h6 class="modal-subheading">' + locations[j].rating + '<i class="fas fa-star"></i></h6>'
+    '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
+    '<div class="carousel-inner">'
+      '<div class="carousel-item active">'
+        '<img src="' + locations[j].img1 + '" class="d-block w-100 modal-carousel-img" alt="...">'
+      '</div>'
+      '<div class="carousel-item">'
+        '<img src="' + locations[j].img2 + '" class="d-block w-100 modal-carousel-img" alt="...">'
+      '</div>'
+      '<div class="carousel-item">'
+        '<img src="' + locations[j].img3 + '" class="d-block w-100 modal-carousel-img" alt="...">'
+      '</div>'
+    '</div>'
+    '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'
+      '<span class="carousel-control-prev-icon carousel-prev" aria-hidden="true"></span>'
+      '<span class="sr-only">Previous</span>'
+    '</a>'
+    '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">'
+      '<span class="carousel-control-next-icon carousel-next" aria-hidden="true"></span>'
+      '<span class="sr-only">Next</span>'
+    '</a>'
+    '</div>'
+     ' <div class="modal-info row">'
+        '<div class="modal-info-left col-7">'
+          '<h5 class="modal-heading"> ' + locations[j].address + '</h5>'
+          '<h6 class="modal-subheading"> ' + locations[j].guestMin + '-' + locations[j].guestMax + ' Guests | 2 Bed | 2 Bath </h6>'
+          '<p class="modal-info-heading">The space </p>'
+          '<p class="modal-info-body">Newly built modern self contained studio with double glazing and fully insulated to keep you warm, healthy, sound proof and safe. Separate entrance to the bnb and private. All you need for a nice stay in Kapiti. Mini kitchen with butler sink for cooking light meals.</p>'
+          '<p class="modal-info-heading">Guest access </p>'
+          '<p class="modal-info-body">Tea and coffee facilities in studio with ensuite style bathroom which includes shower, toilet, vanity. Internet and free view TV supplied. There is closet space for clothes and belongings. Off street parking can be supplied if required. No laundry facilities in studio but can be arranged in the main house.</p>'
+        '</div>'
+        '<div class="modal-info-right col-5">'
+          '<button type="button" class="button button-book" data-toggle="secondModal" data-dismiss="modal" data-target="#secondModal" onClick="sweet();" name="button">Book Now</button>'
+          '<div class="modal-info-text">'
+            '<p class="modal-book-bold">' + locations[j].costPN + ' NZD</p> <p class="modal-book-body"> per night</p>'
+            '<p class="modal-book-Lbody">'+people+' Guests </p>'
+            '<br>'
+            '<p id="bookBtn" class="modal-book-body">Total per night</p><p class="modal-menu-boldR">'+((locations[j].costPN + foodSum )* people)+'</p>'
+            '<br>'
+            '<p id="bookBtn" class="modal-book-body mt-3">Final Total</p><p class="modal-menu-boldR">'+(((locations[j].costPN + foodSum )* people) * days )+'</p>'
+            '<br>'
+        '</div>'
+      '</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'

};


// Google Map ------------------------------------------------------------------


function initMap() {
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 6,
        center: {lat: -41.3052685, lng: 175.7267386}
      });



      for (var i = 0; i < locations.length; i++) {
      if (this.id === locations[i].ref) {
      var marker = new google.maps.Marker({
        position: locations[i].longAndLat,
        map: map,
        title: locations[i].name
      });

    }
  }
}

// Success Message -------------------------------------------------------------

function sweet(){
  Swal.fire(
    'Success!',
    'Reference #' +  Math.random().toString(24).substring(2, 8),
    'success'
  )
};
