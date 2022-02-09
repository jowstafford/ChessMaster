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
      let APIText = JSON.stringify(data.games[0].pgn)
      const newArr = APIText.split(" ");
      let openingName = newArr[15]
      
        console.log(openingName)

        //searches text for opening names and then renders them on screen
        if (openingName.indexOf('Caro') > -1) {
          var btn = document.createElement('button');
          btn.innerHTML = "Caro-Kann";
          btn.addEventListener('click', playCaroKann)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Modern") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Modern Defense";
          btn.addEventListener('click', playModern)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Scotch") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Scotch";
          btn.addEventListener('click', playScotch)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Indian") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Kings Indian";
          btn.addEventListener('click', playKingsIndian)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Queens") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Queen's Gambit";
          btn.addEventListener('click', playQueensGambit)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Ruy") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Ruy Lopez";
          btn.addEventListener('click', playRuyLopez)
          profileInfoEl.append(btn);
        } else if (openingName.indexOf("Dutch") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Dutch";
          btn.addEventListener('click', playDutch)
          profileInfoEl.append(btn);
        }  else if (openingName.indexOf("Pirc") > -1) {
          var btn = document.createElement("button")
          btn.textContent = "Pirc Defense";
          btn.addEventListener('click', playPirc)
          profileInfoEl.append(btn);
        } else {
          var currentEl = document.createElement("h3")
          currentEl.textContent = 'More Openings Coming Soon'
          profileInfoEl.append(currentEl);
        };
    }); 
  });

///////////////////////////////////Opening 2///////////////////////////////////////////////////
fetch(requestElo).then(function(response) {

  response.json().then(function(data) {

    //Selects which game to address
    let APIText = JSON.stringify(data.games[3].pgn)
    const newArr = APIText.split(" ");
    let openingName = newArr[15]
    
      console.log(openingName)

      //searches text for opening names and then renders them on screen
      if (openingName.indexOf('Caro') > -1) {
        var btn = document.createElement('button');
        btn.innerHTML = "Caro-Kann";
        btn.addEventListener('click', playCaroKann)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Modern") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Modern Defense";
        btn.addEventListener('click', playModern)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Scotch") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Scotch";
        btn.addEventListener('click', playScotch)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Indian") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Kings Indian";
        btn.addEventListener('click', playKingsIndian)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Queens") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Queen's Gambit";
        btn.addEventListener('click', playQueensGambit)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Ruy") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Ruy Lopez";
        btn.addEventListener('click', playRuyLopez)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Dutch") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Dutch";
        btn.addEventListener('click', playDutch)
        profileInfoEl.append(btn);
      }  else if (openingName.indexOf("Pirc") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Pirc Defense";
        btn.addEventListener('click', playPirc)
        profileInfoEl.append(btn);
      } else {
        var currentEl = document.createElement("h3")
        currentEl.textContent = 'More Openings Coming Soon'
        profileInfoEl.append(currentEl);
      };
  }); 
});

///////////////////////////////////Opening 3///////////////////////////////////////////////////
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
        btn.addEventListener('click', playCaroKann)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Modern") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Modern Defense";
        btn.addEventListener('click', playModern)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Scotch") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Scotch";
        btn.addEventListener('click', playScotch)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Indian") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Kings Indian";
        btn.addEventListener('click', playKingsIndian)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Queens") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Queen's Gambit";
        btn.addEventListener('click', playQueensGambit)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Ruy") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Ruy Lopez";
        btn.addEventListener('click', playRuyLopez)
        profileInfoEl.append(btn);
      } else if (openingName.indexOf("Dutch") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Dutch";
        btn.addEventListener('click', playDutch)
        profileInfoEl.append(btn);
      }  else if (openingName.indexOf("Pirc") > -1) {
        var btn = document.createElement("button")
        btn.textContent = "Pirc Defense";
        btn.addEventListener('click', playPirc)
        profileInfoEl.append(btn);
      } else {
        var currentEl = document.createElement("h3")
        currentEl.textContent = 'More Openings Coming Soon'
        profileInfoEl.append(currentEl);
      };
  }); 
});
///////////////////////////////////////////////////////////////////////


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



///////////////////Chessboard Opening Functions///////////////////

var playScotch = function (APIconfigFiller, newPos) {
  let scotchHints = ["Pawn E7 to E5", "Knight B8 to C6", "Pawn E5 to D4", "Bishop F8 to C5"]
  var config = {
    orientation: 'black',
    draggable: true,
    position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR',
    onChange: playScotch
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: scotchHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints();


  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR') {
    
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R',
      onChange: playScotch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: scotchHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();
    
  } else if (Chessboard.objToFen(newPos) == 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R',
      onChange: playScotch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: scotchHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();

  } else if (Chessboard.objToFen(newPos) == 'r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R',
      onChange: playScotch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: scotchHints[3]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();

  } else if (Chessboard.objToFen(newPos) == 'r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R') {
    
    alert("GREAT WORK YOU DID IT!")

  } //else alert('wrong')
};


