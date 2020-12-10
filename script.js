let dataFile = 'day10-example.txt' //-example (answer:19208) or -puzzle

async function getAllData() {
  let response = await fetch(dataFile)
  let data = await response.text()
  return data
}

function lines(data) {
  return data.split("\n")
}

function sortNumbers(data) {
  let sortedNumbers = data.map(number => parseInt(number)).sort((a, b) => a - b)
  let deviceJolt = sortedNumbers[sortedNumbers.length -1] + 3
  let sortedAdapters =  [0,...sortedNumbers, deviceJolt]
  return sortedAdapters
}

// HERE, I HAVE MY ARRAY OF SORTED ADAPTORS, INCLUDING OUTLET AND DEVICE


function getOptionsForTheNextAdapter(allAdapters, previousAdapter) {
  let nextPossibleAdapters = allAdapters.filter(adapter => (previousAdapter < adapter)).filter(adapter => adapter <= previousAdapter + 3)
  let nextOptionsLength = nextPossibleAdapters.length
  return {previousAdapter, nextPossibleAdapters, nextOptionsLength}
}

function getAllNextAdapterOptions(allAdapters) {
  
  return allAdapters.map(adapter => getOptionsForTheNextAdapter(allAdapters, adapter))

}



getAllData()
.then(lines)
.then(sortNumbers)
.then(numbers => getAllNextAdapterOptions(numbers))
.then(result => console.log(result)) 