function letsGo() {
  let url = "https://" + window.location.hostname + "/rblx.html";
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};
