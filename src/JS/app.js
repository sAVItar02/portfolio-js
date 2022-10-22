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

  createWindow(text, "About", 30, 30, 5);
  createWindow(text, "About", 40, 20, 5);
};
