window.onload = function () {
    if (window.innerHeight > 1080 || window.innerWidth > 1920) {
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
};

function handleResponse(response) {
    console.log("User response:", response);
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
