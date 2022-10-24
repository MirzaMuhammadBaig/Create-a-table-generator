let table = prompt("Which table do you want?");
let lines = prompt("How many lines do you require?");

let same ;
let text = "";

if(table == lines){
    same = "also"
}else{
    same = ""
}

let info = `Your table is ${table} and lines is ${same} ${lines}`;
document.getElementById("info").innerHTML = info;

lines ++;

for (let i = 1; i < lines ; i++) {
 text += table + ` x ` + i + ` = ` + i * table + "<br>";
}

document.getElementById("demo").innerHTML = text;