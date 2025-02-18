const destinations = ["Paris", "New York", "Tokyo", "Bali", "Sydney", "London", "Rome", "Dubai"];

function searchDestinations() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    
    let filtered = destinations.filter(place => place.toLowerCase().includes(input));

    if (filtered.length > 0) {
        filtered.forEach(place => {
            let p = document.createElement("p");
            p.textContent = place;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    }
}

function clearSearch() {
    document.getElementById("searchBox").value = "";
    document.getElementById("results").innerHTML = "";
}

document.getElementById("bookNow").addEventListener("click", function() {
    alert("Redirecting to booking page...");
});
