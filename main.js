
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
    'bio' : 'A high energy rock, country and blues band from right here in KY that always brings the party.',
    'link1' : 'https://www.tiktok.com/@uptown.gypsy',
    'link2' : 'https://www.facebook.com/uptown.gyspy.2025/',
    'showDate': '2026-09-19T20:00:00', // date format YYYY-MM-DD | must be formatted like this for automation
    'showTime': '8:00 PM - 10:00 PM',
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

if (now > storedDate) {
  console.log('The current time is after the stored date.');
} else {
  console.log('The current time is before or equal to the stored date.');
}

function findBands() {
    let totalBands = bands.length;
    let fridayDate = friday.toISOString().split('T')[0]; 
    let saturdayDate = saturday.toISOString().split('T')[0];

    for (let i = 0; i <= (totalBands - 1); i++) {
      let bandDate = bands[i].showDate;
      let bandDateOnly = bandDate.toString().split('T')[0];
      let bandName = bands[i].name;
      let fD = fridayDate.slice(5,);
      let sD = saturdayDate.slice(5,);

      //console.log('band date = ', bandDateOnly, 'this friday = ', fridayDate);
      if(bandDateOnly == fridayDate) {
        console.log("band : ", i, " ", bandName);
        document.getElementById('bN1').innerText = bands[i].name;
        document.getElementById('bG1').innerText = bands[i].genre;
        document.getElementById('bD1').innerText = fD;
        document.getElementById('bT1').innerText = bands[i].showTime;
        document.getElementById('bI1').src = bands[i].image;
      } else if(bandDateOnly == saturdayDate) {
        console.log("band : ", i, " ", bandName);
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
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuAppetizers').style.display = 'block';
    //close others
    document.getElementById('menuSandwiches').style.display = 'none';  
    document.getElementById('menuBurgers').style.display = 'none';
    menuAppsVisible = true;
  } else {
    document.getElementById('menuContainer').style.display = 'none';
    document.getElementById('menuAppetizers').style.display = 'none';
    menuAppsVisible = false;
    menuEntreesVisible = false;
  }
}

function showMenuEntrees() {
  if (!menuEntreesVisible) {
    document.getElementById('menuContainer').style.display = 'block';
    document.getElementById('menuBurgers').style.display = 'block';
    document.getElementById('menuSandwiches').style.display = 'block';
    //close others
    document.getElementById('menuAppetizers').style.display = 'none';
    menuEntreesVisible = true;
  } else {
    document.getElementById('menuContainer').style.display = 'none';
    document.getElementById('menuBurgers').style.display = 'none';
    document.getElementById('menuSandwiches').style.display = 'none';
    menuEntreesVisible = false;
    menuAppsVisible = false;
  }
}
