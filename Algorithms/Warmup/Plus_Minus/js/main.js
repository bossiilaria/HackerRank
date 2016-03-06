/*
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

}
*/


    var a = [-4, 3, -9, 0, 4, 1];
    
   var countPos = 0;
   var countNeg = 0;
   var countZero = 0;
   var fractPos = countPos/6;
   for(var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        countPos++;
       
    } if(a[i] < 0) {
        countNeg++;
       
    } if(a[i] == 0) {
        countZero++;   
    }
   }
    console.log((fractPos).toPrecision(6));
    console.log(countNeg);
    console.log(countZero);