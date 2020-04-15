(onNewtabLaunch = () => {
  chrome.storage.sync.get(null, (res) => {
    Object.keys(res).map((key) => {
      updateDOM(key, res[key]);
    });
  });
  chrome.storage.onChanged.addListener((changes) => {
    let key = Object.keys(changes)[0];
    updateDOM(key, changes[key].newValue);
  });
})();

const updateDOM = (key, value) => {
  switch (key) {
    case "textColor":
      document.body.style.color = value;
      break;
    case "backgroundColor":
      document.body.style.backgroundColor = value;
      break;
    case "userInspiration":
      document.querySelector("#inspirationa-quote").innerHTML = value;
      document.querySelector("#author").style.display = "none";
      break;
    default:
      return;
  }
};
