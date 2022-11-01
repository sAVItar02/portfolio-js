/* 
    ? Aviral Singh Chauhan, 10/2022

    ./\,,/\.
    (=o_o=)
    """©""
    ( U U )~~*

         __
    .___(.)< (MEOW)
    \_____)
~~~~~~~~~~~~~~~~~~~~~~

*/

var windowCount = 0;
var windowToDrag = null;
var activeWindow = null;

/**
 *
 * @param {String} text Heading which is supposed to appear as the menu item text
 * @param {function} handler Handler fucntion which runs upon the menu item click
 */
function appendMenuElement(text, handler) {
  const menu = document.getElementById("menu");

  const menuItem = document.createElement("li");
  menuItem.classList.add("menu-item");
  menuItem.innerText = text;
  menuItem.onmouseover = function () {
    playHover();
  };
  menuItem.onclick = function () {
    toggleMenu();
    handler();
    playClick();
  };

  menu.appendChild(menuItem);
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menuButton");

  if (menu.style.display == "block") {
    menu.style.display = "none";
    menuButton.classList.remove("active");
  } else {
    menu.style.display = "block";
    menuButton.classList.add("active");
  }
}

function hideMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menuButton").classList.remove("active");
}

function setWindowActive(id) {
  document.querySelectorAll(".window").forEach((w) => {
    if (w.id == id) {
      if (activeWindow != w) {
        w.style.zIndex = parseInt(w.style.zIndex) + windowCount + 1;
      }
      document.getElementById(`${id}-button`).classList.add("active");
      activeWindow = document.getElementById(id);
    } else {
      w.style.zIndex = parseInt(w.style.zIndex) - windowCount - 1;
      document.getElementById(`${w.id}-button`).classList.remove("active");
      if (w.style.zIndex <= 5) w.style.zIndex = 5;
    }
  });
}

function showWindow(id, taskbarButton) {
  document.getElementById(id).style.visibility = "visible";
  taskbarButton.classList.add("active");
  setWindowActive(id);
}

function hideWindow(id, taskbarButton) {
  document.getElementById(id).style.visibility = "hidden";
  taskbarButton.classList.remove("active");
  setWindowActive(null);
}

function toggleWindow(id, taskbarButton) {
  if (
    document.getElementById(id).style.visibility == "visible" ||
    document.getElementById(id).style.visibility == ""
  ) {
    hideWindow(id, taskbarButton);
  } else {
    showWindow(id, taskbarButton);
  }
}

function destroyWindow(id, taskbarButton) {
  document.getElementById(id).remove();
  taskbarButton.remove();
  windowCount--;
}

function getRandomWindowPosition() {
  let xOriginMin = window.innerWidth - window.innerWidth * 0.85;
  let xOriginMax = window.innerWidth - window.innerWidth * 0.65;
  let yOriginMin = window.innerHeight - window.innerHeight * 0.85;
  let yOriginMax = window.innerHeight - window.innerHeight * 0.65;

  let randomX = Math.floor(
    Math.random() * (xOriginMax - xOriginMin) + xOriginMin
  );
  let randomY = Math.floor(
    Math.random() * (yOriginMax - yOriginMin) + yOriginMin
  );

  return [randomX, randomY];
}

function centerWindow(id) {
  let win = document.getElementById(id);

  let h = window.innerHeight / 2 - win.offsetHeight / 2;
  let w = window.innerWidth / 2 - win.offsetWidth / 2;

  win.style.top = h + "px";
  win.style.left = w + "px";
}

function makeAlert(id) {
  const w = document.getElementById(id);
  const taskbarButton = document.getElementById(`${id}-button`);

  const alertBody = document.createElement("div");
  alertBody.classList.add("alert-body");
  alertBody.classList.add("flex-center");

  const alertButton = document.createElement("button");
  alertButton.type = "button";
  alertButton.innerText = "OK";
  alertButton.classList.add("primary-button");

  alertButton.onclick = function (e) {
    e.stopImmediatePropagation();

    destroyWindow(id, taskbarButton);
    playClick();
  };

  alertBody.appendChild(alertButton);

  w.children[1].appendChild(alertBody);
}

