// This is the API key created by open weather API
const APIKey = "34b0949fb0fbf965fbefa03f231d3872";

// I want to get user input from the search city bar
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    const cityName = document.getElementById('cityName');
    const userSearch = {
        city: cityName.value
    };

    let searchHistory = JSON.parse(localStorage.getItem('city'));
    if (!searchHistory) {
        searchHistory = []
    }
    searchHistory.push(userSearch)
    localStorage.setItem('city', JSON.stringify(searchHistory));
})

// Create a variable to act as the container for searched cities
const cityContainer = document.querySelector('.cities');

// query data from the local storage
const cityData = localStorage.getItem('city');
if(!cityData) {
    cityData = [];
}

//Convert sotred data to an easier datatype
const cityArray = JSON.parse(cityData)

// Create a for loop to go through all the cities searched
for (let i = 0; i < cityArray.length; i++) {
    const wrapper = document.createElement('div')
    const cityN = document.createElement('p')
    // Add text content to the new element created above
    cityN.textContent = cityArray[i].city
    // add styling to the new element
    wrapper.classList.add("wrapperClass");
    cityN.classList.add("cityClass");
    //Append new element to wrapper
    wrapper.appendChild(cityN);
    //Add new wrapper to the DOM
    cityContainer.append(wrapper);

}
// The city variable will have to be written by the user. We can retrieve it from local storage.
let city;

const queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

fetch(queryUrl)