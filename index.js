<<<<<<< HEAD
function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function(res) {
        console.log(res.message);
        document.querySelector("#dog-image").src = res.message;
    })
}


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
/*document.addEventListener("DOMContentLoaded", function() {
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
}); */

=======
function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function(res) {
        console.log(res.message);
        document.querySelector("#dog-image").src = res.message;
    })
}


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
/*document.addEventListener("DOMContentLoaded", function() {
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
}); */

>>>>>>> 8accb4e6a5c6687a272b7739e25f39aca238a4fa
