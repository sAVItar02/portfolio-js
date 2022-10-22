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

var alertCount = 0;
var windowCount = 0;
var windowToDrag = null;
var activeWindow = null;

// function setActiveWindow(w, taskbarButton) {
//   activeWindow = w;
//   // console.log(document.querySelectorAll(".taskbar-btn"));
//   document.querySelectorAll(".taskbar-btn").forEach((e) => {
//     e.classList.remove("active");
//   });

//   taskbarButton.classList.toggle("active");
// }

// function removeActiveWindow(w, taskbarButton) {
//   activeWindow = null;
//   taskbarButton.classList.remove("active");
// }

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

/**
 *
 * @param {String} text Text of the alert
 * @param {String} titleText title text for the alert box
 * @param {Integer} h height in vh for the text box
 * @param {Integer} w width in vw for the text box
 * @param {Integer} z z Index for the text box
 */
function createAlert(text, titleText, h, w, z) {
  alertCount++;
  const currentAlertId = `alert-${alertCount}`;
  const alert = document.createElement("div");
  alert.id = currentAlertId;
  alert.classList.add("alert");
  alert.style.height = h + "vh";
  alert.style.width = w + "vw";
  alert.style.zIndex = z;

  const alertTitleBar = document.createElement("div");
  alertTitleBar.classList.add("alert-title");
  alertTitleBar.classList.add("flex-center");
  alertTitleBar.innerText = titleText;

  const alertClose = document.createElement("img");
  alertClose.classList.add("close-btn");
  alertClose.src = "./../public/assets/xmark-solid.svg";
  alertClose.alt = "Cross Button Image";

  const alertBody = document.createElement("div");
  alertBody.classList.add("alert-body");
  alertBody.classList.add("flex-center-column");

  const taskbarAlertButton = document.createElement("button");
  taskbarAlertButton.type = "button";
  taskbarAlertButton.classList.add("taskbar-btn");
  taskbarAlertButton.innerText = "Alert";
  taskbarAlertButton.classList.add("primary-button");

  alertTitleBar.appendChild(alertClose);

  alertBody.innerText = text;

  const alertButton = document.createElement("button");
  alertButton.type = "button";
  alertButton.classList.add("primary-button");
  alertButton.style.marginTop = "20px";
  alertButton.innerText = "Ok";

  alert.onclick = function (e) {
    e.stopImmediatePropagation();
    makeAlertActive(currentAlertId, taskbarAlertButton);
  };

  alertButton.onclick = function () {
    destroyAlert(currentAlertId, taskbarAlertButton);
    playClick();
  };

  alertClose.onclick = function (e) {
    destroyAlert(currentAlertId, taskbarAlertButton);
    playClose();
  };

  alertTitleBar.onmousedown = function (e) {
    windowToDrag = alert;
  };

  taskbarAlertButton.onclick = function () {
    toggleWindow(currentAlertId, taskbarAlertButton);
    playClick();
  };

  alertBody.appendChild(alertButton);
  alert.appendChild(alertTitleBar);
  alert.appendChild(alertBody);
  document.body.appendChild(alert);

  const random = getRandomWindowPosition();

  alert.style.top = random[1] + "px";
  alert.style.left = random[0] + "px";
  setActiveWindow(alert, taskbarAlertButton);

  document
    .getElementById("taskbarButtonsContainer")
    .appendChild(taskbarAlertButton);
}

/**
 *
 * @param {Integer} id unique id of the window to destroy
 */
function destroyAlert(id, taskbarButton) {
  document.getElementById(id).remove();
  taskbarButton.remove();
  alertCount--;
}

function destroyWindow(id, taskbarButton) {
  document.getElementById(id).remove();
  taskbarButton.remove();
  windowCount--;
}

function getRandomWindowPosition() {
  let xOrigin = window.innerWidth - window.innerWidth * 0.65;
  let yOrigin = window.innerHeight - window.innerHeight * 0.65;

  let randomX = Math.floor(Math.random() * (xOrigin + 100 - xOrigin) + xOrigin);
  let randomY = Math.floor(Math.random() * (yOrigin + 100 - yOrigin) + yOrigin);

  return [randomX, randomY];
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

  buttonContainer.appendChild(menuButton);
  buttonContainer.appendChild(taskbarButtonsContainer);

  menuButton.onclick = function () {
    toggleMenu();
    playClick();
  };

  taskbar.appendChild(buttonContainer);

  const menu = document.createElement("ul");
  menu.id = "menu";

  document.body.appendChild(taskbar);
  document.body.appendChild(menu);
}

function createWindow(text, titleText, h, w, z = 1, imgs) {
  windowCount++;
  const currentWindowId = `window-${windowCount}`;
  const win = document.createElement("div");
  win.id = currentWindowId;
  win.classList.add("window");
  win.style.height = h + "vh";
  win.style.width = w + "vw";
  win.style.zIndex = z;

  const wTitle = document.createElement("div");
  wTitle.classList.add("window-title");
  wTitle.classList.add("flex-center");
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

// window.onload = function () {
//   createTaskBar();
//   appendMenuElement("About", logDummy);
//   appendMenuElement("Resume", logDummy);
//   appendMenuElement("Credits", logDummy);
//   getBattery();

//   window.onmouseup = function (e) {
//     windowToDrag = null;
//   };

//   window.onmousemove = function (e) {
//     handleDrag(e, windowToDrag);
//   };

//   createWindow("Hello", "About", 30, 30, 5);
// };
