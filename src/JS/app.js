/*
    ? Aviral Singh Chauhan, 10/2022
*/
document.getElementById("root").onclick = function (e) {
  hideMenu();
  hideContextMenu();
};

const contact = `
  <div class="contact-info">
    <h4>You can reach me on: </h4>
    <ul class="contact-list">
      <li>Email: <a href="mailto:blr.aviral@gmail.com">blr.aviral@gmail.com</a></li>
      <li>Social: <a href="https://www.linkedin.com/in/aviral-s-79955a119/" target="_blank">LinkedIn</a>, <a href="https://github.com/sAVItar02">Github</a></li>
    </ul>
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
      <p>I'm a 21-year-old Web Developer living in <a href="https://en.wikipedia.org/wiki/Bangalore">Bengaluru</a></p>
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
      <li class="list-item">Main Background (Landscape Gif) : <a target="_blank" href="https://in.pinterest.com/pin/667166132311196309/">@anasabdin</a></li>
      <li class="list-item">Japanese City Background Gif : <a target="_blank" href="https://in.pinterest.com/pin/726768458635723246/">@Retronator</a></li>
      <li class="list-item">Night City Background Gif : <a target="_blank" href="https://in.pinterest.com/pin/726768458635317793/">@Aliciel</a></li>
      <li class="list-item">Factory Background Gif : <a target="_blank" href="https://in.pinterest.com/pin/726768458635723269/">@A Cidade Branca</a></li>
      <li class="list-item">Hourglass Loader Gif : <a target="_blank" href="https://giphy.com/stickers/transparent-aYKTYtCYb2ECSKfyal">@paperpixelco</a></li>
      <li class="list-item">About Image : <a target="_blank" href="https://in.pinterest.com/pin/366621225903655441/">@leeoccleshaw</a></li>
      <li class="list-item">Github Icon : <a target="_blank" href="http://pixelartmaker.com/art/d7e4e1e509c728d">Pixel Art Maker</a></li>
      <li class="list-item">Settings Icon : <a target="_blank" href="http://pixelartmaker.com/art/ac6c0486a959d41">Pixel Art Maker</a></li>
      <li class="list-item">Cookie Image : <a target="_blank" href="http://pixelartmaker.com/art/8d93c7834a63bf9">Pixel Art Maker</a></li>
      <li class="list-item">Font : <a target="_blank" href="https://github.com/blobject/agave">Agave</a></li>
      <li class="list-item">Battery Icon : <a target="_blank" href="https://fontawesome.com/search?q=battery&o=r">Fontawesome</a></li>
      <li class="list-item">Design Credits : <a target="_blank" href="https://jewelcodes.io/">@jewelcodes</a></li>
    </ul>
  </div>
`;

const noticeText = `<img class="notice-img" src="./../../public/assets/cookie.png" alt="cookie image"/> <div>This website uses cookies to deliver the best possible experience, by changing any settings you consent to using cookies.</div>`;

function openUrl(url) {
  window.open(url);
}

function openContact() {
  createWindow("Contact", contact, "Contact", 25, 40, 5);
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

function openResume() {
  createWindow("Resume", "", "Resume", 80, 50, 5);
  createIFrame(
    "ResumeFrame",
    "Resume",
    "https://drive.google.com/file/d/10F4z3GeF8h1Jh1eHkQmMvvVpSisNMKRf/preview",
    "100%",
    "100%"
  );
  centerWindow("Resume");
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("menu", "About", openAbout);
  appendMenuElement("menu", "Resume", openResume);
  appendMenuElement("menu", "Settings", openSettings);
  appendMenuElement("menu", "Credits", openCredits);
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

  document.body.oncontextmenu = function (e) {
    hideMenu();
    if (e.srcElement.id != "root") return;
    e.preventDefault();
    openContextMenu(e, 195, 200);
    appendMenuElement("context-menu", "Refresh", function () {
      window.location.reload();
    });
    appendMenuElement("context-menu", "About", openAbout);
    appendMenuElement("context-menu", "Resume", openResume);
    appendMenuElement("context-menu", "Contact", openContact);
    appendMenuElement("context-menu", "Settings", openSettings);

    document
      .getElementById("context-menu")
      .addEventListener("click", function (e) {
        hideContextMenu();
        hideMenu();
      });
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
    openResume
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
