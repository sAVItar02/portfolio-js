/*
    ? Aviral Singh Chauhan, 10/2022
*/

document.getElementById("root").onclick = function (e) {
  hideMenu();
  hideContextMenu();
};

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
  createWindow("Resume", downloadResume, "Resume", 80, 50, 5);
  createIFrame(
    "ResumeFrame",
    "Resume",
    "https://drive.google.com/file/d/16OrghCN_efV1czGBYGoBVSdjiJbzOU4Z/preview",
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
