function addRecommendation() {
  const container = document.getElementById("recommendations");
  const text = document.getElementById("new_recommendation").value;

  if (text.trim() !== "") {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerHTML = `<p>${text}</p>`;
    container.appendChild(newRec);

    document.getElementById("new_recommendation").value = "";

    // ✅ Add this line to show popup
    showPopup(true);
  } else {
    alert("Please enter a recommendation before submitting.");
  }
}
function showPopup(value) {
  if (value) {
    document.getElementById("popup").style.display = "block";
    setTimeout(function () {
      document.getElementById("popup").style.display = "none";
    }, 3000); // show for 3 seconds
  }
}

