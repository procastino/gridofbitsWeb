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

function populate(){
  var bits = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  for (i=0;i<4;i++){
    for (j=0;j<4;j++){
      var bit=Math.floor(Math.random()*2);
      bits[i][j]=bit;
      var button=buttonsId[i][j];
      console.log(bit);
      document.getElementById(button).innerHTML=bit;
    }
  }
  for (j=0;j<4;j++){
    for (i=0;i<4;i++){
      results[0][j] = results[0][j]+decValues[i]*bits[j][i];
    }
    document.getElementById(resIdHorizontal[j]).innerHTML=results[0][j];
  }

  console.log(results);

}
