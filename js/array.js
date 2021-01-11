function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
// makePhrases();
// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//     var output;
//     var i = 0;
//     while (i < scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     i = i + 1;
// }
// стр 171

// var scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
//     var output;
//     for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i +
//     " score: " + scores[i];
//     console.log(output);
//     }

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,
        .33, .31, .25, .29, .27, .22,
        .31, .25, .25, .33, .21, .25,
        .25, .25, .28, .25, .24, .22,
        .20, .25, .30, .25, .24, .25,
        .25, .25, .27, .25, .26, .29];
function printAndGetHighScore(scores) {
var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
        }
}
return highScore;
}
function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
        bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
function getMostCostEffectiveSolution(scores, costs, highScore){
    var cost=100;
    var index;
    for(var i =0;i < scores.length; i++) { 
        if (scores[i]==highScore){
            if (cost>costs[i]){
                index=i;
                cost=costs[i];     
            }
        }
    }
    return index;
}
var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");






















// function buble(){
//     var scores = [60, 50, 60, 58, 54, 54,
//                   58, 50, 52, 54, 48, 69,
//                   34, 55, 51, 52, 44, 51,
//                   69, 64, 66, 55, 52, 61,
//                   46, 31, 57, 52, 44, 18,
//                   41, 53, 55, 61, 51, 44];
//     var l = scores.length;
//     var k=0;
//     var max=scores[0];
    
//     while (l!=0){
//         console.log("Bubble solution #" +k+ " score:"+scores[k]);
//         k=k+1;
//         l=l-1;
//         if(max<=scores[k]){
//             max=scores[k];
//         }
//     }
//     var m=scores.length;
//     var h=0;
//     var p=[];
//     while (m!=0){
//         if(max==scores[h]){
//            p.push("#"+h)
//         }
//         h=h+1;
//         m=m-1;
//     }
//     console.log("Bubble tests: " +scores.length);
//     console.log("Highest bubble score: " +max);
//     console.log("Highest bubble score: " +p);
// }
// buble();