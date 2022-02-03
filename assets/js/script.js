// // https://api.chess.com/pub/player/{username}
// let userName = 'jonysunami'

// var requestUrl = 'https://api.chess.com/pub/player/jonysunami'
var userArr = ['firouzja2003', 'hikaru', 'danielnaroditsky', 'magnuscarlsen', 'garrykasparov', 'anishgiri', 'gothamchess']
var topPlayersEl = document.querySelector("#top-players")
var APIUrl = ("https://api.chess.com/pub/player/");



// var myArray = ['firouzja2003', 'hikaru', 'danielnaroditsky', 'magnuscarlsen', 'garrykasparov', 'anish-giri', 'gothamchess'];
// var myNewArray = [];
// for (var i=0; i<5; i++) {
//     myNewArray.push(myArray.splice(Math.random()*(myArray.length-1),1).pop());
// }


/////////////Displays Player Info/////////////////
var displayPlayerInfo = function(myNewArray) {


  userArr.forEach(element => { 

  fetch(APIUrl + element).then(function(response) {
  
          response.json().then(function(data) {

              //Displays Profile Picture
              console.log(data.avatar);
              var currentIconEl = document.createElement("img")
              currentIconEl.src = data.avatar
              topPlayersEl.append(currentIconEl)

              //Displays Username
              var currentTempEl = document.createElement("p")
              currentTempEl.textContent = data.username
              topPlayersEl.append(currentTempEl);
          });
  });

});
  
};

displayPlayerInfo()
