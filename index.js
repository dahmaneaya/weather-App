
const apiKey = 'e0b01cd856fd09a8702cc45029623640';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('#mybtn input');
const searchBtn = document.querySelector('#mybtn button');


async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === 200) { 
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp);
        document.querySelector("#description").innerHTML = data.weather[0].description;
        document.querySelector("#clouds").innerHTML = data.clouds.all;
        document.querySelector("#Humidity").innerHTML = data.main.humidity;
        document.querySelector("#Pressure").innerHTML = data.main.pressure;

        
        const iconCode = data.weather[0].icon;
        document.querySelector("#temperature img").src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    } else {
        alert("City not found!");
    }
   
    switch (data.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('imges/elena-mozhvilo-ppl2T4fKRRw-unsplash.jpg')";
            break;
    
            case 'Rain':
            document.body.style.backgroundImage = "url('imges/tra-nguyen-5VD8vTAN0GE-unsplash.jpg')";
            break;

            case 'Snow':
                document.body.style.backgroundImage = "url('imges/mike-kotsch-9wTWFyInJ4Y-unsplash.jpg')";
                break;
                case 'Clouds':
                    document.body.style.backgroundImage = "url('imges/jason-leung-neu_ObiyyMg-unsplash.jpg')";
                    break;

                    case 'Mist':
                        document.body.style.backgroundImage = "url('imges/noaa-zdj3p00Rep0-unsplash.jpg')";
                        break;

                        case 'Haze':
                            document.body.style.backgroundImage = "url('imges/maksym-kaharlytskyi-cBzgqTtNb3A-unsplash.jpg')";
                            break;

                            case 'Overcast':
                            document.body.style.backgroundImage = "url('imges/fabian-kleiser-60oYUSeivmc-unsplash.jpg')";
                            break;

                  default:
            document.body.style.backgroundImage = "url('imges/erik-ringsmuth-TvOAK1FGx58-unsplash.jpg')";

            break;
    }

}



         





searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const city = searchBox.value;
    checkWeather(city);
});

