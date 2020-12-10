async function getAllData() {
  let response = await fetch('day10.txt')
  let data = await response.text()
  return data
}

function lines(data) {
  return data.split("\n")
}

function sortNumbers(data) {
  let sortedNumbers = data.map(number => parseInt(number)).sort((a, b) => a - b)
  let deviceJolt = sortedNumbers[sortedNumbers.length -1] + 3
  return [0,...sortedNumbers, deviceJolt]
}

getAllData()
.then(lines)
.then(sortNumbers)
//.then(numbers => checkAllPosibleConsecutiveNumberLengths(numbers,373803594))
.then(result => console.log(result)) 