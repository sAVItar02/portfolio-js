/*
    ? Aviral Singh Chauhan, 10/2022
*/
document.getElementById("root").onclick = function (e) {
  hideMenu();
};

// {
//   <div class="contact-form">
//     <p>Or Send me a message and I'll try to get back to you ASAP!</p>
//     <form>
//       <div class="form-group">
//         <label for="name-input">Name*</label>
//         <input type="text" required id="name-input">
//       </div>
//       <div class="form-group">
//         <label for="email-input">Email*</label>
//         <input type="email" required id="email-input">
//       </div>
//       <div class="form-group">
//         <label for="message-input">Message*</label>
//         <textarea id="message-input" rows="6" required></textarea>
//       </div>
//       <button type="submit" class="primary-button" id="contact-form-button">Submit</button>
//     </form>
//   </div>
// }

const contact = `
  <div class="contact-info">
    <h4>You can reach me on: </h4>
    <ul class="contact-list">
      <li>Email: <a href="mailto:blr.aviral@gmail.com">blr.aviral@gmail.com</a></li>
      <li>Social: <a href="https://www.linkedin.com/in/aviral-s-79955a119/" target="_blank">LinkedIn</a>, <a href="https://github.com/sAVItar02">Github</a></li>
    </ul>
  </div>
  <hr style="margin-top: 10px;">
  <div class="contact-form">
    <p>Or Send me a message and I'll try to get back to you ASAP!</p>
    <form name="contact" method="POST" data-netlify="true" onsubmit="handleSubmit">
      <input type="hidden" name="contact" value="contact" />
      <div class="form-group">
        <label for="name-input">Name*</label>
        <input type="text" required id="name">
      </div>
      <div class="form-group">
        <label for="email-input">Email*</label>
        <input type="email" required id="email">
      </div>
      <div class="form-group">
        <label for="message-input">Message*</label>
        <textarea id="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="primary-button" id="contact-form-button">Submit</button>
    </form>
  </div>

  <br/>
  <hr>
  <br/>
`;

const about = `
  <div class="about-container">
    <div class="about-img flex-center">
      <img src="./../../public/assets/about-img.jfif" alt="About Image"/>
    </div>
    <div class="about-focus">
      <p class="fw-bold">Hi, I'm Aviral 😄</p>
      <p>I'm a 20-year-old undergrad student in CSE and a Web Developer living in <a href="https://en.wikipedia.org/wiki/Bangalore">Bengaluru</a></p>
      <p>I enjoy building pages that live on the web, my interest in web development started back in 2019 when i took a <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">Web Development Course</a> out of curiosity and ended up learning a lot about the web.</p>
      <p>Today, after having the opportunity to intern and learn at  <a href="https://www.linkedin.com/company/ultrainstinct-ai/" target="_blank">UltraInstinct</a>, <a href="https://www.linkedin.com/company/ascendance-st/mycompany/" target="_blank">Ascendance</a> and <a href="https://www.eurofins.in/eitsi/" target="_blank">Eurofins</a>, My primary focus is working on Intelligent Automation, chatbots and AI at <a href="https://www.linkedin.com/company/pwc-india/">PwC</a> </p>
    </div>
    <hr>
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

const credits = `
  <div class="banner-buffer">
    <div class="banner-img"></div>
  </div>
  <div class="credits-container">
    <ul class="list">
      <li class="list-item">Main Background (Landscape Gif) : <a href="https://in.pinterest.com/pin/667166132311196309/">@anasabdin</a></li>
      <li class="list-item">Japanese City Background Gif : <a href="https://in.pinterest.com/pin/726768458635723246/">@Retronator</a></li>
      <li class="list-item">Night City Background Gif : <a href="https://in.pinterest.com/pin/726768458635317793/">@Aliciel</a></li>
      <li class="list-item">Factory Background Gif : <a href="https://in.pinterest.com/pin/726768458635723269/">@A Cidade Branca</a></li>
      <li class="list-item">About Image : <a href="https://in.pinterest.com/pin/366621225903655441/">@leeoccleshaw</a></li>
      <li class="list-item">Github Icon : <a href="http://pixelartmaker.com/art/d7e4e1e509c728d">Pixel Art Maker</a></li>
      <li class="list-item">Settings Icon : <a href="http://pixelartmaker.com/art/ac6c0486a959d41">Pixel Art Maker</a></li>
      <li class="list-item">Cookie Image : <a href="http://pixelartmaker.com/art/8d93c7834a63bf9">Pixel Art Maker</a></li>
      <li class="list-item">Font : <a href="https://github.com/blobject/agave">Agave</a></li>
      <li class="list-item">Battery Icon : <a href="https://fontawesome.com/search?q=battery&o=r">Fontawesome</a></li>
      <li class="list-item">Design Credits : <a href="https://jewelcodes.io/">@jewelcodes</a></li>
    </ul>
  </div>
