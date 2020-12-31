#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
newyearDate = new Date(`Jan 1, ${new Date().getFullYear()+1} 00:00:00`).getTime(),
newOver = new Date(`Jan 2 ${new Date().getFullYear()+1} 00:00:00`).getTime(),
logUpdate = require('log-update'),
chalk = require('chalk'); 
setInterval(() => {
var now = new Date().getTime(),   
distance = newyearDate - now,
days = Math.floor(distance / (1000 * 60 * 60 * 24)),
hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
seconds = Math.floor((distance % (1000 * 60)) / 1000);
figlet(Check(now), (err, data) => {
if(err) throw err
logUpdate('\n' + chalk.red.bold(data) +'\n' + Box('90x10',{text: chalk.bold.green(`Days: ${days} |  Hours: ${hours} |  Minutes:${mins} | Seconds: ${seconds}`)}))
})
},500)

function Check(now){
if(now>newyearDate&&now<newOver) return 'Happy New Year'
else return 'New Year Is On Its Way'
}