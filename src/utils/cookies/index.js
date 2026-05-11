export function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let val = ca[i];
    while (val.charAt(0) === " ") val = val.substring(1, val.length);
    if (val.indexOf(nameEQ) === 0) return val.substring(nameEQ.length, val.length);
  }
  return null;
}

export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""} ${expires}; path=/`;
}
