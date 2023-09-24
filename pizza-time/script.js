// Get data from json file
let jsonData = {};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
  })
  .catch((error) => console.log(error));

const doughImage = document.getElementById("doughImage");
const doughType = document.getElementById("doughTypes");

function setHtmlInputs() {
  let doughList = document.getElementById("doughTypes");
  doughList.innerHTML = "";
  jsonData.forEach((dough) => {
    if (dough.id === "placeholder") {
      doughList.innerHTML += `<option value="${dough.id}" selected disabled>${dough.name}</option>`;
    } else {
      doughList.innerHTML += `<option value="${dough.id}">${dough.name}</option>`;
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
