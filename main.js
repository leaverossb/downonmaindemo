/*************
    ON PAGE LOAD
 *************/


document.addEventListener("DOMContentLoaded", () => {
    let videoLinks = [
      'https://www.youtube.com/embed/3i1xVRDGmEI?si=QjO8wlLcpZR0nGCF',
      'https://www.youtube.com/embed/YqYSDkRZr6U?si=vIB_aBXFZtXt8Ibc',
      'https://www.youtube.com/embed/rRjU6TeEMu8?si=tSe79-Gb_w1VeEkx',
      'https://www.youtube.com/embed/wVnn10Ma4bE?si=9hQPc3eOgwsjCXoX',
      'https://www.youtube.com/embed/ix_mf3q_1lM?si=QayQPWq7CSnUjx57'];

    let randomLink = Math.floor(Math.random() * videoLinks.length -1);;

    document.getElementById('performanceVidLink').src = videoLinks[randomLink];
});


/*************
    BANDS
 *************/
console.log('test');

let bands = [
  {
    'name': 'name',
    'genre': 'genre',
    'image': 'url...',
    'bio' : 'bio',
    'link1' : '',
    'link2' : '',
    'showDate': '2026-08-30T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
  {
    'name': 'Year of October',
    'genre': 'Fuzz, Rock, Soul',
    'image': 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1282,fit=crop/m5K23ovQzWtPyLbX/yoobra-5.26.23-32-Yyv2n9NyyriEkeMV.jpg',
    'bio' : 'Year of October is a fuzzed out rock band from Nashville, TN. They travel the U.S. in a minivan to bring their dirty riffs and dark grooves to people everywhere. Made up of Phlecia Sullivan (vocals), Josh Sullivan (guitar), and James Varner (drums) their original music has been described as a Black Sabbath sound with Amy Winehouse in the lead. They have become a staple in the Nashville rock scene by putting on a powerful show that pulls people in with their dynamic and energetic performance. Their sixth studio album entitled, I’ve Given You Everything, is deeply personal and encapsulates their years on the road, dealing with the ever changing world without becoming hardened to it, and still has the storytelling and fantasy that is true to the Year of October sound. Album out now.',
    'link1' : 'https://yearofoctober.com/',
    'link2' : '',
    'showDate': '2026-09-18T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
  {
    'name': 'Uptown Gypsy',
    'genre': 'Rock, Country, Blues',
    'image': 'Images/Band_Images/UTG.png',
    'bio' : '<p>Uptown Gypsy is a high-energy variety cover band based in Kentucky known for playing dance hits across a wide range of musical styles.</p> <h3>Band Overview & Style</h3> <ul><li>Genre & Vibe: High-energy live music, dance tunes, soul, and rock.</li><li>Performances: Frequently plays local venues, festivals, and family-friendly dance nights across Kentucky (such as The Silver Eagle in Mount Vernon and the Triple Crown Tavern in Richmond)</li></ul>',
    'link1' : '<a href="https://www.tiktok.com/@uptown.gypsy">TikTok</a>',
    'link2' : '<a href="https://www.facebook.com/uptown.gyspy.2025/">Facebook</a>',
    'showDate': '2026-09-19T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 10:00 PM',
  },
  {
    'name': 'Test Name',
    'genre': 'Country',
    'image': 'Images/Band_Images/Band2.jpg',
    'bio' : '<h3>Band Info</h3><p>Info goes here.  What they play, where they have been. This text is mostly for testing image behavior and other cascading effects of dynamic text generation.</p>',
    'link1' : '',
    'link2' : '',
    'showDate': '2026-09-25T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
  {
    'name': 'Another Band',
    'genre': 'Rock',
    'image': 'Images/Band_Images/Band3.jpg',
    'bio' : '<h3>Band Info</h3><p>HTML is stored in the JSON object.  It works</p>',
    'link1' : '<a href="https://wwww.google.com">Test Link</a>',
    'link2' : '',
    'showDate': '2026-09-26T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
  {
    'name': 'name',
    'genre': 'genre',
    'image': 'url...',
    'bio' : 'bio',
    'link1' : '',
    'link2' : '',
    'showDate': '2026-12-31T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
  {
    'name': 'name',
    'genre': 'genre',
    'image': 'url...',
    'bio' : 'bio',
    'link1' : '',
    'link2' : '',
    'showDate': '2026-12-31T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 11:00 PM',
  },
]

const now = new Date();
const storedDate = now;
const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

// Helper function to clone 'now' and shift the day
function getDateForDay(targetDayIndex) {
  const result = new Date(now);
  // Calculate the distance to the target day
  const distance = targetDayIndex - currentDay;
  result.setDate(now.getDate() + distance);
  return result;
}

// Get the dates (5 = Friday, 6 = Saturday, 0 = Sunday)
const friday = getDateForDay(5);
const saturday = getDateForDay(6);
const sunday = getDateForDay(7); // Use 7 to get the upcoming Sunday at the end of this week

console.log("Friday:", friday.toDateString());
console.log("Saturday:", saturday.toDateString());
console.log("Sunday:", sunday.toDateString());

let thisWeek = [];

/*
if (now > storedDate) {
  console.log('The current time is after the stored date.');
} else {
  console.log('The current time is before or equal to the stored date.');
}
*/
let fridayBand;
let saturdayBand;

function findBands() {
    let totalBands = bands.length;
    let fridayDate = friday.toISOString().split('T')[0]; //split T removes time from date string
    let saturdayDate = saturday.toISOString().split('T')[0];

    for (let i = 0; i <= (totalBands - 1); i++) {
      let bandDate = bands[i].showDate;
      let bandDateOnly = bandDate.toString().split('T')[0];
      let bandName = bands[i].name;
      let fD = fridayDate.slice(5,);
      let sD = saturdayDate.slice(5,);

      //console.log('band date = ', bandDateOnly, 'this friday = ', fridayDate);
      if(bandDateOnly == fridayDate) {
        //console.log("band : ", i, " ", bandName);
        fridayBand = bands[i];
        document.getElementById('bN1').innerText = bands[i].name;
        document.getElementById('bG1').innerText = bands[i].genre;
        document.getElementById('bD1').innerText = fD;
        document.getElementById('bT1').innerText = bands[i].showTime;
        document.getElementById('bI1').src = bands[i].image;
      } else if(bandDateOnly == saturdayDate) {
        //console.log("band : ", i, " ", bandName);
        saturdayBand = bands[i];
        document.getElementById('bN2').innerText = bands[i].name;
        document.getElementById('bG2').innerText = bands[i].genre;
        document.getElementById('bD2').innerText = sD;
        document.getElementById('bT2').innerText = bands[i].showTime;
        document.getElementById('bI2').src = bands[i].image;
      }
    }
}

findBands();

let menuAppsVisible = false;
let menuEntreesVisible = false;
let menuDrinksVisible = false;
let menuSweetsVisible = false;

function showMenuApps() {
  if (!menuAppsVisible) {
    closeAllMenus();
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuAppetizers').style.display = 'block';
    window.location.hash ="#foodDrink"
    menuAppsVisible = true;
  } else {
    closeAllMenus();

  }
}

function showMenuEntrees() {
  if (!menuEntreesVisible) {
    closeAllMenus();
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuBurgers').style.display = 'block';
    document.getElementById('menuSandwiches').style.display = 'block';
    document.getElementById('menuNonSandwich').style.display = 'block';
    document.getElementById('menuWings').style.display = 'block';
    document.getElementById('menuPizza').style.display = 'block';
    document.getElementById('menuSpuds').style.display = 'block';
    document.getElementById('menuSalads').style.display = 'block';
    document.getElementById('menuSides').style.display = 'block';
    window.location.hash ="#foodDrink"
    menuEntreesVisible = true;
  } else {

    closeAllMenus();
  }
}

function showMenuSweets() {
  if (!menuSweetsVisible) {
    closeAllMenus();
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuSweets').style.display = 'block';
    window.location.hash ="#foodDrink";
    menuSweetsVisible = true;
  } else {

    closeAllMenus();
  }
}

function showMenuDrinks() {
  if (!menuDrinksVisible) {
    closeAllMenus();
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuDrinks').style.display = 'block';
    window.location.hash ="#foodDrink";
    menuDrinksVisible = true;
  } else {

    closeAllMenus();
  }
}
function closeAllMenus() {
    menuAppsVisible = false;
    menuEntreesVisible = false;
    menuSweetsVisible = false;
    menuDrinksVisible = false;
    document.getElementById('menuContainer').style.display = 'none';
    document.getElementById('menuBurgers').style.display = 'none';
    document.getElementById('menuSandwiches').style.display = 'none';
    document.getElementById('menuNonSandwich').style.display = 'none';
    document.getElementById('menuWings').style.display = 'none';
    document.getElementById('menuPizza').style.display = 'none';
    document.getElementById('menuSpuds').style.display = 'none';
    document.getElementById('menuSalads').style.display = 'none';
    document.getElementById('menuSides').style.display = 'none';
    document.getElementById('menuSweets').style.display = 'none';
    document.getElementById('menuAppetizers').style.display = 'none';
    document.getElementById('menuDrinks').style.display = 'none';
    window.location.hash ="#foodDrink";
}

function FridayBandBioToggle() {
    document.getElementById('bandBioContainer'). style.display = "grid";

    let BN = fridayBand.name;
    let BG = fridayBand.genre;
    let BI = fridayBand.image;
    let BL1 = fridayBand.link1;
    let BL2 = fridayBand.link2;
    let BB = fridayBand.bio;

    document.getElementById('bandTitle').innerText = BN;
    document.getElementById('bandGenre').innerText = BG;
    document.getElementById('bandPic').src = BI;
    document.getElementById('bandPicSmall').src = BI;
    if (BL1 !== null) {
          document.getElementById('bandSocialMedia').innerHTML = '<p>'+ BN + ' On Social Media'+ '</p>' + BL1 + '<br>' + BL2;
    }

    document.getElementById('bandBio').innerHTML = BB;

}

function SaturdayBandBioToggle() {
    document.getElementById('bandBioContainer'). style.display = "grid";

    let BN = saturdayBand.name;
    let BG = saturdayBand.genre;
    let BI = saturdayBand.image;
    let BL1 = saturdayBand.link1;
    let BL2 = saturdayBand.link2;
    let BB = saturdayBand.bio;

    document.getElementById('bandTitle').innerText = BN;
    document.getElementById('bandGenre').innerText = BG;
    document.getElementById('bandPic').src = BI;
    document.getElementById('bandPicSmall').src = BI;
    if (BL1 !== null) {
          document.getElementById('bandSocialMedia').innerHTML = '<p>'+ BN + ' On Social Media'+ '</p>' + BL1 + '<br>' + BL2;
    }

    document.getElementById('bandBio').innerHTML = BB;

}

function closeBB() {
  document.getElementById('bandBioContainer').style.display = "none";
}


/**************************
      IMAGE RANDOMIZER
***************************/
let RandomizerTimer = 3000; //in milliseconds

let imageGallery = ["Images/1.JPG","Images/2.JPG", "Images/3.JPG", "Images/4.JPG", "Images/5.JPG", "Images/6.JPG","Images/7.JPG", "Images/8.JPG", "Images/9.JPG"];

let frameOptions = ["FI1", "FI2", "FI3", "FI4"];

let availableFrames = [];
let availableImages = [];
let AFCount = availableFrames.length;
let AICount = availableImages.length;

const intervalId = setInterval(() => {

  //restore the frame options
  if (AFCount == 0) {
    availableFrames = frameOptions;
  } 

  //restore image options
  if (AICount == 0) {
    availableImages = imageGallery;
  }

  AFCount = availableFrames.length;
  AICount = availableImages.length;

  let frameChoice = availableFrames[Math.floor(Math.random() * availableFrames.length)];
  let chosenFrame = frameChoice;
  //remove that choice from the array
  availableFrames = availableFrames.filter(item => item !== frameChoice);

  let imageChoice = availableImages[Math.floor(Math.random() * availableImages.length)];
  //remove that choice from the array
  availableImages = availableImages.filter(item => item !== imageChoice);

  let imageDiv = document.getElementById(frameChoice);

  if(frameChoice !== null) {

    //make the image transparent
    imageDiv.classList.add('foodImageFade');

    //new image fades in
    setTimeout(() => {
      imageDiv.src = imageChoice;
      // 3. Remove class to fade back in
      imageDiv.classList.remove('foodImageFade');
    }, 800); // Match this delay to your CSS transition duration (0.4s = 400ms)

    //console.log(frameChoice);
  }
}, RandomizerTimer);


