//Leading number  Probability   Distribution for this exercise
// 1              30.1% 	      28-32%
// 2 	            17.6% 	      16-20%
// 3 	            12.5% 	      11-15%
// 4 	             9.7% 	      8-12%
// 5 	             7.9% 	      6-10%
// 6 	             6.7% 	      5-10%
// 7 	             5.8% 	      4-8%
// 8 	             5.1% 	      3-7%
// 9 	             4.6%         3-7%

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

let randomArray = [345, 45, 3, 87, 246, 5, 457, 120, 436, 135, 436, 235, 87, 3457, 358, 2176, 698]

let benfordsArray = [101, 103, 106, 113, 116, 117, 121, 122, 124, 128, 132, 138, 140, 143, 145, 153, 156, 160, 165, 167, 169, 171, 173, 178, 181, 185, 191, 195, 201, 206, 210, 215, 220, 225, 230, 232, 237, 240, 243, 245, 247, 251, 254, 259, 265, 301, 305, 307, 310, 312, 315, 317, 321, 324, 326, 332, 335, 404, 408, 411, 415, 420, 425, 430, 436, 439, 444, 501, 508, 513, 518, 522, 526, 530, 602, 605, 610, 614, 617, 620, 706, 710, 715, 719, 722, 805, 809, 815, 818, 823, 901, 907, 912, 919, 924]


function dataCalculator(a) {
  a.forEach(x => {
    let key = parseInt(x.toString().split('')[0])
    resultsObject[key] += 1
  })
  return resultsObject
}

function lawCalculator(a) {
  let key = dataCalculator(a)
  let d = a.length
  return key["1"] / d > 0.28 && key["1"] / d < 0.32 &&
    key["2"] / d > 0.16 && key["2"] / d < 0.20 &&
    key["3"] / d > 0.11 && key["3"] / d < 0.15 &&
    key["4"] / d > 0.08 && key["4"] / d < 0.12 &&
    key["5"] / d > 0.06 && key["5"] / d < 0.10 &&
    key["6"] / d > 0.05 && key["6"] / d < 0.09 &&
    key["7"] / d > 0.04 && key["7"] / d < 0.08 &&
    key["8"] / d > 0.03 && key["8"] / d < 0.07 &&
    key["9"] / d > 0.03 && key["9"] / d < 0.07
}


console.log(lawCalculator(benfordsArray))

// Step One: Create front-end which demonstrates Benford's Law
// Step Two: Update to include user-inputs
// Step Three: Reverse-engineer the backend to create data that follows Benford's Law
// Step Four: Update user-input mode so that you can see the percentage of distribution in addition to true/false