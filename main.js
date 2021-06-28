menu = ["Veg Margherita Pizza", "Tandoori Pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu.sort();

    for (let i = 0; i < menu.length; i++) {
        htmldata += '<li>' + menu[i];
    }
    htmldata += '</ol>';
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_top() {
    var item = document.getElementById("add_item").value;
    menu.push(item);
    getmenu();
}

