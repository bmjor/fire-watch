//import Papa from 'papaparse';

const map = L.map('map').setView([38, -101.2996], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function switchMap(continent){
  if(continent == 1 ){
        L.setView([38, -101.2996], 4);
  }
  else if (continent == 2){
      L.setView([25, -534.342], 7)
  }
  else{
    L.setView([175, 755.2345], 12)
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
            radius: (parseInt((index["Discovery Acres"])+1)/100)
        }).addTo(map)
        .bindPopup(index["Fire Discovery Date Time"].concat("\n Acres affected: ", index["Discovery Acres"]))
        .openPopup();
            }
    console.log(numOfHumanRelated)
    //heatmap.render();

    // You can perform further processing with the data here
}

function getCoordinates(address){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+API_KEY)
      .then(response => response.json())
      .then(data => {
        const latitude = data.results.geometry.location.lat;
        const longitude = data.results.geometry.location.lng;
        console.log({latitude, longitude})
      })
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

