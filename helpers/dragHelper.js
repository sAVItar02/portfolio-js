function handleDrag(e, windowToDrag) {
  if (windowToDrag != null && e.buttons & 1) {
    let taskbarHeight = document.getElementById("taskbar").offsetHeight;
    let x = windowToDrag.offsetLeft;
    let y = windowToDrag.offsetTop;

    x += e.movementX;
    y += e.movementY;

    let maxX = window.innerWidth - windowToDrag.offsetWidth;
    let maxY = window.innerHeight - windowToDrag.offsetHeight;

    if (x > maxX) x = maxX;
    if (x < 0) x = 0;
    if (y > maxY) y = maxY;
    if (y < taskbarHeight) y = taskbarHeight;

    windowToDrag.style.transform = "";
    windowToDrag.style.top = y + "px";
    windowToDrag.style.left = x + "px";
  }
}
