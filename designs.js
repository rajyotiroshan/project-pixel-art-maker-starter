var color, xCell, yCell, table,rows,cols;
// When size is submitted by the user, call makeGrid()
function makeGrid(evt) {
	//access current height and width
	xCell = $("#inputWidth").val();
	yCell = $("#inputHeight").val(); 
	//access table element
	table = $("#pixelCanvas");
	rows ="";//rows
	cols ="";//cols
	//create xCell no of row.
	for(var r=1; r<=yCell; r++){
		rows = rows + "<tr></tr>";
	}
	//create ycell no of column in each row.
	for(var c=1; c<=xCell; c++){
		cols = cols + "<td></td>";
	}
	//create table with above rows and cols.
	table.html(rows);
	$("tr").html(cols);
	//do not submit.
	evt.preventDefault();
}
//attach click evt handler on submit button.
	$("#submit").on("click",makeGrid);

