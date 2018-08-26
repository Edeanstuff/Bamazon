var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });
  
  function onStart() {
    connection.query("SELECT * FROM products;", function(err, data) {
        for(i=0; i<10; i++){
        console.log("-----------------");
        console.log("ID: " + data[i].id);
        console.log("Product Name: " + data[i].product_name);
        console.log("Price: " + data[i].price);
        console.log("Quantity: " + data[i].stock_quantity);
        console.log("-----------------");
    }
    question();
});
function question() {
      inquirer.prompt ({
          name: "which",
          message: "What would you like to purchase?"
      }).then(function(response){
            
      });
  }
}
  onStart();