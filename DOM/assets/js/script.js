const tabledata=[{
    name:"charvi",
    email:"charvi@gmail.com",
    age:27
},
            {name:"nirali",
            email:"nirali@gmail.com",
            age:29},
            {name:"manthan",
            email:"manthan@gmail.com",
            age:30},
            {name:"printi",email:"printi@gmail.com",age:28},
            {name:"kajal",email:"kajal@gmail.com",age:26}]



            getData(tabledata);
            // getdata =>table na badha data lai
            function getData(tabledata) {
                const userTableBody = document.querySelector("#table");

                tabledata.forEach((user) => {
                    const tableRow = document.createElement('tr');
                    
                    for (const item in user) {
                        const tablecol = document.createElement('td');
                        const value = user[item];
                        tablecol.textContent = value;
                        tableRow.appendChild(tablecol)
                    }
                    userTableBody.appendChild(tableRow);
                });
            
            }

            

//Filter Data
// function searchFun(){
//     let filter = document.getElementById('search-field-input').value.toUpperCase();
//     //table inside
//     let myTable = document.getElementById('user-table');
//     //tr 
//     let tr = myTable.getElementsByTagName('tr');
//                        // tr ki length
//     for (var i = 0; i < tr.length; i++){
//         //name find karva
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.textContent || td.innerHTML;

//             if(textvalue.toUpperCase().indexOf(filter) > -1){
//                   tr[i].style.display = "";
//             }else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }

// }

















        //     const model=document.querySelector(".model");
        //     const model_container=document.querySelector(".model-container");
        //     const close=document.querySelector(".close");

        //     // when i click on add user that time ..........
        //     model.addEventListener('click',function(){
        //     modalWrapper.classList.add('active');
        // });

// when i click 








// const model = document.querySelector('#model');
// const modalWrapper = document.querySelector('.model-wrapper');
// const closeBtn = document.querySelector('.close');

// model.addEventListener('click',function(){
//     modalWrapper.classList.add('active');
// });


// closeBtn.addEventListener('click',function(){
//     modalWrapper.classList.remove('active');
// });


//     getData(usres);
// //Get Data
// function getData(data) {
//     const userTableBody = document.querySelector("#user-table");
//     //console.log(userTableBody);



//     data.forEach((user) => {

//         const tableRow = document.createElement('tr');
//         // console.log(tableRow);


//         for (const item in user) {
//             const tablecol = document.createElement('td');
//             // console.log(tablecol);
//             const value = user[item];
//             // console.log(value);
//             tablecol.textContent = value;
//             tableRow.appendChild(tablecol)
//         }
//         userTableBody.appendChild(tableRow);
//     });

// }


// //Filter Data
// function searchFun(){
//     let filter = document.getElementById('search-field-input').value.toUpperCase();
//     //table inside
//     let myTable = document.getElementById('user-table');
//     //tr 
//     let tr = myTable.getElementsByTagName('tr');
//                        // tr ki length
//     for (var i = 0; i < tr.length; i++){
//         //name find karva
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.textContent || td.innerHTML;

//             if(textvalue.toUpperCase().indexOf(filter) > -1){
//                   tr[i].style.display = "";
//             }else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }

// }

