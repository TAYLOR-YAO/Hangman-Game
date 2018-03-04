
var soccerPlayer =["ronaldo","messi","hazar","neymar","griezman","ibrahimovic","inesta","etoo","drogba","adebayor","modric","cavani","salah","mane","kane","kroos", "benzema", "mbappe", ];

var randomName = Math.floor(Math.random() *soccerPlayer.length);
var win= 0;
var nonWin = 0;
var score = [];
var lost = [];
var underscore = [];
var choosenName = soccerPlayer[randomName];

var docRigthGuess = document.getElementsByClassName("underscore");
var docWrongGuess = document.getElementsByClassName("lost");
var docUnderScore = document.getElementsByClassName("underscore");
var docNonWin = document.getElementsByClassName("nonWin");
var docWin = document.getElementsByClassName("win");

//  console.log(choosenName);

var generatUnderscore = () => {
    for (var i=0; i < choosenName.length; i++){
        underscore.push("-");
        
    }
    return underscore;
}
console.log(generatUnderscore());
document.addEventListener("keypress", (event) =>{
    var keyWord = String.fromCharCode(event.keyCode);

    for ( var i=0; i<choosenName.length; i++){
        if(choosenName[i] === keyWord){
            underscore[i] = keyWord;
            win[i] += win++;
            nonWin= nonWin;
        }


        docRigthGuess[0].innerHTML = underscore;
        docWrongGuess[0].innerHTML = lost;
        docWin[0].innerHTML = win;
        docNonWin[0].innerHTML = nonWin;                    
    }
    if(choosenName != keyWord){
        nonWin++;
    }
   
    
});


// I can't finish it  I'm probably missing to write the right keyWords in my if statement. please to explin the logique I should usfor me.
