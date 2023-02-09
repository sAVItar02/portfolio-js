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
var isMobileBrowser = false;

window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  isMobileBrowser = check;
  return check;
};

mobileAndTabletCheck();

function changeWallpaper(name) {
  document.body.style.backgroundImage = `url(./../../public/assets/wallpapers/${name}.gif)`;
  document.body.className = "";
  document.body.classList.add(`theme-${name}`);
}

/**
 *
 * @param {String} text - Heading which is supposed to appear as the menu item text
 * @param {function} handler - Handler fucntion which runs upon the menu item click
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

/**
 * @brief Toggles the taskbar menu
 */
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

/**
 * @brief Hides the taskbar menu
 */
function hideMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menuButton").classList.remove("active");
}

/**
 * @brief Brings the current or clicked window at the front
 * @param {string} id - id of the window to show
 */
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

/**
 * @brief shows the minimized window
 * @param {String} id - id of the window to show
 * @param {String} taskbarButton - taskbar button associated with the window in question
 */
function showWindow(id, taskbarButton) {
  document.getElementById(id).style.visibility = "visible";
  taskbarButton.classList.add("active");
  setWindowActive(id);
}

/**
 * @brief Minimizes the window i.e hides the window
 * @param {String} id - id of the window to hide
 * @param {String} taskbarButton - taskbar button associated with the window in question
 */
function hideWindow(id, taskbarButton) {
  document.getElementById(id).style.visibility = "hidden";
  taskbarButton.classList.remove("active");
  setWindowActive(null);
}

/**
 * @brief Toggles the window, minimize/maximize the window
 * @param {String} id - id of the window to toggle
 * @param {String} taskbarButton - taskbar button associated with the window in question
 */
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
 * @brief Destroys the window, i.e removes the window from the dom
 * @param {String} id - id of the window to destroy
 * @param {String} taskbarButton - taskbar button associated with the window in question
 */
function destroyWindow(id, taskbarButton) {
  document.getElementById(id).remove();
  taskbarButton.remove();
  windowCount--;
}

/**
 * @brief finds a random position on the screen to create the window
 */
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

/**
 * @brief Center the window on the screen
 * @param {String} id - id of the window to center
 */
function centerWindow(id) {
  let win = document.getElementById(id);

  let h = window.innerHeight / 2 - win.offsetHeight / 2;
  let w = window.innerWidth / 2 - win.offsetWidth / 2;

  win.style.top = h + "px";
  win.style.left = w + "px";
}

/**
 * @brief Make and alert box
 * @param {String} id - this id will be assigned to the new alert box
 */
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

/**
 * @brief Create a card item
 * @param {String} id - this id will be assigned to the card created
 * @param {String} img - card image (will show up ont the side)
 * @param {String} heading - Card heading (main heading of the card)
 * @param {String} desc - Description text explaining about the card item
 * @param {String} links - Links to external sites (if needed)
 * @param {String} tags - tags (if needed) (they appear like labels)
 */
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

/**
 * @brief Create Setting window
 * @param {String} id - this id will be assigned to the setting menu created
 * @param {String} imgs - these images appear for wallpaper selection
 * @param {String} noticeText - text which shows up on the notice section of the settings page
 */
