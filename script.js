function deleteRow(icon){
    
    // get icon parent --> td
    // td = icon.parentNode

    // get td parent --> tr
    // tr = td.parentNode

    // remove the tr from the table
    (icon.parentNode).parentNode.remove();
}

function storeTable(){
    // take data as an array from inputs 
    let inputs=document.getElementsByClassName("input-data");

    // take all span in control to showing the error
    let span=document.getElementsByClassName("span");
    

    if( ( (inputs[0].value) == ""  ) || (inputs[1].value == "") || (inputs[2].value == "")){
        alert("please fill out all inputs")
    }
    else if(  isNaN(inputs[0].value) ){
        
        
        span[0].innerText = " Invalid data! ";
    }
    
    else{
        // create tr 
        let tr=document.createElement("tr");
        // create td for append to the tr 

        let roll_no=document.createElement("td");    
        roll_no.innerText=inputs[0].value;

        let student_name=document.createElement("td");    
        student_name.innerText=inputs[1].value;

        let father_name=document.createElement("td");    
        father_name.innerText=inputs[2].value;
        
        let uninstall=document.createElement("td");    
        uninstall.innerHTML = '<i onclick="deleteRow(this)" class="fa fa-trash-o" style="font-size:24px"></i>'
        uninstall.id = "js-unistall-button-style";
        
    
        // append the tds into the tr
        tr.append( roll_no ,student_name, father_name , uninstall );
        

        // get table so that we can append tr into it
        let table=document.getElementById("table"); 

        // append tr into the table for show data on web page
        table.appendChild(tr);  


        // to clear the inputs box
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        
        // to remove span alert
        span[0].innerText = "";
    }
    
}