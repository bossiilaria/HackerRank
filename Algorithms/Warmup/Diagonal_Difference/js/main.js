/*
You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some of 
those integers may be quite large.

Input

The first line of the input consists of an integer N. The next line contains N space-separated integers contained in the array.

Constraints 
1≤N≤101≤N≤10 
0≤A[i]≤10100≤A[i]≤1010

Sample Input 
5
1000000001 1000000002 1000000003 1000000004 1000000005

Output 
Print a single value equal to the sum of the elements in the array. In the above sample, you would print 50000000155000000015.

Note: The range of the 32-bit integer is (−231) to (231−1) or [−2147483648,2147483647](−231) to (231−1) or [−2147483648,2147483647].
When we add several integer values, the resulting sum might exceed the above range.
You might need to use long long int in C/C++ or long data type in Java to store such sums. My solution below works well for JavaScript

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

    var tot=0;
    for(var i = 0; i < arr.length; i++) {
        tot = tot + arr[i];
    }
    console.log(tot);

}
*/


    var a = [[11, 2, 4],
                [4, 5, 6],
                [10, 8, -12]];
   /*  
    var tot1 = 0;
    for(var i = 0; i < arr.length; i++) {
        tot1 = tot1+ arr[i][i];
        }
  
    console.log(tot1); 
    var tot2 = 0;
    for(var j = 0; j < arr.length; j++) {
    tot2 =  arr[j][2] + arr [j][1] + arr[j][0];
}
    console.log(tot2);
    */
    var diag1 = 0;
    diag2 = 0;
    for(var i = 0; i < a.length; i++) {
        for(var j = a.length-1; j >=0; j--) {
            if(i == j) {
                diag1 += a[i][j];
            } if(i+j == a.length -1) {
                diag2 += a[i][j];
            }
        }
    } console.log(Math.abs(diag1 - diag2));
        
