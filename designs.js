let canvasSize = document.getElementById("sizePicker");

canvasSize.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("pixelCanvas").innerHTML = "";

  let gridHeight = document.getElementById("inputHeight").value; 

  let gridWidth = document.getElementById("inputWidth").value; 

  makeGrid(gridWidth, gridHeight);
});

function makeGrid(width, height) {
  let table = document.getElementById("pixelCanvas");

  for (x = 0; x < height; x++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (y = 0; y < width; y++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }

 

  table.addEventListener("click", function (event) {
    
    let color = document.getElementById("colorPicker").value;
    let cell = event.target.closest("td");
    
    cell.style.backgroundColor = color;
    
    console.log(color);
  });
  
 
}
