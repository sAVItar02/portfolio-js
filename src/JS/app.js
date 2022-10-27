/*
    ? Aviral Singh Chauhan, 10/2022
*/
document.getElementById("root").onclick = function (e) {
  hideMenu();
};

const contact = `
  <div class="contact-info">
    <h4>You can reach me on: </h4>
    <ul class="contact-list">
      <li>Email: <a href="mailto:blr.aviral@gmail.com">blr.aviral@gmail.com</a></li>
      <li>Phone: <a href="tel:+919591722997">+91 9591722997</a></li>
      <li>Social: <a href="https://www.linkedin.com/in/aviral-s-79955a119/" target="_blank">LinkedIn</a></li>
    </ul>
  </div>

  <br/>
  <hr>
  <br/>

  <div class="contact-form">
    <p>Or Send me a message and I'll try to get back to you ASAP!</p>
    <form>
      <div class="form-group">
        <label for="name-input">Name*</label>
        <input type="text" required id="name-input">
      </div>
      <div class="form-group">
        <label for="email-input">Email*</label>
        <input type="email" required id="email-input">
      </div>
      <div class="form-group">
        <label for="message-input">Message*</label>
        <textarea id="message-input" rows="6" required></textarea>
      </div>
      <button type="submit" class="primary-button" id="contact-form-button">Submit</button>
    </form>
  </div>
`;

function openUrl(url) {
  window.open(url);
}

function openContact() {
  createWindow("Contact", contact, "Contact", 65, 40, 5);
  centerWindow("Contact");

  document.getElementById("contact-form-button").onclick = function (e) {
    e.preventDefault();
    console.log("object");
  };
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("About", logDummy);
  appendMenuElement("Resume", logDummy);
  appendMenuElement("Credits", logDummy);
  getBattery();
  getTime24();

  setInterval(function () {
    updateTime();
  }, 1000);

  window.onmouseup = function (e) {
    windowToDrag = null;
  };

  window.onmousemove = function (e) {
    handleDrag(e, windowToDrag);
  };

  createDesktopApp(
    "github",
    "./../public/assets/github-icon.png",
    "Github",
    120,
    120,
    function () {
      return openUrl("https://github.com/sAVItar02");
    }
  );

  createDesktopApp(
    "resume",
    "./../public/assets/resume-icon.png",
    "Resume",
    120,
    120,
    function () {
      return openUrl(
        "https://drive.google.com/file/d/10F4z3GeF8h1Jh1eHkQmMvvVpSisNMKRf/view?usp=sharing"
      );
    }
  );

  createDesktopApp(
    "contact",
    "./../public/assets/contact-icon.png",
    "Contact",
    120,
    120,
    openContact
  );

  createDesktopApp(
    "projects",
    "./../public/assets/projects-icon.png",
    "Projects",
    120,
    120,
    logDummy
  );
};
