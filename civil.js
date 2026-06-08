document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "l9DvAhL18EdMfHAxv"
  });

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    console.log("Form Submitted");

    let valid = true;

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const project = document.getElementById("projectType");
    const message = document.getElementById("message");

    const fields = [
      name,
      phone,
      email,
      project,
      message
    ];

    fields.forEach(field => {

      field.classList.remove("input-error");

      if (field.nextElementSibling) {
        field.nextElementSibling.textContent = "";
      }

    });

    fields.forEach(field => {

      if (field.value.trim() === "") {

        field.classList.add("input-error");

        if (field.nextElementSibling) {
          field.nextElementSibling.textContent =
            "This field cannot be empty";
        }

        valid = false;
      }

    });

    if (
      phone.value.trim() !== "" &&
      !/^\d{10}$/.test(phone.value.trim())
    ) {

      phone.classList.add("input-error");

      phone.nextElementSibling.textContent =
        "Phone number must be 10 digits";

      valid = false;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      email.value.trim() !== "" &&
      !emailPattern.test(email.value.trim())
    ) {

      email.classList.add("input-error");

      email.nextElementSibling.textContent =
        "Enter valid email address";

      valid = false;
    }

    if (!valid) {
    
    }

    console.log("Before EmailJS");

    emailjs.send(
      "service_am9izcf",
      "template_zr48iuu",
      {
        name: name.value,
        phone: phone.value,
        email: email.value,
        projectType: project.value,
        message: message.value
      }
    )

   .then(function () {
  console.log("EMAIL SUCCESS");

  document.getElementById("successMessage").textContent =
    "Successfully Submitted!";

  form.reset();

  setTimeout(function () {
    document.getElementById("successMessage").textContent = "";
  }, 4000);
})

    .catch(function (error) {
console.log("EMAIL FAILED", error);
      console.log(error);

      successMessage.textContent =
        "Failed to send message.";

      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";

    });

  });

});