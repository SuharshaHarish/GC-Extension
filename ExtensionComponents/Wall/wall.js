const storeInChrome = (key, value) => {
  obj = { [key]: value };
  chrome.storage.sync.set(obj);
};

const createColorTable = (colors, cellStyle, key) => {
  const table = document.createElement("table");
  let i = 0;
  while (i < colors.length) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(colors[i + j]);
      cell.appendChild(cellText);
      cell.addEventListener(
        "click",
        storeInChrome.bind(null, key, colors[i + j])
        // only stores background/text color in chrome.sync
        // back ground/text will be set in chromeBackground.js file
      );
      cell.style[cellStyle] = `${colors[i + j].toLowerCase()}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
    i += 3;
  }
  return table;
};

(displayColorTable = () => {
  const colors = [
    "Black",
    "Blue",
    "Brown",
    "Gray",
    "Green",
    "Pink",
    "Purple",
    "Orange",
    "Yellow",
  ];
  const background = document.querySelector("#background-color");
  let table = createColorTable(colors, "backgroundColor", "backgroundColor");
  background.appendChild(table);
  const textcolors = document.querySelector("#text-color");
  table = createColorTable(colors, "color", "textColor");
  background.appendChild(table);
})();

const inspirationFormHandler = () => {
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", () => {
    const inputText = document.querySelector("#input-text");
    storeInChrome("userInspiration", inputText.value);
    inputText.value = "";
  });
};
inspirationFormHandler();