var playQueensGambit = function (APIconfigFiller, newPos) {
  let queenGambitHints = ["Pawn D2 to D4", "Pawn C2 to C4", "Knight B1 to C3", "Knight G1 to F3"]

  var config = {
    draggable: true,
    position: 'start',
    onChange: playQueensGambit
  }
  board = Chessboard('myBoard', config)
 
  function displayHints() {
    var hintText = {
      dataType: queenGambitHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints();
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR') {
    
    var config = {

      draggable: true,
      position: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR',
      onChange: playQueensGambit
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: queenGambitHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR') {
    var config = {

      draggable: true,
      position: 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR',
      onChange: playQueensGambit
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: queenGambitHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();

  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR') {
    var config = {

      draggable: true,
      position: 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR',
      onChange: playQueensGambit
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: queenGambitHints[3]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints();

  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R') {
    
    alert("GREAT WORK YOU DID IT!")

  } //else alert('wrong')
};


var playCaroKann = function (APIconfigFiller, newPos) {
  let caroKannHints = ["Pawn C7 to C6", "Pawn D7 to D5", "Pawn C6 to D5"]

  var config = {
    orientation: 'black',
    draggable: true,
    position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR',
    onChange: playCaroKann
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: caroKannHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints()
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR') {
    
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR',
      onChange: playCaroKann
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: caroKannHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR',
      onChange: playCaroKann
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: caroKannHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR') {
    alert("GREAT WORK YOU DID IT!")

  } 
};

var playModern = function (APIconfigFiller, newPos) {
  let queenGambitHints = ["Pawn D2 to D4", "Pawn C2 to C4", "Knight B1 to C3", "Knight G1 to F3"]

  var config = {
    orientation: 'black',
    draggable: true,
    position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR',
    onChange: playModern
  }
  board = Chessboard('myBoard', config)
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR') {
    
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/pppppp1p/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR',
      onChange: playModern
    }
    Chessboard('myBoard', config)
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR',
      onChange: playModern
    }
    Chessboard('myBoard', config)

  } else if (Chessboard.objToFen(newPos) == 'rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N5/PPP2PPP/R1BQKBNR') {
    alert("GREAT WORK YOU DID IT!")

  } 
};



var playKingsIndian = function (APIconfigFiller, newPos) {
  let kingsIndianHints = ["Knight B8 to F6", "Pawn G7 to G6", "Bishop F8 to G7", "Pawn D7 to D6"]

  var config = {
    orientation: 'black',
    draggable: true,
    position: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR',
    onChange: playKingsIndian
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: kingsIndianHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints()
  
  if (Chessboard.objToFen(newPos) == 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR') {
    
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR',
      onChange: playKingsIndian
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: kingsIndianHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR',
      onChange: playKingsIndian
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: kingsIndianHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR',
      onChange: playKingsIndian
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: kingsIndianHints[3]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()


  } else if (Chessboard.objToFen(newPos) == 'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR') {
    alert("GREAT WORK YOU DID IT!")
  };
};


var playRuyLopez = function (APIconfigFiller, newPos) {
  let ruyLopezHints = ["Pawn E2 to E4", "Knight G1 to F3", "Bishop F1 to B5"]
  var config = {
   //orientation: 'black',
    draggable: true,
    position: 'start',
    onChange: playRuyLopez
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: ruyLopezHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints()
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR') {
    
    var config = {
      //orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR',
      onChange: playRuyLopez
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: ruyLopezHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R') {
    var config = {
      //orientation: 'black',
      draggable: true,
      position: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R',
      onChange: playRuyLopez
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: ruyLopezHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R') {
    alert("GREAT WORK YOU DID IT!")

  } 
};



var playDutch = function (APIconfigFiller, newPos) {
  let dutchHints = ["Pawn F7 to F5", "Knight G8 to F6", "Pawn G7 to G6", "Bishop F8 to G7"]
  var config = {
    orientation: 'black',
    draggable: true,
    position: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR',
    onChange: playDutch
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: dutchHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints()
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR') {
    
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/ppppp1pp/8/5p2/2PP4/8/PP2PPPP/RNBQKBNR',
      onChange: playDutch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: dutchHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR',
      onChange: playDutch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: dutchHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR') {
    var config = {
      orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR',
      onChange: playDutch
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: dutchHints[3]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqk2r/ppppp1bp/5np1/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR') {
    
    alert("GREAT WORK YOU DID IT!")

  } //else alert('wrong')
};


var playPirc = function (APIconfigFiller, newPos) {
  let pircHints = ["Pawn E2 to E4", "Pawn D2 to D4", "Knight B1 to C3", "Pawn F2 to F4"]

  var config = {
    //orientation: 'black',
    draggable: true,
    position: 'start',
    onChange: playPirc
  }
  board = Chessboard('myBoard', config)

  function displayHints() {
    var hintText = {
      dataType: pircHints[0]
    }
    document.getElementById('modalTitle').textContent = hintText.dataType
  }
  displayHints();
  
  if (Chessboard.objToFen(newPos) == 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR') {
    
    var config = {
      //orientation: 'black',
      draggable: true,
      position: 'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR',
      onChange: playPirc
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: pircHints[1]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()
    
  } else if (Chessboard.objToFen(newPos) == 'rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR') {
    var config = {
     // orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR',
      onChange: playPirc
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: pircHints[2]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR') {
    var config = {
      //orientation: 'black',
      draggable: true,
      position: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR',
      onChange: playPirc
    }
    Chessboard('myBoard', config)

    function displayHints() {
      var hintText = {
        dataType: pircHints[3]
      }
      document.getElementById('modalTitle').textContent = hintText.dataType
    }
    displayHints()

  } else if (Chessboard.objToFen(newPos) == 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR') {
    
    alert("GREAT WORK YOU DID IT!")

  } //else alert('wrong')
};

