function alertInfo() {
  let i;
  let alert_element = document.getElementsByClassName("alert-info")[0];
  alert_element.style.opacity = 100;
  setTimeout(function(){alert_element.style.opacity = 0}, 2500)
}
function copyText(tocopy) {
  navigator.clipboard.writeText(tocopy).then(() => {
      alertInfo();
  }).catch(err => {
      console.error("Failed to copy text: ", err);
  });
}