const convertBtn = document.getElementById("convert-btn")
const cleanBtn = document.getElementById("clean-btn")
const inputEl = document.getElementById("input-el")

const lengthResult = document.getElementById("length-result")
const volumeesult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

const DECIMALS = 3

convertBtn.addEventListener("click", function() {
    
    const num = Number(inputEl.textContent)

    if((isNaN(num))) {

        lengthResult.innerHTML = "Please type a number"
        volumeesult.innerHTML = ""
        massResult.innerHTML = ""
        inputEl.textContent = ""
    } else {
        
        lengthResult.innerHTML = length(num)
        volumeesult.innerHTML = volume(num)
        massResult.innerHTML = mass(num)
        inputEl.textContent = ""
    }
})

function length(_num) {

    let meters = _num*3.28084
    meters = meters.toFixed(DECIMALS)

    let feet = _num/3.28084
    feet = feet.toFixed(DECIMALS)

    return `${_num} meters = ${meters} feet | ${_num} feet = ${feet} meters`
}

function volume(_num) {
    
    let liters = _num*0.2641722
    liters = liters.toFixed(DECIMALS)

    let gallons = _num/0.2641722
    gallons = gallons.toFixed(DECIMALS)

    return `${_num} liters = ${liters} gallons | ${_num} gallons = ${gallons} liters`
}

function mass(_num) {
    
    let kilos = _num*2.20462
    kilos = kilos.toFixed(DECIMALS)

    let pounds = _num/2.20462
    pounds = pounds.toFixed(DECIMALS)

    return `${_num} kilos = ${kilos} pounds | ${_num} pounds = ${pounds} kilos`
}

cleanBtn.addEventListener("click", function() {
    
        lengthResult.innerHTML = ""
        volumeesult.innerHTML = ""
        massResult.innerHTML = ""
        inputEl.textContent = ""    
})
