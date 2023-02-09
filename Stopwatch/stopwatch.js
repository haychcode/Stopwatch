window.onload = function () {

    let seconds = 00;
    let tens = 00;

    let appendTens =
    document.getElementById("tens")

    let appendSeconds =
    document.getElementById("seconds")

    const buttonStart =
    document.getElementById("start")

    const buttonStop =
    document.getElementById("stop")

    const buttonReset =
    document.getElementById("reset")

    let Interval ;


    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }


    buttonStop.onclick = function() {

        clearInterval(Interval);
    }


    buttonReset.onclick = function() {

        clearInterval()
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }


    function startTimer () {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens >99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        
    }

}

/*Enter the following link in the browser and work from line 10
https://codepen.io/cathydutton/pen/GBcvo */
