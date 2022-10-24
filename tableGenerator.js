let table = prompt("Which table do you want to multiply?");
let lines = prompt("How many length do you want to multiply?");

if (lines == 0) {
    alert("Your selected length is 0, so I can't show output, so make sure that your selected length is greater than 0")
} else {
    let also;
    let text = "";
    let are_change_in_is;
    let length_change_in_lengths;

    if (table < 1) {
        table = "0"
    } else {
        table = table
    }

    if (lines < 1) {
        lines = "0"
    } else {
        lines = lines
    }

    if (table == lines) {
        also = "also"
    } else {
        also = ""
    }

    if (lines > 1) {
        are_change_in_is = "are"
    } else {
        are_change_in_is = "is"
    }

    if (lines > 1) {
        length_change_in_lengths = "lengths"
    } else {
        length_change_in_lengths = "length"
    }


    let info = `Your table is ${table} and ${length_change_in_lengths} ${are_change_in_is} ${also} ${lines}`;
    document.getElementById("info").innerHTML = info;

    lines++;

    for (let i = 1; i < lines; i++) {
        text += table + ` x ` + i + ` = ` + i * table + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
    document.getElementById("create").innerHTML = "Created by Muhammad";
}
