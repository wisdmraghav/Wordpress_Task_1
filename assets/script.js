var selectedRow = null
var selectedRowSell=null
var a=0;

function onFormSubmit(e) {
    console.log("in the form submit fuction")
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            window.scrollBy(0,800);
		}
      
        else{
            updateRecord(formData);
            window.scrollBy(0,800);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};

    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button> <button onClick="onSell(this)">Sell</button>`;
    

}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
function onSell(td) {
    
    selectedRowSell = td.parentElement.parentElement;
    sellquant=selectedRowSell.cells[2].innerHTML;
    updateSell(selectedRowSell,sellquant)
    
    
}
var retail_product=[]
function updateSell(b,c) {

    while(!x){
    var x=prompt("How Many Quantity You Have To Sell?:")
  }
    if (x == null){
        alert("Please Provide Input")
    }
    else{

    if(x>0){
    if(c-x<0){
        alert("Quantity Not Sufficient");
    }
    if (c-x>=0){

        b.cells[2].innerHTML=c-x;
    }
    // if (c-x<5 && c-x>0){

    //     var concern=prompt(c-x+ " quantity remain add to reatiler reply with 1");
    //     if (concern==1){

        
        
    //         // Get the table element in which you want to add row
    //         let table = document.getElementById("retailer-list");
    //         console.log("inside if");
    //         console.log(table);
         
    //         // Create a row using the inserRow() method and
    //         // specify the index where you want to add the row
    //         let row = table.insertRow(-1); // We are adding at the end
         
    //         // Create table cells
    //         let c1 = row.insertCell(0);
    //         let c2= row.insertCell(1);
            
            
         
    //         // Add data to c1 and c2
    //         c1.innerText =b.cells[1].innerHTML;
    //         c2.innerHTML=`<button onClick="on_Retail_del(this)">Delete</button>`;
            
            
            
    //      }
    // }
    
    if (c-x<5 && c-x>=0){
        if (retail_product.includes(b.cells[1].innerHTML)){
            // alert("Alrady In Reatiler Buying List No Need To Add More:");
        }
        else{

        

            // var concern=prompt(c-x+ " Quantity Remain Add It To Buying From Reatiler List,Please Reply With 1");
            // alert(c-x+ " Quantity Remain Added To Buying From Reatiler List");
            while(!quant_retail){
              var quant_retail=prompt(c-x+ " Quantity Remain, How Many To Buy More From Reatiler List");
            };
            
            // if (concern==1 && !(retail_product.includes(b.cells[1].innerHTML))){

            
                
            //     // Get the table element in which you want to add row
            //     let table = document.getElementById("retailer-list");
            //     console.log("inside if condition");
            //     console.log(b.cells[1].innerHTML);
            //     console.log(table);
            
            //     // Create a row using the inserRow() method and
            //     // specify the index where you want to add the row
            //     let row = table.insertRow(-1); // We are adding at the end
            
            //     // Create table cells
            //     let c1 = row.insertCell(0);
            //     let c2= row.insertCell(1);
                
                
            
            //     // Add data to c1 and c2
            //     c1.innerText =b.cells[1].innerHTML;
            //     c2.innerHTML=`<button onClick="on_Retail_del(this)">Delete</button>`;
            //     retail_product.push(b.cells[1].innerHTML);
            //     console.log(retail_product);
                
                
            // }
            if(quant_retail>0){

            
              if (!(retail_product.includes(b.cells[1].innerHTML))){

              
                  
                  // Get the table element in which you want to add row
                  let table = document.getElementById("retailer-list");
                  console.log("inside if condition");
                  console.log(b.cells[1].innerHTML);
                  console.log(table);
              
                  // Create a row using the inserRow() method and
                  // specify the index where you want to add the row
                  let row = table.insertRow(-1); // We are adding at the end
              
                  // Create table cells
                  let c1 = row.insertCell(0);
                  let c2= row.insertCell(1);
                  let c3=row.insertCell(2);
                  
                  
              
                  // Add data to c1 and c2
                  c1.innerText =b.cells[1].innerHTML;
                  c2.innerHTML=quant_retail;
                  // if (quant_retail==0){
                  //   c2.innerHTML=5;
                  // }
                  // else{
                  //   c2.innerHTML=quant_retail;
                  // }
                  
                  c3.innerHTML=`<button onClick="on_Retail_del(this)">Delete</button>`;
                  retail_product.push(b.cells[1].innerHTML);
                  console.log(retail_product);
                  
                  
              }
            }
            else{
              alert("Quantity can not be zero or negative.")
            }
        }
    }
}
    else{
        alert("Quantity can not be zero or negative.")
    }
    
}
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    
}

//Delete the data
function onDelete(td) {
    if (confirm('Do You Want To Delete This Record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function on_Retail_del(ts){
  if (confirm('Do You Want To Delete This Record?')) {
    row_retail = ts.parentElement.parentElement;
    console.log("onretaildelete");
    document.getElementById('retailer-list').deleteRow(row_retail.rowIndex);
    console.log(row_retail);
  }
}


//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}

// filer table function
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("storeList");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  function myFunc() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Sec_filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("retailer-list");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // sorting retailer table
  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("retailer-list");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  function sortTable_pc(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("storeList");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
