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

  alertTitleBar.appendChild(alertClose);

  alertBody.innerText = text;

  const alertButton = document.createElement("button");
  alertButton.type = "button";
  alertButton.classList.add("primary-button");
  alertButton.style.marginTop = "20px";
  alertButton.innerText = "Ok";

  alertButton.onclick = function () {
    destroyAlert(currentAlertId);
  };

  alertClose.onclick = function () {
    destroyAlert(currentAlertId);
  };

  alertTitleBar.onmousedown = function (e) {
    windowToDrag = alert;
  };

  alertBody.appendChild(alertButton);
  alert.appendChild(alertTitleBar);
  alert.appendChild(alertBody);
  document.body.appendChild(alert);

  const random = getRandomWindowPosition();

  alert.style.top = random[1] + "px";
  alert.style.left = random[0] + "px";
}

/**
 *
 * @param {Integer} id unique id of the window to destroy
 */
function destroyAlert(id) {
  document.getElementById(id).remove();
  alertCount--;
}

function getRandomWindowPosition() {
  let xOrigin = window.innerWidth - window.innerWidth * 0.7;
  let yOrigin = window.innerHeight - window.innerHeight * 0.7;

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

  menuButton.onclick = function () {
    toggleMenu();
  };

  taskbar.appendChild(menuButton);

  const menu = document.createElement("ul");
  menu.id = "menu";

  document.body.appendChild(taskbar);
  document.body.appendChild(menu);
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("About", logDummy);
  appendMenuElement("Resume", logDummy);
  appendMenuElement("Credits", logDummy);
  getBattery();

  window.onmouseup = function (e) {
    windowToDrag = null;
  };

  window.onmousemove = function (e) {
    handleDrag(e, windowToDrag);
  };

  createAlert("Hello", "Alert", 20, 20, 10);
};
