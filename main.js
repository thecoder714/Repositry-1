array1 = [];

function submit() {
    var name1 = document.getElementById("s1").value;
    var name2 = document.getElementById("s2").value;
    var name3 = document.getElementById("s3").value;
    var name4 = document.getElementById("s4").value;
    var name5 = document.getElementById("s5").value;

    array1.push(name1);
    array1.push(name2);
    array1.push(name3);
    array1.push(name4);
    array1.push(name5);

    console.log(array1);

    document.getElementById("displayname").innerHTML = array1;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sorter() {
    array1.sort();
    console.log(array1);
    document.getElementById("displayname").innerHTML = array1; 
}