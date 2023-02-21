console.log('12312')

const next = document.getElementById('next')
const previous = document.getElementById('previous')
const btn = document.getElementById('btn')
let currentPage = 1
let table = document.getElementById('table')

callApi = async (link) => {
  const res = await fetch(link)
  const data = await res.json()
  printPlanets(data)
}

function printPlanets(apidata) {
  for (i = 0; i < 10; i++) {
    let planet = apidata.results[i]
    let planetName = planet.name
    let population = planet.population
    let climate = planet.climate
    let gravity = planet.gravity

    let row = table.insertRow()
    let nameCell = row.insertCell(0)
    let populationCell = row.insertCell(1)
    let climateCell = row.insertCell(2)
    let gravityCell = row.insertCell(3)

    nameCell.innerHTML = planetName
    populationCell.innerHTML = population
    climateCell.innerHTML = climate
    gravityCell.innerHTML = gravity
  }
}

btn.addEventListener('click', function () {
  callApi('https://swapi.dev/api/planets/?page=1')
  btn.style.visibility = 'hidden'
  next.style.visibility = 'visible'
})

next.addEventListener('click', function () {
  previous.style.visibility = 'visible'
  table.innerHTML = ''
  currentPage += 1
  callApi('https://swapi.dev/api/planets/?page=' + currentPage)

  if (currentPage == 6) {
    next.style.visibility = 'hidden'
  }
})

previous.addEventListener('click', function () {
  next.style.visibility = 'visible'
  table.innerHTML = ''
  currentPage -= 1
  callApi('https://swapi.dev/api/planets/?page=' + currentPage)

  if (currentPage == 1) {
    previous.style.visibility = 'hidden'
  }
})
