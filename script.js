document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const apiKey = document.getElementById("apiKey").value;
        const domainUrl = document.getElementById("domainUrl").value;

        // Redirect to rlinks.html with API key and domain name as query parameters
        window.location.href = `rlinks.html?apiKey=${encodeURIComponent(apiKey)}&domainUrl=${encodeURIComponent(domainUrl)}`;
    });
});
