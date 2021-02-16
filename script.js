
function TakeInput () {
    var text = document.getElementById('user-input').value;
    var units = document.getElementById('units').value;
    console.log(text + ' ' + units);
    if (units == 'lb') {
        // convert from pounds to kilos
        let tofloat = parseFloat(text);
        let ans = tofloat * 0.453592;
        document.getElementById("result-output").innerHTML = ans + ' ' + 'kilograms';
    } else 
    if (units == 'kg') {
        //converts from kilos to pounds 
        let tofloat = parseFloat(text);
        let ans = tofloat * 2.20462;
        document.getElementById("result-output").innerHTML = ans + ' ' + 'pounds';
    }


}


