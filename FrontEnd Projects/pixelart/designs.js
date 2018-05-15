/* Here makeGrid() is called on clicking submit*/
$(document).ready(function()
{
	$("#submitbutton").click(function()
	{
		makeGrid();
		
	})
})

function makeGrid() {
/* height and width of a column is taken from user*/
var height=document.getElementById("inputHeight").value;
var width=document.getElementById("inputWeight").value;
var table=document.getElementById("pixelCanvas");
table.innerHTML="";
var i,j,row,col;
/*table is created from height and width*/
for(i=0;i<height;i++)
{
 row=table.insertRow(i);
for(j=0;j<width;j++)
{
	col=row.insertCell(j);
}
/* Event listener is written in order to color the cell when the cell is clicked.
 User can select its desire color for the cell*/
table.addEventListener("click",function()
{
  event.target.style.backgroundColor=document.getElementById("colorPicker").value;
})
}

}
