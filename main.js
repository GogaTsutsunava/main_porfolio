
function openNav() {
  document.querySelector(".hamburgerMenu").style.width = "250px";
}
function closeNav() {
  document.querySelector(".hamburgerMenu").style.width = "0";
 
}

////////////to send email
document
  .getElementById("sendEmailButton")
  .addEventListener("click", function () {
    sendEmail();
  });

function sendEmail() {
  // Replace the following values with your own email configuration
  const toEmail = "goga.tsutsunava@gmail.com";
  const subject = "Hello, this is the subject";
  const body = "This is the email body.";

  // Construct the mailto URL
  const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the user's default email client
  window.location.href = mailtoUrl;
}
const textElement = document.getElementById("text");
const text = "Hi, I am Goga Tsutsunava";
let index = 0;

function displayNextLetter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(displayNextLetter, 100); // Adjust the time interval for the animation speed
  }
}

displayNextLetter();
