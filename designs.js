// Select color input

//var colorPick = document.getElementById('colorPicker');

// Select size input




var canvasSize = document.getElementById("sizePicker");


// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("submit", function(){
    var gridHeight = document.getElementById("inputHeight").value;// get height

    var gridWidth = document.getElementById("inputWidth").value;// get width


    alert(gridHeight + " " + gridWidth);


   document.getElementById("pixelCanvas").innerHTML = "";//clearing out the table



    makeGrid(gridHeight, gridWidth);// call the makeGrid function and pass it the height and width values.

});


function makeGrid(h, w) {

// Your code goes here!
    

    






}
