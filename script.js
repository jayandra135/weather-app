const myfunction = () => {
  let inputCity = $("#weather").val();
  fetch(
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
      inputCity +
      "&days=3",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e6ed3bd467msh46439c25fc78697p194dbajsn4f2d17e36e55",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      //console.log(response.location);
      console.log(response.current);
      document.getElementById("city-name").innerHTML = response.location.name;
      document.getElementById("temp-celsius").innerHTML = response.current.temp_c;
      document.getElementById("conditions").innerHTML = response.current.condition.text;
      document.getElementById("humidity").innerHTML = response.current.humidity;
	  document.getElementById("Feelslike").innerHTML = response.current.feelslike_c;

      let icon = "http:" + response.current.condition.icon;
      $("#wicon").attr("src", icon);
    })
    .catch((err) => {
      //console.error(err);
	  alert("enter proper name eg: London")
    });
};
