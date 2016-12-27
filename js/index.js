

// kitchen timer properties
var runTimer;
var setTimer;
var mins = 0;


function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function upDateTimer(){
  var t = getTimeRemaining(setTimer);
  var seconds = t.seconds;
  var mins = t.minutes;
  console.log("Minutes remaining : " + mins + " Second remaining : " + seconds);
  console.log("Total : " + t.total);
  $("span.minutes").html(mins);
  $("span.seconds").html(seconds);
  if (t.total <= 0) {
      clearInterval(runTimer);
    }
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

//start the timer
$("#start").click(function(){
   var now = new Date();
   setTimer = addMinutes(now, mins);
   runTimer = setInterval(upDateTimer, 1000);
  });

//restart the timer
$("#restart").click(function(){
  clearInterval(runTimer);
  mins = 0;
  $("span.minutes").html("0");
  $("span.seconds").html("00");
});

//subtracked 1 min form the timer
$("#down").click(function(){
  mins -= 1;
  if(mins <= 0){
    mins = 0;
  }
  $("span.minutes").html(mins);
});

//add 1 min to the timer
$("#up").click(function(){
  mins += 1;
  $("span.minutes").html(mins);
  console.log("up was clicked");
});

