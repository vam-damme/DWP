// Set the date we're counting down to
var countDownDate = new Date("Feb 25, 2020 21:29:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = Math.round((countDownDate - now)/1000);

    var week = Math.floor(distance/(7*24*60*60));
    distance = distance-(week*7*24*60*60)
    var days = Math.floor(distance/(24*60*60));
    distance = distance-(days*24*60*60);
    var hours = Math.floor(distance/(60*60));
    distance = distance-(hours*60*60);
    var minutes = Math.floor(distance/(60));
    distance = distance-(minutes*60);
    var seconds = Math.floor(distance);

    // Output the result in an element with id="demo"
    if(seconds<10){
        document.getElementById("detik").innerHTML = "0" + seconds;
    }else{
        document.getElementById("detik").innerHTML = seconds;
    }

    if(minutes<10){
        document.getElementById("menit").innerHTML = "0" + minutes;
    }else{
        document.getElementById("menit").innerHTML = minutes;
    }

    if(week<10){
        document.getElementById("week").innerHTML = "0"+week;        
    }else{
        document.getElementById("week").innerHTML = week;
    }

    if(hours<10){
        document.getElementById("jam").innerHTML = "0" + hours;
    }else{
        document.getElementById("jam").innerHTML = hours;
    }

    if(days<10){
        document.getElementById("day").innerHTML = "0" + days;
    }else{
        document.getElementById("day").innerHTML = days;        
    }

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "ALREADY STARTED!";
    }
}, 1000);

//function untuk read more
function myFunction() {
                var dots = document.getElementById("dots");
                var moreText = document.getElementById("more");
                var btnText = document.getElementById("readmore");
                
                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    btnText.innerHTML = "More";
                    moreText.style.display = "none";
                    // fading.data-aos = "fade-right";

                } else {
                    dots.style.display = "none";
                    btnText.innerHTML = "Less";
                    moreText.style.display = "inline";
                  }
                }