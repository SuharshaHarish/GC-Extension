const changeDisplayBackgroundColor = (key, color) => {
  console.log(key, color);
  if (color) {
    obj = { [key]: color };
    chrome.storage.sync.set(obj);
    // only stores background/text color in chrome.sync
    // back ground/text will be set in chromeBackground.js file
  } else return;
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
        changeDisplayBackgroundColor.bind(null, key, colors[i + j])
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
