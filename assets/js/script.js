const APIKey = "34b0949fb0fbf965fbefa03f231d3872";

let city;
const queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

fetch(queryUrl)