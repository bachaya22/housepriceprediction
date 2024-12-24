function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    if (!sqft || !bhk || !bathrooms || !location) {
        alert("Please fill out all fields.");
        return;
    }

    var url = "http://127.0.0.1:5000/predict_home_price";

    // Send JSON data with appropriate Content-Type
    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            total_sqft: parseFloat(sqft),
            bhk: bhk,
            bath: bathrooms,
            location: location
        }),
        success: function(data) {
            console.log("API response:", data);
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + "</h2>";
        },
        error: function(error) {
            console.error("API error:", error);
            alert("Something went wrong! Check the console for details.");
        }
    });
}


//   function onClickedEstimatePrice() {
//     console.log("Estimate price button clicked");
//     var sqft = document.getElementById("uiSqft");
//     var bhk = getBHKValue();
//     var bathrooms = getBathValue();
//     var location = document.getElementById("uiLocations");
//     var estPrice = document.getElementById("uiEstimatedPrice");
  
//     var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
//     // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
//     $.post(url, {
//         total_sqft: parseFloat(sqft.value),
//         bhk: bhk,
//         bath: bathrooms,
//         location: location.value
//     },function(data, status) {
//         console.log(data.estimated_price);
//         estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
//         console.log(status);
//     });
//   }
  
  function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
  }
  
  window.onload = onPageLoad;