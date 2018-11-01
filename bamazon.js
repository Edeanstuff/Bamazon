var mysql = require("mysql");
var inquirer = require("inquirer");
var final;
var idValue;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

function onStart() {
    connection.query("SELECT * FROM products;", function (err, data) {
        for (i = 0; i < 10; i++) {
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
        inquirer.prompt({
            name: "which",
            message: "What would you like to purchase?"
        }).then(function (response) {
            idValue = response.which;
            question2();
        });
    }
    function question2() {
        inquirer.prompt({
            name: "amount",
            message: "How Many?"
        }).then(function (response) {
            connection.query("UPDATE products set stock_quantity = stock_quantity - " + response.amount + " WHERE id =" + idValue, function (err, data) {
                if (err) {
                    console.log(err)
                } else {
                    connection.query("SELECT * from products", function (err, data) {
                        if (err) {
                            console.log(err);
                        } else if (data[idValue -1].stock_quantity < 0) {
                            console.log("There is not enough of that product");
                            connection.query("UPDATE products set stock_quantity = stock_quantity + " + response.amount + " WHERE id =" + idValue, function (err, data) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    process.exit(0)
                                }
                            })
                        }else {
                            console.log("The new amount for this item is: " + data[idValue - 1].stock_quantity);
                            process.exit();
                        }
                    })
                }
            })

        });
    }
}
onStart();

