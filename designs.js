//Here we are defining the variable for the canvas size
let canvasSize = document.getElementById("sizePicker");

//Below we are taking the canvasSize variable and creating an event listener to allow the user to submit the needed criteria to set up the grid.
canvasSize.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("pixelCanvas").innerHTML = "";

  let gridHeight = document.getElementById("inputHeight").value; 

  let gridWidth = document.getElementById("inputWidth").value; 

  makeGrid(gridWidth, gridHeight);
});

/**
 * @desc Below we set up a function to actually make the table grid. For this we set up a loop to cycle through each row and column and append elements to make the grid visible.
 * @param {*} width - this param will be passing in the user's value selection on width of the grid.
 * @param {*} height - this param will be passing in the user's value selection on height of the grid.
 */
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

//While still in the scope of the makeGrid() function, we create another event listener, this time for the user to target each cell in the grid and update each cell color.
  table.addEventListener("click", function (event) {

    let color = document.getElementById("colorPicker").value;
    let cell = event.target.closest("td");
    if(cell){
      cell.style.backgroundColor = color;
    }
    
    
  });
  
 
}
