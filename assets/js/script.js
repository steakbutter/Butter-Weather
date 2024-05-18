// This is the API key created by open weather API
const APIKey = "34b0949fb0fbf965fbefa03f231d3872";

// I want to get user input from the search city bar
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const cityName = document.getElementById('cityName');
    const userSearch = cityName.value;

    let searchHistory = JSON.parse(localStorage.getItem('city'));
    if (!searchHistory) {
        searchHistory = []
    }
    searchHistory.push(userSearch)
    localStorage.setItem('city', JSON.stringify(searchHistory));
    let cities = cityName.value
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${APIKey}`;

    fetch(queryUrl, {
        method: 'GET',

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.main.temp);
            console.log(data.wind.speed);
            console.log(data.main.humidity);
            //displayed all the information I need in the console log.
        });

        const cityContainer = document.querySelector('.cities');

        const wrapper = document.createElement('div')
        const cityN = document.createElement('p')
        // Add text content to the new element created above
        cityN.textContent = cities;
        // add styling to the new element
        wrapper.classList.add("wrapperClass");
        cityN.classList.add("cityClass");
        //Append new element to wrapper
        wrapper.appendChild(cityN);
        //Add new wrapper to the DOM
        cityContainer.append(wrapper);
})
// Need to get info fetched displayed to HTML

