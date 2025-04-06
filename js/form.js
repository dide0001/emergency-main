
document.querySelector("#yourName").addEventListener("input", function() {
    document.querySelector("#name-summary").textContent = this.value || "Dit navn";
  });

  document.querySelector("#yourEmail").addEventListener("input", function() {
    document.querySelector("#email-summary").textContent = this.value || "Din email";
  });
  
  document.querySelector("#yourPhone").addEventListener("input", function() {
    document.querySelector("#phone-summary").textContent = this.value || "Dit nummer";
  });

  document.querySelector("#yourCountryCode").addEventListener("input", function() {
    document.querySelector("#country-code-summary").textContent = this.value || "Din landekode";
  });

  document.querySelector("#yourFile").addEventListener("input", function() {
    document.querySelector("#file-summary").textContent = this.value || "Din landekode";
  });

  document.querySelector(".submit-btn").addEventListener("click", function(e) {
    e.preventDefault(); // Forhindrer standard formularindsendelse
    
    // Trigger manuel opdatering af alle felter
    document.querySelector("#yourName").dispatchEvent(new Event('input'));
    document.querySelector("#yourEmail").dispatchEvent(new Event('input'));
    document.querySelector("#yourPhone").dispatchEvent(new Event('input'));
    document.querySelector("#yourCountryCode").dispatchEvent(new Event('input'));
    document.querySelector("#yourFile").dispatchEvent(new Event('input'));
    
    // Valgfri bekræftelse
    console.log("Opsummering opdateret ved tryk på Indsend");
  });
  

  
