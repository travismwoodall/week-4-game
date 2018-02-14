$(document).ready(function(){
    var randNumber = Math.floor(Math.random() * 101) + 19;
    var total = 0;
    var wins = 0;
    var losses = 0;

    
   $("#winner").html(wins);
   $("#loser").html(losses);
    

    var red = Math.floor(Math.random() * 11) + 1;
    var purple = Math.floor(Math.random() * 11) + 1;
    var white = Math.floor(Math.random() * 11) + 1;
    var green = Math.floor(Math.random() * 11) + 1;

   $("#goal").html(randNumber);
   $("#us").html(total);

   document.getElementById('redcrys').onclick = function() {
      total = red + total;
      $("#us").html(total);
      if (total === randNumber){
            wins++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#winner").html(wins++);
            total = 0;
            $("#us").html(total);
        }
        if (total > randNumber){
            losses++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#loser").html(losses++);
            total = 0;
            $("#us").html(total);
        }
    };

    document.getElementById('purplecrys').onclick = function() {
        total = purple + total;
        $("#us").html(total);
        if (total === randNumber){
            wins++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#winner").html(wins++);
            total = 0;
            $("#us").html(total);
        }
        if (total > randNumber){
            losses++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#loser").html(losses++);
            total = 0;
            $("#us").html(total);
        }
    };


    document.getElementById('whitecrys').onclick = function() {
        total = white + total;
        $("#us").html(total);
        if (total === randNumber){
            wins++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#winner").html(wins++);
            total = 0;
            $("#us").html(total);
        }
        if (total > randNumber){
            losses++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#loser").html(losses++);
            total = 0;
            $("#us").html(total);
        }
    };

    document.getElementById('greencrys').onclick = function () {
        total = purple + total;
        $("#us").html(total);
        if (total === randNumber){
            wins++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#winner").html(wins++);
            total = 0;
            $("#us").html(total);
        }
        if (total > randNumber){
            losses++;
            randNumber = Math.floor(Math.random() * 101) + 19;
            $("#goal").html(randNumber);
            $("#loser").html(losses++);
            total = 0;
            $("#us").html(total);
        }
    };
});