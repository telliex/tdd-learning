
let invoice= require('./invoice.json');
let plays= require('./plays.json');

module.exports = function (invoice,plays){
  let result=`Statement for ${invoice.customer} \n`;
  for(let perf of invoice.performances){
      //print line for this order
    result += `${playFor(perf).type}: ${usd(amountFor(perf))} (${perf.audience} seats) \n`;
  } 
  result += `Amount owed is ${usd(totalAmount())} \n`;
  result += `You earned ${totalVolumeCredits()} credits \n`;

  return result;

  function totalAmount(){
    let result = 0;
    for(let perf of invoice.performances){
      result += amountFor(perf);
    }     
    return result;
  }  
  
  function totalVolumeCredits(){
    let result = 0;
      for(let perf of invoice.performances){
        result += volumeCreditsFor(perf,plays);
      }
    return result;
  }
  
  function usd(aNumber){
    return new Intl.NumberFormat('en-US',{style:"currency",currency:"USD",minimumfractionDigits:2}).format(aNumber/100); 
  }
  
  function volumeCreditsFor(aPerformance,plays){
    let result = 0;
    result+=Math.max(aPerformance.audience-30,0);
    if("comedy"===playFor(aPerformance).type){
      result += Math.floor(aPerformance.audience/5);
    }
    return result
  }  
    
  function amountFor(aPerformance){
    let result=0;
    switch(playFor(aPerformance).type){
      case "tragedy":
        result=40000;
        if(aPerformance.audience>30){
          result += 1000*(aPerformance.audience-30);
        }
      break;
      case "comedy":
        result=30000;
        if(aPerformance.audience>20){
          result += 10000+500*(aPerformance.audience-20);
        }
        result += 300 * aPerformance.audience;
      break;
      default:
        throw new Error(`unknow type : ${playFor(aPerformance).type}`);
    }
    return result;
  }
  
  function playFor(aPerformance){
    return plays[aPerformance.playID];
  }
}



