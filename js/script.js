function get_report (location) {
	var JSONdata;
	var request_string = "https://api.openweathermap.org/data/2.5/weather?q="+location
	+"&units=metric&APPID=8553cbf41e559f3ffdfa68eafb8a08f9"
	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      JSONdata=this.responseText;
      console.log(JSONdata);
      var json_obj = JSON.parse(JSONdata);
      var tile1 = document.getElementById('display_tile_1');
      var tile2 = document.getElementById('display_tile_2');
      var tile3 = document.getElementById('display_tile_3');
      var tile4 = document.getElementById('display_tile_4');
      tile1.style.display="inline";
      tile2.style.display="inline";
      tile3.style.display="inline";
      tile4.style.display="inline";
      tile1.textContent  = "temperature : " + json_obj.main.temp + " °C";
      tile2.textContent = "min : " + json_obj.main.temp_min+ " °C"+"   max : " +json_obj.main.temp_max+ " °C"
      tile3.textContent = json_obj.weather[0].main+" : "+json_obj.weather[0].description;
	  tile4.textContent = "lon : " +json_obj.coord.lon + " , lat : " +json_obj.coord.lat;

    }
  };

  xhttp.open("GET",request_string, true);
  xhttp.send();
}

