(onNewtabLaunch = () => {
  chrome.storage.sync.get(null, (res) => {
    document.body.style.backgroundColor = res.backgroundColor;
    document.body.style.color = res.textColor;
  });
})();

chrome.storage.onChanged.addListener((changes) => {
  console.log(changes);
  changes.backgroundColor
    ? (document.body.style.backgroundColor = changes.backgroundColor.newValue)
    : (document.body.style.color = changes.textColor.newValue);
});
