// function kilometerToMeter (kilometer){
//     var meter=1000;
//     var kilometer=kilometer*1000;
//     return  kilometer;
// }
 
// var result=kilometerToMeter(5);
// console.log(result)

// function budgetCalculator(ghori,phone,pc){
//     var watch=50;
//     var mobile=100;
//     var laptop=500;

//     var total=watch*ghori+mobile*phone+laptop*pc;
//     return total;

// }
// var result =budgetCalculator(8,7,19);
// console.log(result);


// function hotelCost(day)
// {
//  if(day<=10){
//     var cost=day*100;
//  }
     
 
//  else if(day<=20){
//     var cost=day*80;
//  }
    

//  else
//     var cost=day*50;
 
//  return cost;
// }
// var result=hotelCost(17)
// console.log(result)

function megaFriend(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  var result=megaFriend(['Monaim', 'Mukul', 'sabbir','riyad','ahosanislam'])

   console.log(result)