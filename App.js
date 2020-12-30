#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
newyearDate = new Date(`Jan 1`),
now = new Date().toJSON().slice(5,10),
chalk = require('chalk'); 

function Title(message){
figlet(message, (err, data) => {
if (err) throw err     
console.log(chalk.red(message))
})}