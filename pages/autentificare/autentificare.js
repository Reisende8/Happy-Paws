window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Anuleaza actiunea default a eventului
    event.preventDefault();
    document.getElementById("AutentificareBtn").click(autentificare());
  }
});
