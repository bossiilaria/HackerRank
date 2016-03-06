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
    var data = "";
    for(var i = n-1; i > 0; i--) {
    arr[i].toString();
    data = data + arr[i].toString()+ " ";
    }
    console.log(data + arr[0].toString());

}
*/
/*Calculate the sum of all elements for the first line and second. Compare them and keep the one that is higher. 
Calculate the sum for the third line, compare it to the max and keep the one that is higher. 
Calculate the sum for the 4th line, compare it to the max and keep the one that is higher. 
*/

    var hackMe=[[1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]];
              
                
                /*
                First working attempt
                var tot = 0;
                for(var i =0; i < 4; i++) {
                    for(var j = 0; j < 3; j++) {
                    tot += hackMe[j][i];
                }
            }
                console.log(tot);
                */
                var hGlass1 = 0;
                for(var i =0; i < 3; i++) {
                    for(var j = 0; j < 3; j++) {
                    hGlass1 += hackMe[j][i];
                }
            }
                

                var hGlass2 = 0;
                for(var i =1; i < 4; i++) {
                    for(var j = 0; j < 3; j++) {
                    hGlass2 += hackMe[j][i];
                }
               
            }
            if (hGlass2 < hGlass1) {
                console.log(hGlass1);
            }
            else {
                 console.log(hGlass2);
            }
