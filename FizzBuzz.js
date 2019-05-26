export default class FizzBuzz{
  checkDivisibleNumber(inputNum){
    if(this.isDivided(3,inputNum) && this.isDivided(5,inputNum)){
      return 'FizzBuzz';
    }
    if(this.isDivided(3,inputNum)){
      return 'Fizz';
    }
    if(this.isDivided(5,inputNum)){
      return 'Buzz';
    }
    return String(inputNum);
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
