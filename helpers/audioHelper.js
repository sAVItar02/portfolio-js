function playPop() {
  let isEnabled = getCookie("audio") || false;
  if (isEnabled == "false") return;
  const audio = new Audio("./../public/assets/sounds/alert-pop.wav");
  audio.play();
}

function playHover() {
  let isEnabled = getCookie("audio") || false;
  if (isEnabled == "false") return;
  const audio = new Audio("./../public/assets/sounds/nav-hover.wav");
  audio.play();
}

function playClick() {
  let isEnabled = getCookie("audio") || false;
  if (isEnabled == "false") return;
  const audio = new Audio("./../public/assets/sounds/menu-click.wav");
  audio.play();
}

function playClose() {
  let isEnabled = getCookie("audio") || false;
  if (isEnabled == "false") return;
  const audio = new Audio("./../public/assets/sounds/close.wav");
  audio.play();
}
