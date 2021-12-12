function temperature_convert() {
    if (document.temperature.celsius.value == "") {
        alert("La valeur en °C n'est pas renseigné !")
    }
    else {
        document.temperature.fahrenheit.value = (document.temperature.celsius.value * 9/5) + 32
    }
}