function createCard(id, img, heading, desc, links, tags) {
  const card = document.createElement("div");
  card.classList.add("project-container");
  card.classList.add("flex-center");

  const imgBuffer = document.createElement("div");
  imgBuffer.classList.add("project-img-buffer");
  imgBuffer.classList.add("flex-center");

  const image = document.createElement("img");
  image.src = img;
  image.alt = "Project Image";

  imgBuffer.appendChild(image);

  const projectContent = document.createElement("div");
  projectContent.classList.add("project-content");

  const projectTagline = document.createElement("div");
  projectTagline.classList.add("project-tagline");
  projectTagline.classList.add("fw-bold");
  projectTagline.innerText = "Featured Project";

  const projectHeading = document.createElement("div");
  projectHeading.classList.add("project-heading");
  projectHeading.classList.add("fw-bold");
  projectHeading.innerText = heading;

  const projectDesc = document.createElement("div");
  projectDesc.classList.add("project-desc");
  projectDesc.innerText = desc;

  projectContent.appendChild(projectTagline);
  projectContent.appendChild(projectHeading);
  projectContent.appendChild(projectDesc);

  const projectBtnContainer = document.createElement("div");
  projectBtnContainer.classList.add("project-btn-container");

  const source = document.createElement("div");
  source.classList.add("source");

  projectContent.appendChild(projectBtnContainer);
  projectBtnContainer.appendChild(source);

  const githubButton = document.createElement("a");
  githubButton.type = "button";
  githubButton.classList.add("hyperlink");
  githubButton.href = links[0];
  githubButton.target = "_blank";

  const githubIcon = document.createElement("img");
  githubIcon.src = "./../public/assets/github-link-icon.png";

  githubButton.appendChild(githubIcon);

  source.appendChild(githubButton);

  if (links[1]) {
    const siteButton = document.createElement("a");
    siteButton.type = "button";
    siteButton.classList.add("hyperlink");
    siteButton.href = links[1];
    siteButton.target = "_blank";

    source.appendChild(siteButton);

    const siteIcon = document.createElement("img");
    siteIcon.src = "./../public/assets/hyperlink.png";

    siteButton.appendChild(siteIcon);
  }

  const projectTags = document.createElement("div");
  projectTags.classList.add("project-tags");

  tags.forEach((tag) => {
    const projectTag = document.createElement("div");
    projectTag.classList.add("tag");
    projectTag.innerText = tag;

    projectTags.appendChild(projectTag);
  });

  projectBtnContainer.appendChild(projectTags);

  card.appendChild(imgBuffer);
  card.appendChild(projectContent);

  document.getElementById(id).childNodes[1].appendChild(card);
  // console.log(typeof card);
}

function createTaskBar() {
  const taskbar = document.createElement("div");
  taskbar.id = "taskbar";

  const menuButton = document.createElement("button");
  menuButton.id = "menuButton";
  menuButton.type = "button";
  menuButton.innerText = "Menu";

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";

  const taskbarButtonsContainer = document.createElement("div");
  taskbarButtonsContainer.id = "taskbarButtonsContainer";

  const batteryTimeContainer = document.createElement("div");
  batteryTimeContainer.id = "batteryTimeContainer";

  buttonContainer.appendChild(menuButton);
  buttonContainer.appendChild(taskbarButtonsContainer);

  menuButton.onclick = function () {
    toggleMenu();
    playClick();
  };

  taskbar.appendChild(buttonContainer);
  taskbar.appendChild(batteryTimeContainer);

  const menu = document.createElement("ul");
  menu.id = "menu";

  document.body.appendChild(taskbar);
  document.body.appendChild(menu);
}

function createWindow(id, text, titleText, h, w, z = 1, imgs) {
  if (document.getElementById(id)) {
    showWindow(id, document.getElementById(`${id}-button`));
    return;
  }

  windowCount++;
  const currentWindowId = id;
  const win = document.createElement("div");
  win.id = currentWindowId;
  win.classList.add("window");
  win.style.height = h + "vh";
  win.style.width = w + "vw";
  win.style.zIndex = z;

  const wTitle = document.createElement("div");
  wTitle.classList.add("window-title");
  wTitle.classList.add("flex-center");
  wTitle.classList.add("fw-bold");
  wTitle.innerText = titleText;

  const wClose = document.createElement("img");
  wClose.classList.add("close-btn");
  wClose.src = "./../public/assets/xmark-solid.svg";
  wClose.alt = "Close button icon";

  const wBody = document.createElement("div");
  wBody.classList.add("window-body");

  const wTaskbarButton = document.createElement("button");
  wTaskbarButton.id = `${currentWindowId}-button`;
  wTaskbarButton.classList.add("taskbar-btn");
  wTaskbarButton.classList.add("primary-button");
  wTaskbarButton.innerText = titleText;

  wBody.innerHTML = text;

  wTitle.appendChild(wClose);
  win.appendChild(wTitle);
  win.appendChild(wBody);

  win.onclick = function (e) {
    e.stopImmediatePropagation();
    // setActiveWindow(win, wTaskbarButton);
    showWindow(currentWindowId, wTaskbarButton);
  };

  wClose.onclick = function (e) {
    e.stopImmediatePropagation();
    destroyWindow(currentWindowId, wTaskbarButton);
    playClose();
  };

  wTitle.onmousedown = function (e) {
    windowToDrag = win;
  };

  wTaskbarButton.onclick = function () {
    toggleWindow(currentWindowId, wTaskbarButton);
    playClick();
  };

  const pos = getRandomWindowPosition();

  win.style.top = pos[1] + "px";
  win.style.left = pos[0] + "px";

  document.body.appendChild(win);
  document
    .getElementById("taskbarButtonsContainer")
    .appendChild(wTaskbarButton);

  showWindow(currentWindowId, wTaskbarButton);
}

function createDesktopApp(id, img, title, h, w, action) {
  const app = document.createElement("div");
  app.id = id;
  app.classList.add("desktop-app");
  app.classList.add("flex-center");
  app.style.height = h + "px";
  app.style.width = w + "px";

  const appIcon = document.createElement("img");
  appIcon.classList.add("app-icon");
  appIcon.src = img;
  appIcon.alt = `${title} Icon`;

  const appTitle = document.createElement("p");
  appTitle.classList.add("app-title");
  appTitle.innerText = title;

  app.appendChild(appIcon);
  app.appendChild(appTitle);

  document.getElementById("root").appendChild(app);

  app.ondblclick = function (e) {
    e.stopImmediatePropagation();
    action();
  };

  app.onclick = function (e) {
    e.stopImmediatePropagation();
    playClick();
  };

  app.onmouseenter = function (e) {
    playHover();
  };
}
