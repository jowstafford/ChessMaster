//Global Variables

var topPlayersEl = document.querySelector("#top-players")
var profileInfoEl = document.querySelector("#profile-info")
var userArr = ['firouzja2003', 'hikaru', 'danielnaroditsky', 'magnuscarlsen', 'anishgiri', 'gothamchess']
var APIUrl = ("https://api.chess.com/pub/player/");






//When Top Player Picture Clicked - runs displayPlayerInfo function
$('img').click(function(e) {
    profileInfoEl.textContent = "";
    var selectedPlayer = e.target.id
    displayPlayerInfo(selectedPlayer);
});




//Displays Player Info Section

var displayPlayerInfo = function(selectedPlayer) {

  //Openings List

  var requestElo = 'https://api.chess.com/pub/player/'+ selectedPlayer +'/games/2021/02';

  fetch(requestElo).then(function(response) {

    response.json().then(function(data) {

      //Selects which game to address
      let APIText = JSON.stringify(data.games[4].pgn)
      const newArr = APIText.split(" ");
      let openingName = newArr[15]
      
        console.log(openingName)

        //searches text for opening names and then renders them on screen
        if (openingName.indexOf('Caro') > -1) {
          var btn = document.createElement('button');
          btn.innerHTML = "Caro-Kann";
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Modern") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Modern";
          profileInfoEl.append(btn);
        } else {
          var currentEl = document.createElement("h3")
        currentEl.textContent = 'More Openings Coming Soon'
        profileInfoEl.append(currentEl);
        };
    }); 
  });



 //Displays Profile Picture and UserName
  fetch(APIUrl + selectedPlayer).then(function(response) {
  
    response.json().then(function(data) {

        //Displays Profile Picture
        var currentIconEl = document.createElement("img")
        //currentIconEl.setAttribute("id", "firouzja2003")
        currentIconEl.src = data.avatar
        profileInfoEl.append(currentIconEl)

        //Displays Username
        var currentEl = document.createElement("h2")
        currentEl.textContent = data.name
        profileInfoEl.append(currentEl);
    }); 
  });


  //Displays Ratings
  fetch(APIUrl + selectedPlayer +'/stats').then(function(response) {
  
    response.json().then(function(data) {

        //Displays Rapid Chess Rating
        var currentEl = document.createElement("p")
        currentEl.textContent = 'Rapid Chess Rating: ' + data.chess_rapid.last.rating
        profileInfoEl.append(currentEl);

        //Displays Bullet Chess Rating
        var currentEl = document.createElement("p")
        currentEl.textContent = 'Bullet Chess Rating: ' + data.chess_bullet.last.rating
        profileInfoEl.append(currentEl);

        //Displays Blitz Chess Rating
        var currentEl = document.createElement("p")
        currentEl.textContent = 'Blitz Chess Rating: ' + data.chess_blitz.last.rating
        profileInfoEl.append(currentEl); 
    });    
  });
};



