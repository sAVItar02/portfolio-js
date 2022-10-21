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
      const i = document.createElement("img");
      i.id = "charging";
      i.src = "./../public/assets/plug-solid.svg";
      i.alt = "Battery Image";

      batteryElement.appendChild(i);
    }

    // Check battery Levels
    const i = document.createElement("img");
    i.id = "batteryIcon";
    i.src = "./../public/assets/battery-full-solid.svg";

    if (level * 100 == 100) {
      i.src = "./../public/assets/battery-full-solid.svg";
    } else if (level * 100 < 100 && level * 100 >= 75) {
      i.src = "./../public/assets/battery-three-quarters-solid.svg";
    } else if (level * 100 < 75 && level * 100 >= 50) {
      i.src = "./../public/assets/battery-half-solid.svg";
    } else if (level * 100 < 50 && level * 100 >= 0) {
      i.src = "./../public/assets/battery-quarter-solid.svg";
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
  document.getElementById("batteryPerc").innerText = `${Math.floor(
    level * 100
  )}%`;
}
