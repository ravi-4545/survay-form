const surveyForm = document.getElementById("surveyForm");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (surveyForm.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value);
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const data = `
          <h1>Survay Form</h1>
          First Name: ${firstName}<br>
          Last Name: ${lastName}<br>
          Date of Birth: ${dob}<br>
          Country: ${country}<br>
          Gender: ${gender.join(", ")}<br>
          Profession: ${profession}<br>
          Email: ${email}<br>
          Mobile Number: ${mobile}<br>
        `;

        popupContent.innerHTML = data;
        popup.style.display = "block";
      }
    });

    resetBtn.addEventListener("click", function () {
      surveyForm.reset();
    });

    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
      surveyForm.reset();
    });