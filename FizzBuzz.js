
/**
 * @description
 * 任务1-1：写一个程序，打印出从 1 到 100 的数字，将其中3的倍数替换成“Fizz”，5的倍数替换成“Buzz”。既能被3整除、又能被5整除的数则替换成“FizzBuzz”。
 * 任务1-2：如果一个数能被 3 整除，或者包含数字 3，那么这个数就是“Fizz”
 *          如果一个数能被 5 整除，或者包含数字 5，那么这个数就是“Buzz”
 * @export
 * @class FizzBuzz
 */
export default class FizzBuzz{
  constructor(){
  }
  checkDivisibleNumber(inputNum){
    let result='';
    if(this.isDivided(3,inputNum)){
      result+='Fizz';
    }
    if(this.isDivided(5,inputNum)){
      result+='Buzz';
    }
    if(result===''){
      result+=String(inputNum)
    }
    return result;
  }

  checkDivisibleAndContainNumber(inputNum){
    if(this.isDivided(3,inputNum) && this.isDivided(5,inputNum)){
      return 'FizzBuzz';
    }

    if(this.isDivided(3,inputNum) || this.isContain(3,String(inputNum))){
      return 'Fizz';
    }

    if(this.isDivided(5,inputNum) || this.isContain(5,String(inputNum))){
      return 'Buzz'
    }
    return String(inputNum);
  }

  isContain(num,inputNum){
    return RegExp(num).test(String(inputNum))
  }
  isDivided(num,inputNum){
    return inputNum % num ===0
  }

}
