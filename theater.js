
let invoice=  require('./invoice.json');
let plays= require('./plays.json');

module.exports = function (invoice,plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result=`Statement for ${invoice.customer} \n`;
    // Intl.NumberFormat 是对语言敏感的格式化数字类的构造器类
    const format = new Intl.NumberFormat('en-US',{style:"currency",currency:"USD",minimumfractionDigits:2}).format; 
  
    for(let perf of invoice.performances){
      // 
      const play=playFor(perf)
      
      let thisAmount=amountFor(perf,play);

      // add volume credits
      volumeCredits += Math.max(perf.audience-30,0);
      // add extra credit for every ten comedy attendees
      if("comedy"===play.type){
        volumeCredits += Math.floor(perf.audience/5);
      }
      //print line for this order
      result += `${play.type}: ${format(thisAmount/100)} (${perf.audience} seats) \n`;
      totalAmount += thisAmount;
    }
  
    result += `Amount owed is ${format(totalAmount/100)} \n`;
    result += `You earned ${volumeCredits} credits \n`;
  
  
    return result;
  }
  
function amountFor(aPerformance,play){
  let thisAmount=0;
  switch(play.type){
    case "tragedy":
      thisAmount=40000;
      if(aPerformance.audience>30){
        thisAmount += 1000*(aPerformance.audience-30);
      }
    break;
    case "comedy":
      thisAmount=30000;
      if(aPerformance.audience>20){
        thisAmount += 10000+500*(aPerformance.audience-20);
      }
      thisAmount += 300 * aPerformance.audience;
    break;
    default:
      throw new Error(`unknow type : ${play.type}`);
  }
  return thisAmount;
}

function playFor(aPerformance){
  return plays[aPerformance.playID];
}
