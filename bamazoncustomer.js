var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",


  password: "root",
  database: "bamazon_DB",
})

connection.connect(function (err) {
  if (err) {
    console.log("err connecting to: " + err.stack)
  }

  start();
});
function start() {
  connection.query("SELECT * from products", function (err, res) {
    if (err) throw err;
    //console.log(res)
    console.table(res)
    askForId(res);
  })
}
function askForId(inventory) {
  inquirer.prompt([
    {
      name: "id",
      message: "What is the ID of the item you would like to buy?",
      type: "input"  
    },

    {
      name: "quantity",
      message: "How many would you like to purchase?",
      type: "input"
    }
  ]).then(function (ans) {
    var UserEnteredId = ans.id;
    var userQuantity = ans.quantity;
    var rowThatSelected = checkForId(UserEnteredId,userQuantity,inventory);
    if(rowThatSelected){
      askForQuantity(rowThatSelected);
    }

  })
}
function checkForId(id, itemnum, inventory){
    for(i = 0; i<inventory.length; i++){
      
      if(id == inventory[i].id){
        console.log(inventory[i].quantity)
        if(itemnum <=inventory[i].quantity){
          console.log("purchase possible")
          
          
        }else{
          console.log("insuffucient stock")
        }
      }

    }
  
  return null;
}

function askForQuantity(row) {
  inquirer.prompt([
    {
      name: "quantity",
      message: "How many would you like to buy?",
      type: "input"
    }
  ]).then(function (ans) {
    var userQuantity = ans.quantity;
    if(userQuantity>row.stock){
      console.log("insufficent quantity")
      start() 
      
    }
    else{
      makepurchase(row, userquantity)

    }

  })
}
function makepurchase(row, quantity){
  connection.query("UPDATE products SET stock = stock - ? WHERE id = ?", [quantity, row.id], function(err, res){
    console.log("successfully purchase");

  })
}
