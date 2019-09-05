$(document).ready(function () {

  var compGuess = Math.floor(Math.random() * 102 + 19);
  console.log("CompGuess" + CompGuess);
  $("#computerGuess").html(compGuess);

  //   for( var i = 0; i <= 4; i++) {
  //     var gemPick = Math.floor(Math.random() * 12 + 1);
  //   console.log("gemPick:" + gemPick);
  //}

  var firstGem = Math.floor(Math.random() * 12 + 1);
  console.log("first gem:" + firstGem);
  $("#img1").html("<img src=" + "../assets/images/bluegem.png" + "value=" + firstGem + ">");

  var secondGem = Math.floor(Math.random() * 12 + 1);
  console.log("Second gem:" + secondGem);
  $("#img2").html("<img src=" + "../assets/images/greengem.png" + "value=" + secondGem + ">");

  var thirdGem = Math.floor(Math.random() * 12 + 1);
  console.log("gem three:" + thirdGem);
  $("#img3").html("<img src=" + "../assets/images/red gem.png" + "value=" + thirdGem + ">");

  var fourthGem = Math.floor(Math.random() * 12 + 1);
  console.log("gem four:" + fourthGem);
  $("#img4").html("<img src=" + "../assets/images/yellowgem.png" + "value=" + fourthGem + ">");

  var wins = 0;
  console.log("wins:" + wins);

  var losses = 0;
  console.log("losses:" + losses);

  var score = 0;
  console.log("score:" + score);

  function reset() {
    compGuess = Math.floor(Math.random() * 102 + 19);
    console.log("compGuess:" + compguess);
    $("#computerGuess").html(compGuess);

    score = 0;
    $(".userScore").html(score);

    firstGem = Math.floor(Math.random() * 12 + 1);
    console.log("first gem:" + firstGem);
    $("#img1").html("<img src=" + "../assets/images/bluegem.png" + "value=" + firstGem + ">");

    secondGem = Math.floor(Math.random() * 12 + 1);
    console.log("Second gem:" + secondGem);
    $("#img2").html("<img src=" + "../assets/images/greengem.png" + "value=" + secondGem + ">");

    thirdGem = Math.floor(Math.random() * 12 + 1);
    console.log("gem three:" + thirdGem);
    $("#img3").html("<img src=" + "../assets/images/red gem.png" + "value=" + thirdGem + ">");

    fourthGem = Math.floor(Math.random() * 12 + 1);
    console.log("gem four:" + fourthGem);
    $("#img4").html("<img src=" + "../assets/images/yellowgem.png" + "value=" + fourthGem + ">");

    $("img").on("click", function () {
      var newScore = score += parseInt($(this).attr("value"));
      console.log("New Score: " + newScore);
      $(".userScore").html(newScore);

      if (newScore === compPick) {
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("Wins: " + wins);
        reset();

      }

      else if (newScore > compPick) {
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log("Losses: " + losses);
        reset();

      }

    });
  }

  $("img").on("click", function () {
    var newScore = score += parseInt($(this).attr("value"));
    console.log("New Score: " + newScore);
    $(".userScore").html(newScore);

    if (newScore === compGuess) {
      wins++;
      $(".wins").html("Wins: " + wins);
      console.log("Wins: " + wins);
      reset();
    }

    else if (newScore > compGuess) {
      losses++;
      $(".losses").html("Losses: " + losses);
      console.log("Losses: " + losses);
      reset();
    }

  });

}); 










  