function get_report (location) {
	var JSONdata;
	var request_string = "http://api.openweathermap.org/data/2.5/weather?q="+location
	+"&units=metric&APPID=8553cbf41e559f3ffdfa68eafb8a08f9"
	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      JSONdata=this.responseText;
      console.log(JSONdata);
      var json_obj = JSON.parse(JSONdata)
      var display_element = document.getElementById('text_area_container');
      display_element.style.display = "flex";
      var display_data = "temperature = " + json_obj.main.temp + " °C";
      console.log(display_data);
      document.getElementById('output_text_area').innerHTML = display_data;
    }
  };

  xhttp.open("GET",request_string, true);
  xhttp.send();
}

