var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
    }
    display_all();

}



function displayTotal() {
    document.getElementById("total").innerHTML = "Total order amount is R" + totalOrderAmt.toFixed(2);
}


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: left;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: left;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: left;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: left;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: left;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: left;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: left;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }
    myTable += "</table>";

    myTable += "<br/></br></br><button onclick='displayTotal(" + i + ")'>checkOut</button>";


    // document.write(myTable); 
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}