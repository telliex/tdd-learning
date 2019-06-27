export default function createStatementData(invoice,plays){
  const result={};
  result.customer=invoice.customer;
  result.performances=invoice.performances.map(enrichPerformance);
  result.totalAmount=totalAmount(result);
  result.totalVolumeCredits=totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance){
    const calculator=createPerformanceCalculator(aPerformance,playFor(aPerformance));
    const result=Object.assign({},aPerformance);
    result.play=playFor(result);
    result.amount=calculator.amount;
    result.volumeCredits=calculator.volumeCredits;
    return result;
  }

  function totalAmount(data){ 
    return data.performances.reduce((total,p)=>total+p.amount,0)
  }  
  
  function totalVolumeCredits(data){
    return data.performances.reduce((total,p)=>total+p.volumeCredits,0)
  }

  function playFor(aPerformance){
    return plays[aPerformance.playID];
  }

}



const createPerformanceCalculator =(aPerformance,aPlay)=>{
  switch(aPlay.type){
    case "tragedy": return new TragedyCalculator(aPerformance,aPlay);
    case "comedy": return new ComedyCalculator(aPerformance,aPlay);
    default:
      throw new Error('nuknow type: ${aPlay.type}')
  }

  // return new PerformanceCalculator(aPerformance,aPlay)
}

class PerformanceCalculator{
  constructor(aPerformance,aPlay){
    this.performance=aPerformance;
    this.play=aPlay;
  }
  get amount(){
    throw new Error('subclass responsibility')
  }
  get volumeCredits(){
    return Math.max(this.performance.audience-30,0)
  }  

}



class TragedyCalculator extends PerformanceCalculator{
  get amount(){
    let result=40000;
    if(this.performance.audience>30){
      result += 1000*(this.performance.audience-30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator{
  get amount(){
    let result=30000;
    if(this.performance.audience>20){
      result += 10000+500*(this.performance.audience-20);
    }
    result += 300 * this.performance.audience;
    return result;
  }
  get getVolumeCredits(){
    return super.volumeCredits+Math.floor(this.aPerformance.audience/5);
  }
}
