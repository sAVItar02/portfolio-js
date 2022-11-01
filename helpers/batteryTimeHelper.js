/**
 * @brief fetches the client battery and displays it onto the taskbar in real time
 */
function getBattery() {
  let batteryElement = document.createElement("div");
  batteryElement.id = "batteryElement";

  if (navigator.getBattery == undefined) {
    return;
  }

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

    if (level * 100 <= 100 && level * 100 >= 90) {
      i.src = "./../public/assets/battery-full-solid.svg";
    } else if (level * 100 < 90 && level * 100 >= 75) {
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
      updateBatteryImg(bat2.currentTarget.level, i);
      // if (level * 100 <= 20 && !hasAlerted) {
      //   hasAlerted = true;
      //   const alert = document.createElement("div");
      //   alert.id = "batteryAlert";
      //   alert.innerText = "Battery Low! Please plug in the charger!";

      //   document.body.appendChild(alert);
      // }
    };

    bat.onchargingchange = (bat2) => {
      if (bat2.currentTarget.charging == true) {
        const i = document.createElement("img");
        i.id = "charging";
        i.src = "./../public/assets/plug-solid.svg";
        i.alt = "Battery Image";

        batteryElement.insertBefore(i, batteryElement.firstChild);
      } else {
        document.getElementById("charging").remove();
      }
    };
  });

  document.getElementById("batteryTimeContainer").appendChild(batteryElement);
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

function updateBatteryImg(level, i) {
  if (level * 100 <= 100 && level * 100 >= 90) {
    i.src = "./../public/assets/battery-full-solid.svg";
  } else if (level * 100 < 90 && level * 100 >= 75) {
    i.src = "./../public/assets/battery-three-quarters-solid.svg";
  } else if (level * 100 < 75 && level * 100 >= 50) {
    i.src = "./../public/assets/battery-half-solid.svg";
  } else if (level * 100 < 50 && level * 100 >= 0) {
    i.src = "./../public/assets/battery-quarter-solid.svg";
  }
}

// Time Stuff

function getTime24() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let ampm = "";

  let timeElement = document.createElement("div");
  timeElement.id = "timeElement";
  timeElement.classList.add("active");

  if (h > 12 && h < 24) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (h < 10) {
    h = `0${h}`;
  }

  let timeString = `<span id="timeHour">${h}</span><span class="breathe">:</span><span id="timeMinute">${m}</span> <span id="ampm">${ampm}</span>`;

  timeElement.innerHTML = timeString;

  document.getElementById("batteryTimeContainer").appendChild(timeElement);

  return [h, m, ampm];
}

function getTime12() {
  let time = getTime24();
  let h;

  if (time[0] > 12) {
    h = time[0] - 12;
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (h < 10) {
    h = `0${h}`;
  }

  document.getElementById("timeHour").innerText = h;
  document.getElementById("timeMinute").innerText = time[1];
  document.getElementById("ampm").innerText = time[2];
}

function updateTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();

  if (h > 12 && h < 24) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (h < 10) {
    h = `0${h}`;
  }

  document.getElementById("timeHour").innerText = h;
  document.getElementById("timeMinute").innerText = m;
  document.getElementById("ampm").innerText = ampm;
}
