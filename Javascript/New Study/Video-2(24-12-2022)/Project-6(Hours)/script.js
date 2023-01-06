
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;//its denotes timer rukha huva hai


function onStart() {
    timer = true;
    stopWatch();
}

function onStop() {
    timer = false;
}

function onReset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
}

function stopWatch() {
    if (timer == true) {
        count = count + 1;

        // Sec na mate
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        // Min na mate
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        // Hr na mate
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        // a badhu double digit na mate lage 
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById("min").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopWatch()", 10);
    }
}