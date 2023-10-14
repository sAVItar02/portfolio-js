function returnRightClickCords(e, contextMenu) {
  let x = contextMenu.offsetWidth;
  let y = contextMenu.offsetHeight;

  //   console.log(document.getElementById("context-menu").offsetHeight);

  console.log(x, y);

  let cordsX = x;
  let cordsY = y;

  let maxX = window.innerWidth - contextMenu.offsetWidth;
  let maxY = window.innerHeight - contextMenu.offsetHeight;

  if (maxX - e.clientX < x) cordsX = e.clientX - x;
  if (maxY - e.clientY < y) cordsY = e.clientY - y;

  return [cordsX, cordsY];
}
