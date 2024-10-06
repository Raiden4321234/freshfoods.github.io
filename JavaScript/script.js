document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(
      "Form Submitted!\n" +
        "Name: " +
        fullName +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Address: " +
        address +
        "\n" +
        "Password: " +
        password +
        "\n" +
        "Confirmed Password: " +
        confirmPassword
    );
  });
