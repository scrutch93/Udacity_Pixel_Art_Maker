// Select color input

//var colorPick = document.getElementById('colorPicker');

// Select size input




var canvasSize = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()

canvasSize.addEventListener("button", function(){
    var gridHeight = document.getElementById("inputHeight").value;// get height

    var gridWidth = document.getElementById("inputWidth").value;// get width


    console.log(gridHeight + " " + gridWidth);


   document.getElementById("pixelCanvas").innerHTML = "";//clearing out the table



    makeGrid(gridHeight, gridWidth);// call the makeGrid function and pass it the height and width values.

});


function makeGrid(h, w) {

// Your code goes here!
    

    






}
