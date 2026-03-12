async function fetchData(cityname){
    try {
        const cityName = cityname || document.getElementById("cityName").value.toLowerCase();
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=....&units=metric`);

        if(!response.ok){
            throw new Error("place not found");
        }
        const data = await response.json();
        const temperature = data.main.temp;
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.textContent = `Temperature at ${cityName}: ${Math.round(temperature)}°C`;
        temperatureElement.style.display = "block"; 
    }
    catch(error){
        console.error(error);
        document.getElementById("temperature").textContent =
        "Error fetching data. Please try again.";
    }
}

