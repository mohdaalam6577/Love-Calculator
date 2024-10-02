function  love() {
    let name1 = document.getElementById("nameOne").value;
    let name2 = document.getElementById("nameTwo").value;

    if (name1.length <= 2) {
        alert("Enter at least 3 character");
    } else if (name2.length <= 2) {
        alert("Enter at least 3 character");
    } else {
        let random = Math.floor(Math.random() * 100) + 1;
        document.getElementById("print").innerHTML = random + "%";
    }
}