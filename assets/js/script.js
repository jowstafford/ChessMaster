//Global Variables

var topPlayersEl = document.querySelector("#top-players")
var profileInfoEl = document.querySelector("#profile-info")
var userArr = ['firouzja2003', 'hikaru', 'danielnaroditsky', 'magnuscarlsen', 'garrykasparov', 'anishgiri', 'gothamchess']
var APIUrl = ("https://api.chess.com/pub/player/");






//When Top Player Picture Clicked - runs displayPlayerInfo function

topPlayersEl.addEventListener('click', function(e) {
    profileInfoEl.textContent = "";
    var selectedPlayer = e.target.id
    displayPlayerInfo(selectedPlayer);
});





//Displays Player Info Section

var displayPlayerInfo = function(selectedPlayer) {
 
  fetch(APIUrl + selectedPlayer).then(function(response) {
  
    response.json().then(function(data) {

        //Displays Profile Picture
        var currentIconEl = document.createElement("img")
        //currentIconEl.setAttribute("id", "firouzja2003")
        currentIconEl.src = data.avatar
        profileInfoEl.append(currentIconEl)

        //Displays Username
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = data.name
        profileInfoEl.append(currentTempEl);
    }); 
  });

  fetch(APIUrl + selectedPlayer +'/stats').then(function(response) {
  
    response.json().then(function(data) {

        //Displays Rapid Chess Rating
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = 'Rapid Chess Rating: ' + data.chess_rapid.last.rating
        profileInfoEl.append(currentTempEl);

        //Displays Bullet Chess Rating
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = 'Bullet Chess Rating: ' + data.chess_bullet.last.rating
        profileInfoEl.append(currentTempEl);

        //Displays Blitz Chess Rating
        var currentTempEl = document.createElement("p")
        currentTempEl.textContent = 'Blitz Chess Rating: ' + data.chess_blitz.last.rating
        profileInfoEl.append(currentTempEl); 
    });    
  });
};



