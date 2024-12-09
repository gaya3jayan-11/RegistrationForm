$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Collect form data
        const formData = {
            name: $("input[name='name']").val(),
            email: $("input[name='email']").val(),
            phone: $("input[name='phone']").val(),
            dob: $("input[type='date']").val(),
            gender: $("input[name='Gender']:checked").val(),
            country: $("select[name='Country']").val(),
            state: $("input[name='state']").val(),
            city: $("input[name='city']").val()
        };

        // Simple form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.dob || !formData.gender || formData.country === "Choose a country" || !formData.state || !formData.city) {
            alert("Please fill in all fields.");
            return;
        }

        // Send data to PHP
        $.post("submit.php", formData, function(response) {
            $("body").append("<div>" + response + "</div>");
        });
    });
});
