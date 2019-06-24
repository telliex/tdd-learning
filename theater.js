
// let invoice= require('./invoice.json');
// let plays= require('./plays.json');
import createStatementData from './createStatementData.js'

 function statement(invoice,plays){
  return renderplainText(createStatementData(invoice,plays));
}


function renderPlainText(data){
  let result=`Statement for ${data.customer}\n`;
  for(let perf of data.performances){
      //print line for this order
    result += `${perf.play.type}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  } 
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
}


function htmlStatement(invoice,plays){
  return renderHtml(createStatementData(invoice,plays))
}


function renderHtml(data){
  let result=`<h1>Statement for ${data.customer}</h1>\n`;
  result+=`<table>\n`;
  result+=`<tr><th>play</th><th>seat</th><th>cost</th></tr>\n`;
  for(let perf of data.performances){
      //print line for this order
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>\n`;
    result += `<td>${usd(perf.amount)}<td></tr>\n`;
  } 
  result +=`</table>\n`;
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
  return result;
}

function usd(aNumber){
  return new Intl.NumberFormat('en-US',{style:"currency",currency:"USD",minimumfractionDigits:2}).format(aNumber/100); 
}
