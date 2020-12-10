"use strict";

alert('Welcome to my Website!');

var userFavColor = prompt('Please enter your favorite color: ');
var message = "Great, " + userFavColor + " is my favorite color too!";
alert(message);


var dailyRentalRateDollars = parseInt(prompt('What is the daily rental rate in dollars?'));
var littleMermaidDaysRented = parseInt(prompt('How many days was The Little Mermaid rented?'));
var brotherBearDaysRented = parseInt(prompt('How many days was Brother Bear rented?'));
var herculesDaysRented = parseInt(prompt('How many days was Hercules rented?'));
var totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert('Total cost is: ' + totalRentalCost);


