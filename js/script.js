console.log('100% Pure Accommodation');

// Swiper Carousel JS

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
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

// Locations Array

var locations = [
  {
    name: "Nomads Capital Hostel Wellington",
    city: "Wellington",
    address: "118/120 Wakefield Street, Te Aro, Wellington 6011",
    lat: -41.289630,
    long: 174.776860,
    type: "Hostel",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    img1: "images/wellington-hostel-img-1.jpg",
    img2: "images/wellington-hostel-img-2.jpg",
    img3: "images/wellington-hostel-img-3.jpg",
  },
  {
    name:  "Rydges Wellington",
    city: "Wellington",
    address: "75 Featherston Street, Pipitea, Wellington 6011" ,
    lat:  -41.280860,
    long: 174.778720,
    type: "Hotel",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    img1: "images/wellington-hotel-img-1.jpg",
    img2: "images/wellington-hotel-img-2.jpg",
    img3: "images/wellington-hotel-img-3.jpg",
  },
  {
    name: "Beautiful Colonial House",
    city: "Wellington",
    address: "30 Campbell Street, Karori, Wellington, 6012",
    lat: -41.286430 ,
    long: 174.739750,
    type: "House",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    img1: "images/wellington-house-img-1.jpg",
    img2: "images/wellington-house-img-2.jpeg",
    img3: "images/wellington-house-img-3.jpg",
  },
  {
    name: "Victoria Court Motor Lodge",
    city: "Wellington",
    address: "201 Victoria Street, Te Aro, Wellington 6011",
    lat: -41.293540,
    long: 174.773640,
    type: "Motel",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    img1: "images/wellington-motel-img-1.jpg",
    img2: "images/wellington-motel-img-2.jpg",
    img3: "images/wellington-motel-img-3.jpg",
  },
  {
    name: "Queen Street Backpackers",
    city: "Auckland",
    address: "4 Fort Street, Auckland CBD, Auckland 1010",
    lat: -36.845850,
    long: 174.766990,
    type: "Hostel",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    img1: "images/auckland-hostel-img-1.jpg",
    img2: "images/auckland-hostel-img-2.jpg",
    img3: "images/auckland-hostel-img-3.jpg",
  },
  {
    name: "Hotel Grand Chancellor Auckland" ,
    city: "Auckland",
    address: "1 Hobson Street, Auckland CBD, Auckland 1010",
    lat:  -36.845030,
    long: 174.762570,
    type: "Hotel",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    img1: "images/auckland-hotel-img-1.jpg",
    img2: "images/auckland-hotel-img-2.jpg",
    img3: "images/auckland-hotel-img-3.jpg",
  },
  {
    name: "Freemans Bay Cottage",
    city: "Auckland",
    address: "25 Georgina Street, Freemans Bay, Auckland 1011",
    lat: -36.849430,
    long: 174.747570,
    type: "House",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    img1: "images/auckland-house-img-1.jpg",
    img2: "images/auckland-house-img-2.jpg",
    img3: "images/auckland-house-img-3.jpg",
  },
  {
    name: "Auckland Rose Park Hotel",
    city: "Auckland",
    address: "92-102 Gladstone Road, Parnell, Auckland 1010",
    lat: -36.851260,
    long: 174.785850,
    type: "Motel",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    img1: "images/auckland-motel-img-1.jpg",
    img2: "images/auckland-motel-img-2.jpg",
    img3: "images/auckland-motel-img-3.jpg",
  },
  {
    name: "YHA Queenstown Lakefront Backpackers",
    city: "Queenstown" ,
    address: "88-90 Lake Esplanade, Queenstown 9300" ,
    lat: -45.036680,
    long: 168.649410,
    type: "Hostel",
    guestMax: 1,
    guestMin: 1,
    costPN: 30,
    minNights: 1,
    maxNights: 10,
    img1: "images/queenstown-hostel-img-1.jpg",
    img2: "images/queenstown-hostel-img-2.jpg",
    img3: "images/queenstown-hostel-img-3.jpg",
  },
  {
    name:  "Millennium Hotel Queenstown",
    city: "Queenstown" ,
    address: "32 Frankton Road, Queenstown 9300",
    lat:  -45.033790,
    long: 168.667080,
    type: "Hotel",
    guestMax: 2,
    guestMin: 1,
    costPN: 157,
    minNights: 1,
    maxNights: 5,
    img1: "images/queenstown-hotel-img-1.jpg",
    img2: "images/queenstown-hotel-img-2.jpg",
    img3: "images/queenstown-hotel-img-3.jpg",
  },
  {
    name: "Modern Belfast Terrace House",
    city: "Queenstown" ,
    address: "15 Belfast Terrace, Queenstown 9300",
    lat: -45.029910,
    long: 168.671040,
    type: "House",
    guestMax: 4,
    guestMin: 1,
    costPN: 240,
    minNights: 2,
    maxNights: 15,
    img1: "images/queenstown-house-img-1.jpg",
    img2: "images/queenstown-house-img-2.jpg",
    img3: "images/queenstown-house-img-3.jpg",
  },
  {
    name: "Four Seasons Motel Queenstown",
    city: "Queenstown",
    address: "12 Stanley Street, Queenstown 9300",
    lat: -45.033010,
    long: 168.665170,
    type: "Motel",
    guestMax: 4,
    guestMin: 2,
    costPN: 90,
    minNights: 3,
    maxNights: 10,
    img1: "images/queenstown-motel-img-1.jpg",
    img2: "images/queenstown-motel-img-2.jpg",
    img3: "images/queenstown-motel-img-3.jpg",
  },
]



// Google Maps

// Accessiing apiKey from config.json
var myKey = JSON.parse(apiKey);
console.log(myKey[0].key);

// $('#map').show();

var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);
function initMap() {

    var wellington = {lat:-41.286461, lng: 174.776230};
    var auckland = {lat:-36.848461 ,lng: 174.763336};
    var queenstown = {lat:-45.032700  ,lng: 168.658005};

    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 6, center: wellington});

      }
