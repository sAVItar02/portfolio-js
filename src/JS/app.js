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

const about = `
  <div class="about-container">
    <div class="about-img flex-center">
      <img src="./../../public/assets/about-img.jfif" alt="About Image"/>
    </div>
    <div class="about-focus">
      <p class="fw-bold">Hi, I'm Aviral 😄</p>
      <p>I'm a 20-year-old undergrad student in CSE and a Web Developer living in <a href="https://en.wikipedia.org/wiki/Bangalore">Bengaluru</a></p>
      <p>I enjoy building pages that live on the web, my interest in web development started back in 2019 when i took a <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">Web Development Bootcamp</a> out of curiosity and ended up learning a lot about the web.</p>
      <p>Today, after having the opportunity to intern and learn at  <a href="https://www.linkedin.com/company/ultrainstinct-ai/" target="_blank">UltraInstinct</a> and <a href="https://www.linkedin.com/company/ascendance-st/mycompany/" target="_blank">Ascendance</a>, my primary emphasis is on helping to create user-friendly websites at <a href="https://www.eurofins.in/eitsi/" target="_blank">Eurofins</a>.</p>
    </div>
    <div class="about-tech">
      <p class="fw-bold">Few technologies I've been working with recently: </p>
      <ul class="about-tech-list-1">
        <li>JavaScript (ES6+)</li>
        <li>Solidity</li>
        <li>ReactJS</li>
      </ul>
      <ul class="about-tech-list-2">
        <li>Web3</li>
        <li>TypeScript</li>
        <li>Node.js</li>
      </ul>
    </div>
    <hr>
    <div class="about-footer">
      <p>This site is created from the ground up utilising a unique framework that was lovingly created <a href="https://github.com/sAVItar02/portfolio-js" target="_blank">entirely in JavaScript</a>.</p>
    </div>
  </div>
`;

function openUrl(url) {
  window.open(url);
}

function openContact() {
  createWindow("Contact", contact, "Contact", 65, 40, 5);
  // centerWindow("Contact");

  document.getElementById("contact-form-button").onclick = function (e) {
    e.preventDefault();
  };
}

function openAbout() {
  createWindow("About", about, "About", 60, 45, 5);
  centerWindow("About");
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("About", openAbout);
  appendMenuElement("Resume", logDummy);
  appendMenuElement("Credits", logDummy);
  getBattery();
  getTime24();

  openAbout();

  setInterval(function () {
    updateTime();
  }, 1000);

  window.onmouseup = function (e) {
    windowToDrag = null;
  };

  window.onmousemove = function (e) {
    handleDrag(e, windowToDrag);
  };

  createWindow("About", "sjkfsdkjfhsdjkf", "About", 20, 30, 5);

  createDesktopApp(
    "github",
    "./../public/assets/github-icon.png",
    "GitHub",
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