`;

const noticeText = `<img class="notice-img" src="./../../public/assets/cookie.png" alt="cookie image"/> <div>This website uses cookies to deliver the best possible experience, by changing any settings you consent to using cookies.</div>`;

function openUrl(url) {
  window.open(url);
}

function openContact() {
  createWindow("Contact", contact, "Contact", 64, 40, 5);
  // centerWindow("Contact");

  document.getElementById("contact-form-button").onclick = function (e) {
    e.preventDefault();
    // const myForm = e.target;
    const formData = new FormData();
    formData.append("name", document.querySelector("#name").value);
    formData.append("email", document.querySelector("#email").value);
    formData.append("message", document.querySelector("#message").value);
    // console.log(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   const formData = new FormData(myForm);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => navigate("/thank-you/"))
  //     .catch((error) => alert(error));
  // };
}

function openAbout() {
  createWindow("About", about, "About", 60, 45, 5);
  centerWindow("About");
}

function openProjects() {
  createWindow("Projects", "", "Projects", 80, 60, 5);
  centerWindow("Projects");

  createCard(
    "Projects",
    "./../public/assets/projects-imgs/yourStore.png",
    "YourStore",
    "YourStore is a local e-commerce store to help local shops repair their losses. The Online Grocery System application enables shopkeepers to set up online shops; customers to browse through the shops, and maintain lists of shop categories. The website enables shopkeepers to manage the items in the shop and help customers purchase them online without visiting the shop physically. ",
    [
      "https://github.com/sAVItar02/YourStore-Frontend",
      "https://savitar02.github.io/YourStore-Frontend/home",
    ],
    ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB"]
  );
  createCard(
    "Projects",
    "./../public/assets/projects-imgs/Ukiyo.png",
    "Ukiyo",
    "Ukiyo is a discord bot for weebs! ukiyo lets users to recommend/suggest anime to other users add anime to watch, watched, planning and recommended lists, allows users to browse upcoming, ongoing, trending anime. ukiyo also allows users to browse specific anime and even set reminders for the new episodes of ongoing anime!",
    [
      "https://github.com/sAVItar02/Ukiyo",
      "https://discord.com/oauth2/authorize?client_id=780383801393938442&scope=bot&permissions=8",
    ],
    ["JS", "Discord.js", "Node.js", "Express.js", "MongoDB"]
  );
  createCard(
    "Projects",
    "./../public/assets/projects-imgs/flights.png",
    "Flights",
    "The main idea of the project is building a Flight Booking System that is a computerized system used to store  retrieve information and conduction transactions related to air travel by the use of an extensive database",
    [
      "https://github.com/sAVItar02/Flights",
      "https://savitar02.github.io/Flights/startup.html",
    ],
    ["HTMl", "CSS", "JS", "JQuery", "Node.js", "MongoDB"]
  );
}

function openSettings() {
  createWindow("Settings", "", "Settings", 60, 50, 5);
  createSettings(
    "Settings",
    [
      ["./../../public/assets/wallpapers/landscape.gif", "landscape"],
      ["./../../public/assets/wallpapers/retronator.gif", "retronator"],
      ["./../../public/assets/wallpapers/nightBridge.gif", "nightBridge"],
      ["./../../public/assets/wallpapers/factory.gif", "factory"],
    ],
    noticeText
  );
}

function openCredits() {
  createWindow("Credits", credits, "Credits", 50, 30, 5);
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("About", openAbout);
  appendMenuElement("Resume", function () {
    return openUrl(
      "https://drive.google.com/file/d/10F4z3GeF8h1Jh1eHkQmMvvVpSisNMKRf/view?usp=sharing"
    );
  });
  appendMenuElement("Settings", openSettings);
  appendMenuElement("Credits", openCredits);
  getBattery();
  getTime24();

  if (getCookie("wallpaper") != null) {
    changeWallpaper(getCookie("wallpaper"));
  }

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
    openProjects
  );
  createDesktopApp(
    "settings",
    "./../public/assets/settings-icon.png",
    "Settings",
    120,
    120,
    openSettings
  );
};
