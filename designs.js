let canvasSize = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("pixelCanvas").innerHTML = "";

  let gridHeight = document.getElementById("inputHeight").value; // get height

  let gridWidth = document.getElementById("inputWidth").value; // get width

  makeGrid(gridWidth, gridHeight);
});

function makeGrid(width, height, cell) {
  let table = document.getElementById("pixelCanvas");

  for (x = 0; x < height; x++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (y = 0; y < width; y++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  let color = document.getElementById("colorPicker").value;

  table.addEventListener("click", function (event) {
    let cell = event.target.closest("td");
    cell.style.backgroundColor = color;
    
    console.log(color);
  });
 
}
