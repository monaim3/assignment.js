// https://github.com/monaim3/assignment.js



     // kilometerToMeter

 function kilometerToMeter (kilometer){
    var meter=1000;
    var kilometer=kilometer*1000;
    return  kilometer;
}


      // budgetCalculator


function budgetCalculator(ghori,phone,pc){
    var watch=50;
    var mobile=100;
    var laptop=500;

    var total=watch*ghori+mobile*phone+laptop*pc;
    return total;

}


   // hotelCost

function hotelCost(day){
 if(day<=10){
    var cost=day*100;
 }
 else if(day<=20){
    var cost=day*80;
 }
 else
    var cost=day*50;
 
 return cost;
}


    // megaFriend
    
function megaFriend(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }