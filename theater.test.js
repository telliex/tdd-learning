
let invoice= require('./invoice.json');
let plays= require('./plays.json');

let statement=require('./theater.js')

describe('This is Theater',()=>{

  describe('output match ',()=>{
    test('put default data', () => {

      expect(statement(invoice,plays)).toEqual(expect.stringContaining(`Statement for BigCo 
tragedy: $650.00 (55 seats) 
comedy: $580.00 (35 seats) 
tragedy: $500.00 (40 seats) 
Amount owed is $1,730.00 
You earned 47 credits `));
    })

  })
  
})
