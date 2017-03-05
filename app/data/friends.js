
var scores = [];
var name;
var link;

function Friend(name,link,scores){
  this.name = name;
  this.link = link;
  this.scores = scores;
}



$("#submit").on("click", function(){
  event.preventDefault();
  clearFields();
  scores = [];
  name = $("#friendName").val().trim();

  link = $("#friendPic").val().trim();


    var questionOne = parseInt($("#q1value").val());
    var questionTwo = parseInt($("#q2value").val());
    var questionThree = parseInt($("#q3value").val());
    var questionFour = parseInt($("#q4value").val());
    var questionFive = parseInt($("#q5value").val());
    var questionSix = parseInt($("#q6value").val());
    var questionSeven = parseInt($("#q7value").val());
    var questionEight = parseInt($("#q8value").val());
    var questionNine  = parseInt($("#q9value").val());
    var questionTen = parseInt($("#q10value").val());


      scores.push(questionOne);
      scores.push(questionTwo);
      scores.push(questionThree);
      scores.push(questionFour);
      scores.push(questionFive);
      scores.push(questionSix);
      scores.push(questionSeven);
      scores.push(questionEight);
      scores.push(questionNine);
      scores.push(questionTen);

      var newFriend = new Friend(name,link,scores);
      console.log(newFriend);

});

function clearFields(){
  $("#friendName").empty();

}


