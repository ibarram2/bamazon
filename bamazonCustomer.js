"use strict";

(function(){
    var mysql = require( "mysql" );
    var inquirer = require("inquirer");

var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "D1ssolve",
    database: "bamazon" } );



function connectDB(){
    connection.connect( function( error ){
        if( error )
            throw error;

        // console.log( "connected at " + connection.threadId );

});

}
function readProducts() {
  console.log("Displaying all available products below...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    console.log("--------------------------------------------------\n");
    start()
    //connection.end();
  });
  
}

function start() {
  inquirer
    .prompt({
      name: "itemSelect",
      type: "rawlist",
      message: "What is the ID # of the product you would like to purchase?",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.itemSelect === "1") {
        console.log("nice")
        
        
        console.log("--------------------------------------------------\n");
        console.log("yup..."+answer.itemSelect)
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "2") {
        console.log("nice2")
        
        console.log("--------------------------------------------------\n");
        console.log("yup..."+answer.itemSelect)
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "3") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "4") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "5") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "6") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "7") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "8") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "9") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else if(answer.itemSelect === "10") {
        console.log("nice")
        
        console.log("--------------------------------------------------\n");
        amount(answer.itemSelect)
      }
       else {
         console.log("Invalid product ID#, please try a number between 1 and 10.")
         console.log("--------------------------------------------------\n");
         start(); 
        
      }
    });
}

function amount(choice) {
  inquirer
    .prompt({
      name: "itemAmount",
      type: "rawlist",
      message: "How many would you like to buy?",
      choices: ["1", "2", "3", "4", "5"]
    })
    .then(function(answer) {

      if (answer.itemAmount === "1" & choice === "1") {
        
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 1 AND stock_quantity > 0");
            console.log("done");
      }
      else if (answer.itemAmount === "2" & choice === "1") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 1 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "1") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 1 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "1") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 1 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "1") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 1 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "2") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 2 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "2") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 2 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "2") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 2 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "2") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 2 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "2") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 2 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "3") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 3 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "3") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 3 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "3") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 3 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "3") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 3 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "3") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 3 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "4") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 4 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "4") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 4 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "4") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 4 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "4") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 4 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "4") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 4 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "5") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 5 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "5") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 5 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "5") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 5 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "5") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 5 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "5") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 5 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "6") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 6 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "6") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 6 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "6") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 6 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "6") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 6 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "6") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 6 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "7") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 7 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "7") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 7 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "7") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 7 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "7") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 7 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "7") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 7 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "8") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 8 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "8") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 8 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "8") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 8 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "8") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 8 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "8") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 8 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "9") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 9 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "9") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 9 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "9") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 9 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "9") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 9 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "9") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 9 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "1" & choice === "10") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE item_id = 10 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "2" & choice === "10") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 2 WHERE item_id = 10 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "3" & choice === "10") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 3 WHERE item_id = 10 AND stock_quantity > 0");
            console.log("done");
         
      }
      else if (answer.itemAmount === "4" & choice === "10") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 4 WHERE item_id = 10 AND stock_quantity > 0");
            console.log("done");
        
      }
      else if (answer.itemAmount === "5" & choice === "10") {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - 5 WHERE item_id = 10 AND stock_quantity > 0");
            console.log("done");
        
      }
      else {
         console.log("Sorry, cannot place order for that amount. Please try again.")
         console.log("choice is..." + choice);
         console.log(answer.itemAmount);
         start(); 
      }
    });
}

readProducts();

})();

//Still need to check if store has enough inventory and console.log the total cost of purchase...sorry