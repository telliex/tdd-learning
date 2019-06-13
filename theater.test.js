


let statement=require('./theater.js')

describe('This is Theater',()=>{

  describe('output match ',()=>{


    test('put default data', () => {
      let invoice= {
        "customer":"BigCo",
        "performances":[
          {"playID":"hamlet",
            "audience":55},
          {"playID":"as-like",
            "audience":35},
          {"playID":"othello",
            "audience":40}
        ]
      }
      let plays={
        "hamlet":{"name":"Hamlet","type":"tragedy"},
        "as-like":{"name":"As You Like It","type":"comedy"},
        "othello":{"name":"Othello","type":"tragedy"}
      }
      // let theater=new Theater(invoice,plays);

      expect(statement(invoice,plays)).toEqual(expect.stringContaining(`Statement for BigCo 
tragedy: $650.00 (55 seats) 
comedy: $580.00 (35 seats) 
tragedy: $500.00 (40 seats) 
Amount owed is $1,730.00 
You earned 47 credits `));
    })

  })
  
})
