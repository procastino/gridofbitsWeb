//set decimal values for each bit
var decValues=[8,4,2,1]
//list of id's for the buttons
var buttonsId =[
  ["1_1","1_2","1_3","1_4"],
  ["2_1","2_2","2_3","2_4"],
  ["3_1","3_2","3_3","3_4"],
  ["4_1","4_2","4_3","4_4"]
];
//list of id's for the results
var resId=[["resH1","resH2","resH3","resH4"],["resV1","resV2","resV3","resV4"]];
//list for storing results [horizontal][vertical]
var results=[[0,0,0,0],[0,0,0,0]];
//list for storing player results [horizontal][vertical]
var playerResults=[[0,0,0,0],[0,0,0,0]];
//number of correct lines and rows to check equality
var numCorrect=0;

function populate(){
  //populating the grid with 0 and 1
  var bits = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  for (i=0;i<4;i++){
    for (j=0;j<4;j++){
      var bit=Math.floor(Math.random()*2);
      bits[i][j]=bit;
      var button=buttonsId[i][j];
      }
    }
  //populating the results
  for (k=0;k<2;k++){
    for (j=0;j<4;j++){
      for (i=0;i<4;i++){
        if(k==0){
          results[k][j] = results[k][j]+decValues[i]*bits[j][i];
          }
        else {
          results[k][j] = results[k][j]+decValues[i]*bits[i][j];
          }
        }
      document.getElementById(resId[k][j]).innerHTML=results[k][j];
      }
    }

  //press startButton to start recognizing bitButtons
  $(document).ready(function(){
    $("#startButton").click(function(){
      console.log("start!");
      gameStart();
    });
  });
}

//game starts recognizing bitButtons, giving results and informing completion
function gameStart(){
  //time management function
  //variables for time display
  var counter=setInterval(timer,10);
  var counterOn=true;
  var count=0;
  function timer(){
    count+=1;
    var seconds=Math.floor(count/100);
    document.getElementById("timerCent").innerHTML=count-seconds*100;
    document.getElementById("timerSec").innerHTML=seconds;

  }
  $(".bitButton").click(function(){
      if ($(this).html()==0){
        $(this).html('1');
        $(this).css("background-color","orange");
      }
      else {
        $(this).html('0');
        $(this).css("background-color","blue");
      }
      //checking player results
      for (k=0;k<2;k++){
        for (i=0;i<4;i++){
          for (j=0;j<4;j++){
            if (k==0){
            playerResults[k][i] = playerResults[k][i]+decValues[j]*document.getElementById(buttonsId[i][j]).innerHTML;
              }
            else {
              playerResults[k][i] = playerResults[k][i]+decValues[j]*document.getElementById(buttonsId[j][i]).innerHTML;
              }
            }
          if (playerResults[k][i]==results[k][i]){
            $('#'+resId[k][i]).css("background-color", "#4CAF50");
            numCorrect += 1;
            }
          else {
            $('#'+resId[k][i]).css("background-color", "white");
            }
          }
        }
        if (numCorrect==8){
          document.getElementById('final').innerHTML="Conseguíchelo!";
          clearInterval(counter);
          // counterOn=false;
        }else {
          numCorrect = 0;
        }
          playerResults=[[0,0,0,0],[0,0,0,0]];
    });
}
