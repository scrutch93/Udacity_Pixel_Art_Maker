// Select color input

//var colorPick = document.getElementById('colorPicker');

// Select size input


var canvasSize = document.getElementById("sizePicker");


// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("submit", function(event){

    event.preventDefault()

    var gridHeight = document.getElementById("inputHeight").value;// get height

    var gridWidth = document.getElementById("inputWidth").value;// get width
    
    
   
    alert(gridHeight + " " + gridWidth);


  //document.getElementById("pixelCanvas").innerHTML = "";//clearing out the table


  makeGrid();
 

});

function makeGrid(gridHeight,gridWidth) {

 
  // Your code goes here!
  var grid = document.getElementById("table");
  
     // tr.appendChild(td); 
      for (cell = 0; cell < gridWidth; cell++){
      tr = document.createElement('tr');
      for (cell = 0; cell < gridHeight; cell++){
          td = document.createElement('td');
          tr.appendChild(td); 
          
      }
     table.appendChild(tr);
  }
  document.getElementById('pixelCanvas').appendChild(grid);
  }
  
 

     
     
    







