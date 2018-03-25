/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don’t change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions ("happy",function myFunc(par){
    var s="";  
    for (var i=0;i<par;i++)
    { 
        s+="ha";
    }
    return s+"!"; 
});
