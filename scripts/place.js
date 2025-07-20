
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


// value static
const temperature = 29; // °C
const windSpeed = 6;  // km/h

// wind chill
function calculateWindChill(tempC, speedKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)).toFixed(1);
}

const windChillElement = document.getElementById('windChill');

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill} °C`;
} else {
  windChillElement.textContent = "N/A";
}