function createSettings(id, imgs, noticeText) {
  const settings = document.createElement("div");
  settings.classList.add("settings-container");

  const notice = document.createElement("div");
  notice.classList.add("notice");
  notice.innerHTML = noticeText;

  settings.appendChild(notice);

  const wallpaperContainer = document.createElement("div");
  wallpaperContainer.classList.add("wallpaper-container");

  const h4 = document.createElement("h4");
  h4.innerText = "Choose a wallpaper";

  const imageBuffer = document.createElement("div");
  imageBuffer.classList.add("wallpaper-img-buffer");

  imgs.forEach((img) => {
    const inputBuffer = document.createElement("div");
    inputBuffer.classList.add("input-buffer");
    inputBuffer.classList.add("flex-center");

    const input = document.createElement("input");
    input.classList.add("radio-input");
    input.id = `${img[1]}`;
    input.type = "radio";
    input.value = `${img[1]}`;
    input.name = "wallpaper";
    input.onclick = function (e) {
      console.log("Hello");
      e.preventDefault();
      e.stopImmediatePropagation();
      setCookie("wallpaper", `${img[1]}`, 30);
      changeWallpaper(`${img[1]}`);
    };

    const label = document.createElement("label");
    label.htmlFor = `${img[1]}`;

    const image = document.createElement("img");
    image.src = `${img[0]}`;
    image.classList.add("wallpaper-img");

    label.appendChild(image);
    inputBuffer.appendChild(input);
    inputBuffer.appendChild(label);
    imageBuffer.appendChild(inputBuffer);
  });

  wallpaperContainer.appendChild(h4);
  wallpaperContainer.appendChild(imageBuffer);

  const audioBuffer = document.createElement("div");
  audioBuffer.classList.add("audio-buffer");

  const h4_1 = document.createElement("h4");
  h4_1.innerText = "Enable/Disable Audio";

  audioBuffer.appendChild(h4_1);

  const inputEnable = document.createElement("input");
  inputEnable.type = "radio";
  inputEnable.value = "enable";
  inputEnable.name = "audio";
  inputEnable.id = "enable";
  inputEnable.onclick = function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    setCookie("audio", true, 30);
    inputEnable.checked = "true";
    inputLabel.style.backgroundColor = "var(--card-desc-color)";
    inputDisableLabel.style.backgroundColor = "transparent";
  };

  const inputLabel = document.createElement("label");
  inputLabel.htmlFor = "enable";
  inputLabel.innerText = "Enable";

  const inputBuffer = document.createElement("div");
  inputBuffer.classList.add("input-buffer");

  inputBuffer.appendChild(inputEnable);
  inputBuffer.appendChild(inputLabel);
  audioBuffer.appendChild(inputBuffer);

  const inputDisable = document.createElement("input");
  inputDisable.id = "disable";
  inputDisable.value = "disable";
  inputDisable.name = "audio";
  inputDisable.type = "radio";
  inputDisable.checked = "true";
  inputDisable.onclick = function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    setCookie("audio", false, 30);
    inputDisable.checked = "true";
    inputDisableLabel.style.backgroundColor = "var(--card-desc-color)";
    inputLabel.style.backgroundColor = "transparent";
  };

  const inputDisableLabel = document.createElement("label");
  inputDisableLabel.htmlFor = "disable";
  inputDisableLabel.innerText = "Disable";

  const inputBuffer_1 = document.createElement("div");
  inputBuffer_1.classList.add("input-buffer");

  inputBuffer_1.appendChild(inputDisable);
  inputBuffer_1.appendChild(inputDisableLabel);

  audioBuffer.appendChild(inputBuffer_1);

  settings.appendChild(wallpaperContainer);
  settings.appendChild(audioBuffer);

  // const apply = document.createElement("button");
  // apply.type = "button";
  // apply.id = "apply-settings";
  // apply.innerText = "Apply";
  // apply.classList.add("primary-button");

  settings.appendChild(document.createElement("hr"));
  // settings.appendChild(apply);

  if (document.getElementById(id).children[1].children.length == 0) {
    document.getElementById(id).children[1].appendChild(settings);
  }

  // apply.onclick = function (e) {
  //   e.preventDefault();
  //   e.stopImmediatePropagation();

  //   let audio = document.querySelector("input[name='audio']:checked").value;
  //   if (audio == "enable") {
  //     setCookie("audio", true, 30);
  //   } else {
  //     setCookie("audio", false, 30);
  //   }

  //   let wallpaper = document.querySelector("input[name='wallpaper']:checked");
  //   if (wallpaper) {
  //     setCookie("wallpaper", wallpaper.value, 30);
  //     changeWallpaper(wallpaper.value);
  //   }
  // };
}

/**
 * @brief Create the taskbar at the top of the screen
 */
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

/**
 * @brief Create a window to show required content
 * @param {String} id - this id will be assigned to the new window created
 * @param {String} text - text/html which is appended to the body of the window (acts as the main content)
 * @param {String} titleText - title of the new window created
 * @param {String} h - height of the window being created in "vh"
 * @param {String} w - width of the window being created in "vw"
 * @param {String} z - z index of the window being created
 * @param {String} imgs - not implemented yet!
 */
function createWindow(id, text, titleText, h, w, z = 1, imgs) {
  if (document.getElementById(id)) {
    showWindow(id, document.getElementById(`${id}-button`));
    return;
  }

  windowCount++;

  // !---------- BSOD EASTER EGG ---------------
  if (windowCount >= 5) {
    // setTimeout(showBSOD, 3000);
  }

  console.log(windowCount);
  // !------------------------------------------

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

/**
 * @brief create a desktop icon which can be clicked to open windows
 * @param {String} id - this id will be assigned to the desktop being created
 * @param {String} img - this image will be used as the app icon
 * @param {String} title - title text which will be displayed for the icon
 * @param {String} h - height of the desktop icon in "vh"
 * @param {String} w - width of the disktop icon in "vw"
 * @param {String} action - action (function) which will be called when the app is clicked
 */
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

  app.onclick = function (e) {
    e.stopImmediatePropagation();
    playClick();
  };

  if (!isMobileBrowser)
    app.ondblclick = function (e) {
      e.stopImmediatePropagation();
      action();
    };
  else
    app.onclick = function (e) {
      e.stopImmediatePropagation();
      action();
    };

  app.onmouseenter = function (e) {
    playHover();
  };
}
