const tabledata = [{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Discarded", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Want", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Waiting", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Discarded", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Want", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Want", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" },
{ Item: "Skippy Peanut Butter", Date: "07 Nov,8:35pm", Type: "Want", Cost: "$40.27", Last: "18 Aug", List: "Grocery", Auto: "No", Buy_Now: "amozon" }]


getdata(tabledata);
function getdata(data) {
    const table = document.getElementById("mytable");

    data.forEach((user) => {
        const row = document.createElement("tr");


        for (const item in user) {
            const col = document.createElement("td");
            const value = user[item];

            if (item == "Type") {
                const bgcol = document.createElement("span");
                bgcol.classList.add("badge");
                bgcol.textContent = user[item];

                if (user[item] == "Discarded") {
                    bgcol.classList.add("badge-discarded");
                }
                if (user[item] == "Want") {
                    bgcol.classList.add("badge-want");
                }
                if (user[item] == "Waiting") {
                    bgcol.classList.add("badge-waiting");
                }
                col.appendChild(bgcol);
            }
            else {
                col.textContent = value;
            }
            row.appendChild(col);
        }
        table.appendChild(row);
    });
}

const searchfun = () => {
    const filter = document.getElementById("label").value.toUpperCase();
    const table = document.getElementById("mytable");
    const row = table.getElementsByTagName("tr");
    for (var i = 0; i < row.length; i++) {
        console.log(row[i]);
        let td = row[i].getElementsByTagName("td")[2];

        if (td) {
            let textValue = td.textContent || td.innerHTML;
            console.log(textValue);
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                row[i].style.display = "";
            }
            else {
                row[i].style.display = "none";

            }
        }
    }

}





