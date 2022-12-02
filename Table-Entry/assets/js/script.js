var row = 1;
var entry = document.getElementById("entry");
entry.classList.toggle(displayrecords());


function displayrecords() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    if ( !name || !age || !grade) {
        alert("Please fill all the boxes");
        return;
    }

var table = document.getElementById("table");
var newrow = table.insertrow(row);

var cell1 = newrow.insertCell(0);
var cell2 = newrow.insertCell(1);
var cell3 = newrow.insertCell(2);

cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = grade;
row++;
}
