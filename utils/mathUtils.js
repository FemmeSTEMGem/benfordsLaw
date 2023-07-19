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

function count(a) {
  a.forEach(x => {
    let key = parseInt(x.toString().split('')[0])
    resultsObject[key] += 1
  })
  return resultsObject
}

function lawCalculator(a) {
  let key = count(a)
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