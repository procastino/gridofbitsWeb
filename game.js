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
var resIdHorizontal=["resH1","resH2","resH3","resH4"];
var resIdVertical=["resV1","resV2","resV3","resV4"];
//list for storing results [horizontal][vertical]
var results=[[0,0,0,0],[0,0,0,0]];
//list for storing player results [horizontal][vertical]
var playerResults=[[0,0,0,0],[0,0,0,0]];

function populate(){
  //populating the grid with 0 and 1
  var bits = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  for (i=0;i<4;i++){
    for (j=0;j<4;j++){
      var bit=Math.floor(Math.random()*2);
      bits[i][j]=bit;
      var button=buttonsId[i][j];
      //document.getElementById(button).innerHTML=bit;
    }
  }
  //populating the horizontal results
  for (j=0;j<4;j++){
    for (i=0;i<4;i++){
      results[0][j] = results[0][j]+decValues[i]*bits[j][i];
      }
      document.getElementById(resIdHorizontal[j]).innerHTML=results[0][j];
  }
  //populating the vertical results
  for (j=0;j<4;j++){
    for (i=0;i<4;i++){
      results[1][j] = results[1][j]+decValues[i]*bits[i][j];
      }
    document.getElementById(resIdVertical[j]).innerHTML=results[1][j];
  }
  //button management
  $(document).ready(function(){
      $("button").click(function(){
          if ($(this).html()==0){
            $(this).html('1');
          }
          else {
            $(this).html('0');
          }
          //checking horizontal values
          for (i=0;i<4;i++){
            for (j=0;j<4;j++){
              playerResults[0][i] = playerResults[0][i]+decValues[j]*document.getElementById(buttonsId[i][j]).innerHTML;
              playerResults[1][i]=
              playerResults[1][i]+decValues[j]*document.getElementById(buttonsId[j][i]).innerHTML;
              }
            if (playerResults[0][i]==results[0][i]){
                $('#'+resIdHorizontal[i]).css("background-color", "orange");
                }
                else {
                  $('#'+resIdHorizontal[i]).css("background-color", "white");
                }
            if (playerResults[1][i]==results[1][i]){
                $('#'+resIdVertical[i]).css("background-color", "orange");
                }
                else {
                  $('#'+resIdVertical[i]).css("background-color", "white");
                }
              }
            playerResults=[[0,0,0,0],[0,0,0,0]];

      });
  });
}

function showGrid(){
  for (i=0;i<4;i++){

  }
}
