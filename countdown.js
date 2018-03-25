/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
OUTPUT:
Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!

/*
// your code goes here
/*
var time = 60;

while(time >= 0) {
    if(time > 50 || (time <=49 && time >= 1) ) {
        console.log("T-"+time + " seconds");
    }
    if(time === 50) {
        console.log("Orbiter transfer from ground to internal power");
    }
    time--;
    if(time === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
}
*/

var s = 60;
while (s >= 0) {
    switch (s) {
        case 50: console.log("Orbiter transfers from ground to internal power"); break;
        case 31: console.log("Ground launch sequencer is go for auto sequence start"); break;
        case 16: console.log("Activate launch pad sound suppression system"); break;
        case 10: console.log("Activate main engine hydrogen burnoff system"); break;
        case 6: console.log("Main engine start"); break;
        case 0: console.log("Solid rocket booster ignition and liftoff!"); break;
        default: console.log(`T-${s} seconds`);
    }
    s--;
}
