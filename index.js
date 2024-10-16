var table = document.createElement("table");
document.body.append(table);
table.style.border = " 1px solid black" ;





let thead = document.createElement("thead");
table.appendChild(thead);
let headerRow = document.createElement("tr");
thead.appendChild(headerRow);


let snoHeader = document.createElement("th");
snoHeader.textContent = "sno";
headerRow.appendChild(snoHeader);

let enameHeader = document.createElement("th");
enameHeader.textContent = "ename";
headerRow.appendChild(enameHeader);

let elocationHeader = document.createElement("th");
elocationHeader.textContent = "elocation";
headerRow.appendChild(elocationHeader);



let n = Number(prompt("Enter the employees no:"));

for (let i = 0; i < n; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.style.border = " 1px solid black" ;
    
    for (let j = 0; j < 3; j++) {
        let td = document.createElement("td");
       
        let text1 ; 
        
        if (j == 0) {
            text1 = prompt("Enter sno:");
            if (text1 !== "") {
                td.textContent = text1;
                tr.appendChild(td);
            } 
            else {
                j --; 
            }
        } else if (j == 1) {
            text1 = prompt("Enter ename:");
            if (text1 !== "") {
                td.textContent = text1;
                tr.appendChild(td);
            }
            else {
                j --; 
            }
        } else if (j == 2) {
            text1 = prompt("Enter elocation:");
            if (text1 !== "") {
                td.textContent = text1;
                tr.appendChild(td);
            } 
            else {
                j --; 
            }
        }
    }
}