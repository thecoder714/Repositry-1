// define arrays

var names = ["Alfred", "Derick", "Matt", "Tom"];
var x = -1; 

// update

function update() {
    if (x <= 2) {
        x++;
    } else {
        x=0;
    }
    document.getElementById("name").innerHTML = names[x];
    document.getElementById("image").src = "p" + (x+1) + ".jpeg";
}

