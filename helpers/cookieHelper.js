function setCookie(name, value, expDays) {
  const d = new Date();
  d.setTime(d.getTime() + expDays * 24 * 60 * 60 * 1000);
  document.cookie = `$${name}=${value};expires=${d};`;
}

function getCookie(name) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split("; ");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    if (c.split("=")[0].substring(1) == name) {
      return c.split("=")[1];
    }
  }

  return null;
}
