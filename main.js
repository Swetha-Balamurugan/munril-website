console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "l9DvAhL18EdMfHAxv"
  });

  const rootStyles = getComputedStyle(document.documentElement);

  const NAV_TRANSPARENT =
    rootStyles.getPropertyValue('--nav-transparent');

  const NAV_SOLID =
    rootStyles.getPropertyValue('--navbar-scroll-bg');

  const nav =
    document.querySelector(".custom-nav");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      nav.style.background = NAV_SOLID;
    }
    else {
      nav.style.background = NAV_TRANSPARENT;
    }

  });

  const submitBtn =
    document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (e) {
console.log("Button Clicked");
    e.preventDefault();

    let valid = true;

    const name =
      document.getElementById("name");

     const phone =
        document.getElementById("phone");

    const email =
      document.getElementById("email");

    const project =
      document.getElementById("projectType");

    const message =
      document.getElementById("message");

    const successMessage =
      document.getElementById("successMessage");

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

    successMessage.textContent = "";

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
        "Enter valid 10 digit number";

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
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
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
      successMessage.textContent =
        "Successfully Submitted!";

      document
        .getElementById("contactForm")
        .reset();

      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";

      setTimeout(function () {

        successMessage.textContent = "";

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