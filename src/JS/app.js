/*
    ? Aviral Singh Chauhan, 10/2022
*/
document.getElementById("root").onclick = function (e) {
  hideMenu();
};

const text = `
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro natus nemo dolorum dicta fuga possimus reprehenderit assumenda facere veniam deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ea, quos sapiente dolor nulla delectus corrupti similique praesentium quasi quae minus tempore animi reprehenderit sint ipsam voluptate aliquam nostrum sed.</div>
  <h2>Hello</h2>
`;

function openUrl(url) {
  window.open(url);
}

window.onload = function () {
  createTaskBar();
  appendMenuElement("About", logDummy);
  appendMenuElement("Resume", logDummy);
  appendMenuElement("Credits", logDummy);
  getBattery();
  getTime12();

  setInterval(function () {
    updateTime();
  }, 1000);

  window.onmouseup = function (e) {
    windowToDrag = null;
  };

  window.onmousemove = function (e) {
    handleDrag(e, windowToDrag);
  };

  createWindow(text, "About", 30, 30, 5);
  createWindow(text, "About", 40, 20, 5);
  createWindow(text, "About", 50, 40, 5);

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
    logDummy
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
