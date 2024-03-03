//import Papa from 'papaparse';

const map = L.map('map').setView([38, -101.2996], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function switchMap(name)
    L.setView([38, -101.2996], 4);


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

