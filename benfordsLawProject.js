//Leading number  Probability
// 1              30.1% 	
// 2 	            17.6% 	
// 3 	            12.5% 	
// 4 	             9.7% 	
// 5 	             7.9% 	
// 6 	             6.7% 	
// 7 	             5.8% 	
// 8 	             5.1% 	
// 9 	             4.6%

let array = [345, 45, 3, 87, 246, 5, 457, 120, 436, 135, 436, 235, 87, 3457, 358, 2176, 698]

function lawCalculator(a) {
  calculatorArray = []
  a.sort().forEach(x => {
    let count = 0
    for (let i = 1; i < 10; count++) {
      if (parseInt(x.toString().split('')[0]) == i) {
        calculatorArray.push(i)
      }
      i++
    }
  })
  return calculatorArray
}

console.log(lawCalculator(array))

//Discovered the issue - I think the .forEach loop needs to be inside the for loop...rather than the for loop being inside the .forEach loop. Right now, the for loop is running on the first element in the array over and over again until the for loop ends. Then we go to the next element in the array and run the for loop over and over until the loop ends. If we switch what's nested in what, I think that'll fix the problem

// Better than the above, I think tracking via Objects would be better

// After chatting with Danny, there's a method called "count" that would literally do what I need, lol - I'll play around with both Object and "count" (or maybe both) and see which is better suited