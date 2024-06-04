
function convert(){
    let input = document.getElementById("input").value;
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");

    let km = 1.60934;
    let meter = 1609.34;
    let foot = 5280;
    let cm = 160934;
    let inch = 63360;

    let result_km = input*km;
    let result_meter = input*meter;
    let result_foot = input*foot;
    let result_cm = input*cm;
    let result_inch = input*inch;

    one.innerText = `${input} Miles equal to ${result_km} km`;
    two.innerText = `${input} Miles equal to ${result_meter} meter`;
    three.innerText = `${input} Miles equal to ${result_foot} foot`;
    four.innerText = `${input} Miles equal to ${result_cm} cm`;
    five.innerText = `${input} Miles equal to ${result_inch} inch`;
    
}