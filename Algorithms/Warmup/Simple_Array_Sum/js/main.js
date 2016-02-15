/*
You are given an array of integers of size NN. Can you find the sum of the elements in the array?

Input 
The first line of input consists of an integer N. The next line contains N space-separated integers representing the array elements. 
Sample:

6
1 2 3 4 10 11

Output 
Output a single value equal to the sum of the elements in the array. 
For the sample above you would just print 3131 since 1+2+3+4+10+11=311+2+3+4+10+11=31.
*/
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
    var tot = 0;
    for(var i = 0; i < arr.length; i++) {
        tot = tot + arr[i];
    }
    console.log(tot)
}
