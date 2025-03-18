function submitEmail() {
    let userEmail = document.getElementById("emailInput").value;
    // Here you can implement the logic to handle the user's email submission
} 


// Ensure script runs after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    
    // Get references to form and summary elements
    const form = document.getElementById("feedbackForm");
    const totalResponses = document.getElementById("totalResponses");
    const latestAge = document.getElementById("latestAge");
    const yesCount = document.getElementById("yesCount");
    const noCount = document.getElementById("noCount");

    // Load stored data when page loads
    let responses = JSON.parse(localStorage.getItem("responses")) || [];

    // Function to update the summary
    function updateSummary() {
        let total = responses.length;
        let lastAge = total ? responses[responses.length - 1].age : "N/A";
        let yesResponses = responses.filter(r => r.recommend === "yes").length;
        let noResponses = responses.filter(r => r.recommend === "no").length;

        totalResponses.textContent = total;
        latestAge.textContent = lastAge;
        yesCount.textContent = yesResponses;
        noCount.textContent = noResponses;
    }

    // Load summary on page load
    updateSummary();

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get input values
        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value);
        const recommend = document.querySelector('input[name="recommend"]:checked')?.value;

        // Validate name (letters, spaces, hyphens only)
        const nameRegex = /^[A-Za-z\s-]+$/;
        if (!name.match(nameRegex)) {
            alert("Please enter a valid name using only letters, spaces, or hyphens.");
            return;
        }

        // Validate age and recommendation
        if (isNaN(age) || age <= 0 || !recommend) {
            alert("Please enter a real age!");
            return;
        }

        // Store data in the responses array
        responses.push({ name, age, recommend });

        // Save to local storage
        localStorage.setItem("responses", JSON.stringify(responses));

        // Update the summary
        updateSummary();

        // Clear the form
        form.reset();
    });
});

  function validateEmail() {
    let userEmail = document.getElementById("emailInput").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      alert("Please enter a valid email address.");
    } else {
      alert("You are now subscribed and will get deals sent to your email!");
      // Here you can implement your further logic for valid email
    }
  }
