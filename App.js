#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
chalk = require('chalk'); 

function Title(message){
figlet(message, (err, data) => {
if (err) throw err     
console.log(chalk.red(message))
})}