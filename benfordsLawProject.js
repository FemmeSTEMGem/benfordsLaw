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
  let resultsObject = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  }
    a.forEach(x => {
      let key = parseInt(x.toString().split('')[0])
      resultsObject[key] += 1
    })
  return resultsObject
}

console.log(lawCalculator(array))