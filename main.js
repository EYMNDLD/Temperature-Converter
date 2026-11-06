const inp1 = document.getElementById("celsius_to_fahrenheit_inp");
const inp2 = document.getElementById("fahrenheit_to_celsius_inp");
const button1 = document.getElementById("button_convert1");
const button2 = document.getElementById("button_convert2");



function convert_to_Fahrenheit(){
  let Celsius = Number(inp1.value); 
  let Fahrenheit = (Celsius * 1.8) + 32;
  window.alert(`${Celsius}°C is equal to ${Fahrenheit.toFixed(2)}°F`);
}

function convert_to_Celsius(){

  let Fahrenheit = Number(inp2.value);
  let Celsius = ((Fahrenheit - 32) * 5) / 9;
  window.alert(`${Fahrenheit}°F is equal to ${Celsius.toFixed(2)}°C`);
}


button1.addEventListener("click", convert_to_Fahrenheit);
button2.addEventListener("click", convert_to_Celsius);