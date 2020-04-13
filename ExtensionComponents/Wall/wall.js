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

((colors) => {
  const background = document.querySelector("#background-color");
  const table = document.createElement("table");
  let i = 0;
  while (i < colors.length) {
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(colors[i + j]);
      cell.appendChild(cellText);
      cell.addEventListener("click", (e, cellText) =>
        changeDisplayBackgroundColor(e, cellText)
      );
      cell.style.background = `${colors[i + j].toLowerCase()}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
    i += 3;
  }
  background.appendChild(table);
})(colors);

const changeDisplayBackgroundColor = (e, color) => {
  console.log(e);
};
