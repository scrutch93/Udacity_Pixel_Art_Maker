// Select color input

//var colorPick = document.getElementById('colorPicker');

// Select size input


var canvasSize = document.getElementById("sizePicker");


// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("submit", function(event){

   event.preventDefault()

   // var gridHeight = document.getElementById("inputHeight").value;// get height

   // var gridWidth = document.getElementById("inputWidth").value;// get width
    
    
   
    //alert(gridHeight + " " + gridWidth);


  //document.getElementById("pixelCanvas").innerHTML = "";//clearing out the table


  makeGrid();
  
});

function makeGrid() {

    // Your code goes here!
    var table = document.getElementById("pixelCanvas");
    var gridHeight = document.getElementById("inputHeight").value;// get height

    var gridWidth = document.getElementById("inputWidth").value;// get width
    
        
        for (x = 0; x < gridHeight; x++){
       var tr = document.createElement('tr');
       table.appendChild(tr); 
        
        for (y = 0; y < gridWidth; y++){
            var td = document.createElement('td');
            tr.appendChild(td);
            
        }
        
    }
    //document.getElementById('pixelCanvas').appendChild(table);
    }
    
  


     
    







