console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let count = 0;
let count2 = 0

document.addEventListener('DOMContentLoaded', () => {


  fetch(imgUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return data.message.forEach(addImage)
  })

  function addImage (element) {
  let newImage = document.createElement('img')
  newImage.setAttribute('id', count)
  newImage.setAttribute('src', element)
  document.getElementById("dog-image-container").append(newImage)
  count++
  }

  fetch(breedUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (const property in data.message) {
      let item = document.createElement('li')
      item.setAttribute('id', count2)
      item.addEventListener('click', changeColor)
      item.textContent = property
      document.getElementById("dog-breeds").append(item)
      count2++
    }
  })

  function changeColor() {
    this.style.color = 'red'
  }


  let select = document.getElementById("breed-dropdown")
  select.addEventListener('change', function () {
    findDogs()
  })

  function findDogs() {
    let selected = select.options[select.selectedIndex].value
    let dogs = document.getElementById("dog-breeds").childNodes
    dogs.forEach(function(element) {
      if (!element.textContent.startsWith(selected)) {
        element.hidden = true
      }
      else {
        element.hidden = false
      }
    }
    )
  }
})
