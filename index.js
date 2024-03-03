

//this is to let user know that button was submitted 
/*document.addEventListener("DOMContentLoaded", function() {
    // Get input and button elements
    const zipcodeInput = document.getElementById("zipcode-input");
    const submitButton = document.getElementById("submit-button");
    
    // Function to handle form submission
    function handleSubmit() {
        const zipcode = zipcodeInput.value;
        if (zipcode.trim() !== "") {
            alert("Zip code submitted: " + zipcode);
            // You can replace the alert with any other action you want to perform with the submitted zip code
        } else {
            alert("Please enter a valid zip code.");
        }
    }
    
    // Event listeners for submission
    submitButton.addEventListener("click", handleSubmit);
    zipcodeInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    });
}); */


//this is to bring user to location based on the zipcode
document.addEventListener("DOMContentLoaded", function() {
    // Get input and button elements
    const zipcodeInput = document.getElementById("zipcode-input");
    const submitButton = document.getElementById("submit-button");
    
    // Function to handle form submission
    function handleSubmit() {
        const zipcode = zipcodeInput.value;
        if (zipcode.trim() !== "") {
            // Redirect to the location page with zip code parameter
            window.location.href = "location-page.html?zipcode=" + encodeURIComponent(zipcode);
        } else {
            alert("Please enter a valid zip code.");
        }
    }
    
    // Event listeners for submission
    submitButton.addEventListener("click", handleSubmit);
    zipcodeInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    });
}); 




function handleCSVData(results) {
    // Log the parsed data to the console
    //var heatmap = new HeatCanvas("canvasId");
    const array = [];
    console.log(results.data);
    array.push(results.data[0]["x"]);
    array.push(results.data[0]["y"]);

    for (const index of results.data){
        L.circle([index["y"], index["x"]], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map)
        .bindPopup('')
        .openPopup();
            }
    //heatmap.render();

    // You can perform further processing with the data here
}

//import Papa from 'papaparse';

const map = L.map('map').setView([38, -101.2996], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function switchMap(continent) {
    if(continent == 1){
        L.setView([38, -101.2996], 4);
    }
    else if(continent == 2){
         L.setView([78, 788, 5])
    
    }
    else{
        L.setView([46, 255.234, 7])
    }   
}
    
   

    


function handleCSVData(results) {
    // Log the parsed data to the console
    //var heatmap = new HeatCanvas("canvasId");    
    let numOfHumanRelated = 0;
    for (const index of results.data){
        //console.log(index["Fire Discovery Date Time"])
        if(index["Cause" == "Human"]){
            numOfHumanRelated++;
        }
        L.circle([index["y"], index["x"]], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: (parseInt((index["Discovery Acres"])+1)/150)
        }).addTo(map)
        .bindPopup(index["Fire Discovery Date Time"].concat())
        .openPopup();
            }
    console.log(numOfHumanRelated)
    //heatmap.render();

    // You can perform further processing with the data here
}

async function getCoordinatesFromZipCode(zipCode) {
    try {
      // Use a reliable geocoding API (replace with your preferred API):
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zipCode}&key=YOUR_API_KEY`);
      const data = await response.json();
  
      if (data.results.length > 0) {
        const coordinates = data.results[0].geometry.coordinates;
        return {
          latitude: coordinates[1],
          longitude: coordinates[0]
        };
      } else {
        throw new Error("No coordinates found for the specified zip code");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      throw error; // Re-throw the error for handling elsewhere
    }
  }
  

  // Function to handle file input change
function handleFileInputChange(event) {
    const file = event.target.files[0];

    // Use Papa Parse to parse the CSV file
    Papa.parse(file, {
      complete: handleCSVData,
      header: true, // Set to true if your CSV file has a header row
    });

}

  // Attach an event listener to the file input element
document.getElementById('fileParser').addEventListener('change', handleFileInputChange);

function getuserLocation() {
    
}