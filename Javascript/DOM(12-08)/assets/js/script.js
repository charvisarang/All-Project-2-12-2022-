const tabledata=[{name:"charvi",email:"charvi@gmail.com",age:27},
                {name:"nirali",email:"nirali@gmail.com",age:29},
                {name:"manthan",email:"manthan@gmail.com",age:30},
                {name:"printi",email:"printi@gmail.com",age:28},
                {name:"kajal",email:"kajal@gmail.com",age:26}]

getData(tabledata);
// getdata =>table na badha data display thai

function getData(data) {  // function banavu data leva mate
    const userTableBody = document.getElementById('table'); // table 1st lidhu kem k table ma display thva mate 
    
    data.forEach((user) => { // foreach atle lidhu k index saate badhi value display thase
        const tableRow = document.createElement('tr');
        
        for (const item in user) {
            const tablecol = document.createElement('td');
            const value = user[item];
            tablecol.textContent = value;
            tableRow.appendChild(tablecol);
        }
        userTableBody.appendChild(tableRow);
    });

}

//==============================Filter=====================================
const searchfun=()=>{
    const filter=document.getElementById("label").value.toUpperCase();
    const table=document.getElementById("table");
    const tr=table.getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++){
    let td=tr[i].getElementsByTagName("td")[0];
    if(td)
    {
        let textvalue=td.textContent|| td.innerHTML;
        if(textvalue.toUpperCase().indexOf(filter)>-1)
        {
            tr[i].style.display="";

        }
        else{
            tr[i].style.display="none";
        }
    }
    }
}


//===============================Popup========================================
function togglePopup(){
    const element=document.getElementById("model");
    element.classList.toggle("d-flex")
    }

//==============================Table Data Entry==============================
var row=1;

var button=document.getElementById("button");
button.addEventListener("click",displaydetails);

function displaydetails()
{
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var age=document.getElementById("age");
    if( !name || !email || !age)
    {
        alert("Plzz fill all the boxes");
        return ;
    }
    var table=document.getElementById("table");
    var tr=table.insertRow(row);

    var cell1=tr.insertRow(0);
    var cell2=tr.insertRow(1);
    var cell3=tr.insertRow(2);

    cell1.innerHTML=name;
    cell2.innerHTML=email;
    cell3.innerHTML=age;
    row++;
    
}