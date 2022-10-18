/* 
    ? Aviral Singh Chauhan, 10/2022
*/

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
 * @brief fetches the client battery and displays it onto the taskbar in real time
 */
function getBattery() {
  let batteryElement = document.createElement("div");
  batteryElement.id = "batteryElement";
  navigator.getBattery().then((bat) => {
    const { level, onlevelchange, charging } = bat;

    // Check if chargin
    if (charging) {
      const i = document.createElement("i");
      i.id = "charging";
      i.classList.add("fa");
      i.classList.add("fa-solid");
      i.classList.add("fa-plug");

      batteryElement.appendChild(i);
    }

    // Check battery Levels
    const i = document.createElement("i");
    i.id = "batteryIcon";
    i.classList.add("fa");
    i.classList.add("fa-solid");

    if (level * 100 == 100) {
      i.classList.add("fa-battery-three-quarters");
    } else if (level * 100 < 100 && level * 100 >= 75) {
      i.classList.add("fa-battery-full");
    } else if (level * 100 < 75 && level * 100 >= 50) {
      i.classList.add("fa-battery-half");
    } else if (level * 100 < 50 && level * 100 >= 0) {
      i.classList.add("fa-battery-quarter");
    }

    batteryElement.appendChild(i);

    // Show Battery %
    const batteryPerc = document.createElement("div");
    batteryPerc.id = "batteryPerc";
    batteryPerc.innerText = `${Math.floor(level * 100)}%`;
    batteryElement.appendChild(batteryPerc);

    // Alert When Low
    let hasAlerted = false;
    bat.onlevelchange = (bat2) => {
      updateBattery(bat2.currentTarget.level);
      if (level * 100 <= 20 && !hasAlerted) {
        hasAlerted = true;
        const alert = document.createElement("div");
        alert.id = "batteryAlert";
        alert.innerText = "Battery Low! Please plug in the charger!";

        document.body.appendChild(alert);
      }
    };
  });

  document.getElementById("taskbar").appendChild(batteryElement);
}

/**
 *
 * @param {float} level tells how much batter is currently present b/w 0 and 1
 */
function updateBattery(level) {
  document.getElementById("batteryPerc").innerText = `${level * 100}%`;
}

function createAlert(text, h, w) {}

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
};
