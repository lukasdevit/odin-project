// Get data from json file and save it to a variable
let jsonData = {};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    console.log(jsonData);
    console.log(jsonData.doughTypes);
    addDoughSelectors();
    addSauceSelectors();
  })
  .catch((error) => console.log(error));

// html consts
const doughImage = document.getElementById("doughImage");
const doughType = document.getElementById("doughTypes");
// end of html consts

// import data and set html selectors
function addDoughSelectors() {
  let doughList = document.getElementById("doughTypes");
  doughList.innerHTML = "";
  jsonData.doughTypes.forEach((dough) => {
    if (dough.id === "placeholder") {
      doughList.innerHTML += `<option value="${dough.id}" selected disabled>${dough.name}</option>`;
    } else {
      doughList.innerHTML += `<option value="${dough.id}">${dough.name}</option>`;
    }
  });
}

function addSauceSelectors() {
  let sauceList = document.getElementById("sauceTypes");
  sauceList.innerHTML = "";
  jsonData.souces.forEach((sauce) => {
    if (sauce.id === "placeholder") {
      sauceList.innerHTML += `<option value="${sauce.id}" selected disabled>${sauce.name}</option>`;
    } else {
      sauceList.innerHTML += `<option value="${sauce.id}">${sauce.name}</option>`;
    }
  });
}

function changeDough() {
  doughType.addEventListener("change", () => {
    const selectedDoughId = doughType.value;
    const selectedDough = jsonData.doughTypes.find(
      (dough) => dough.id === selectedDoughId
    );

    if (selectedDough) {
      doughImage.src = selectedDough.img;
      console.log("Dough type: " + selectedDough.name);
    }
  });
}

function changeSauce() {
  sauceTypes.addEventListener("change", () => {
    const selectedSauceId = sauceTypes.value;
    const selectedSauce = jsonData.souces.find(
      (sauce) => sauce.id === selectedSauceId
    );

    if (selectedSauce) {
      console.log("Sauce type: " + selectedSauce.name);
    }
  });
}

changeDough();
changeSauce();
