function submitEmail() {
    let userEmail = document.getElementById("emailInput").value;
} 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const totalResponses = document.getElementById("totalResponses");
    const booleanCount = document.getElementById("booleanCount");
    let responses = JSON.parse(localStorage.getItem("responses")) || [];
    function updateSummary() {
        let total = responses.length;
        let booleanResponses = responses.filter(r => r.recommend === "true").length; // Fixed
        totalResponses.textContent = total;
        booleanCount.textContent = booleanResponses;
    }
    updateSummary();
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const recommend = document.querySelector('input[name="recommend"]:checked')?.value;
        const nameRegex = /^[A-Za-z\s-]+$/;
        if (!name.match(nameRegex)) {
            alert("Please enter a valid name using only letters, spaces, or hyphens.");
            return;
        }
        responses.push({ name, recommend });
        localStorage.setItem("responses", JSON.stringify(responses));
        updateSummary();
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
    }
  }
