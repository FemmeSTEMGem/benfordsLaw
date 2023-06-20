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

// After chatting with Danny, there's a method called "count" that would literally do what I need, lol - I'll play around with both Object and "count" (or maybe both) and see which is better suited

let array = [345, 45, 3, 87, 246, 5, 457, 120, 436, 135, 436, 235, 87, 3457, 358, 2176, 698]
// sortedArray = [120, 135, 2176, 235, 246, 3, 345, 3457, 358, 436, 436, 45, 457, 5, 698, 87, 87]

function lawCalculator(a) {
  let resultsObject = {}

  for (let i = 1; i < 10; i++) {
    a.sort().forEach(x => {
      if (parseInt(x.toString().split('')[0]) == i) {
        resultsObject[i] = (resultsObject[i]+1) || 1
      }
    })
  }
  return resultsObject
}

console.log(lawCalculator(array))

// It works! Now I just need one more condition for times when there are no values starting with a number (in the array I have above, there's no 7s or 9s - still need to create a key-value pair that will reflect a zero value)