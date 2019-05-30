
import FizzBuzz from './FizzBuzz'

describe('This is FizzBuzz game',()=>{
  let fizzBuzz=new FizzBuzz();
  describe('Day1,Task1',()=>{

    test('The fizzBuzz is defineded', () => {
      expect(fizzBuzz).toBeDefined();
    })

    test('If this input number is normal number', () =>{
      expect(fizzBuzz.checkDivisibleNumber(1)).toBe('1');
      expect(fizzBuzz.checkDivisibleNumber(2)).toBe('2');
    })

    test('If the number can be divisible by 3 , print Fizz',()=>{
      expect(fizzBuzz.checkDivisibleNumber(3)).toBe('Fizz');
    })

    test('If the number can be divisible by 5 , print Buzz',()=>{
      expect(fizzBuzz.checkDivisibleNumber(5)).toBe('Buzz');
    })

    test('If the number can be divisible by 3 and 5 , print FizzBuzz', ()=>{
      expect(fizzBuzz.checkDivisibleNumber(15)).toBe('FizzBuzz');
    })
  })
  
  describe('Day1,Task2',()=>{
    test('If this input number is normal number', () =>{
      expect(fizzBuzz.checkDivisibleAndContainNumber(76)).toBe('76');
    })
    test.each`
    num   | expected
    ${33} |  ${'Fizz'}
    ${31} |  ${'Fizz'}
    ${23} |  ${'Fizz'}
    `('If the nember can be divisible by 3 and the nember contain 3',({num,expected})=>{
      expect(fizzBuzz.checkDivisibleAndContainNumber(num)).toBe(expected);
    })

    test.each`
    num   | expected
    ${55} |  ${'Buzz'}
    ${25} |  ${'Buzz'}
    ${52} |  ${'Buzz'}
    `('If the nember can be divisible by 5 and the nember contain 5',({num, expected})=>{
      expect(fizzBuzz.checkDivisibleAndContainNumber(num)).toBe(expected);
    })

    test('If the number can be divisible by 3 and 5 ',()=>{
      expect(fizzBuzz.checkDivisibleAndContainNumber(15)).toBe('FizzBuzz');
    })

  })
})
