/*function lernJS(lang, callback) {
    console.log ("Я учу " + lang);
    callback();
    }

lernJS("JavaScript", function() {
    console.log("Я прошел 3-й урок!")
})  
*/  



/*for ( let i = 0; i < arr.length; i++ ) {
console.log (arr[i]);
}
*/
/*arr.forEach ( function( item, i, mass) {
    console.log ( i + ': ' + item + ' (масив: ' + mass + ')' );
});
console.log (arr);
*/
/*
let arr = [1,15,72, 1555, 227];
let i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log (arr);
console.log (i);
*/

let soldier = {
    health: 400,
    armor: 30000
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log (john);
console.log(john.armor);
