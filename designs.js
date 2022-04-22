// Select color input

//var colorPick = document.getElementById('colorPicker');

// Select size input

var gridHeight = document.getElementById("inputHeight").value;// get height

var gridWidth = document.getElementById("inputWidth").value;// get width




var canvasSize = document.getElementById("sizePicker");


// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("submit", function(event){

    event.preventDefault()
   
    alert(gridHeight + " " + gridWidth);


   document.getElementById("pixelCanvas").innerHTML = "";//clearing out the table



    makeGrid(gridHeight, gridWidth);// call the makeGrid function and pass it the height and width values.

});


function makeGrid(x, y) {

// Your code goes here!
var table = document.getElementById("pixelCanvas"), tr, td;

   
    for (x = 0; gridWidth < 20; x++){
    tr = document.createElement('tr');
    for (y = 0; y < gridHeight; y++){
        td = document.createElement('td');
        tr.appendChild(td);   
    }
   table.appendChild(tr);
}
document.getElementById('container').appendChild(table);
}
 /*for (x = 0; x < 16; x++) {
     document.write()
     for(y =0; y < 16; y++){

     }
 }*/


     
     
    

    







