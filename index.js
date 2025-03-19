/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
let lengthEl = document.getElementById("meter-feet");
let volumeEl = document.getElementById("liter-gallon");
let massEl = document.getElementById("kilo-pounds");
let inputEl = document.getElementById("num-input")
let convertBtn = document.getElementById("convert-btn")
let saveBtn = document.getElementById("save-btn")

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    let conversionResults = {
        length: `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`,
        volume: `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`,
        mass: `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms`
    };

    lengthEl.textContent = conversionResults.length;
    volumeEl.textContent = conversionResults.volume;
    massEl.textContent = conversionResults.mass;
})

localStorage.getItem("conversionResults")

saveBtn.addEventListener("click", function() {
    let savedItem = document.getElementById("ul-el");
    savedItem.innerHTML= `
        <h4>Saved Length</h4>
        <p>${lengthEl.textContent}</p>
        <h4>Saved Volume</h4>
        <p>${volumeEl.textContent}</p>
        <h4>Saved Mass</h4>
        <p>${massEl.textContent}</p>`;
    ulEl.appendChild(savedItem);
})

