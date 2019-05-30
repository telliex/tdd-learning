
import Args from './Args'

describe('This is Args',()=>{
  let args=new Args();
  describe('Day4,Task1',()=>{
    
    test('No input para ', () => {
      let schema={
        logging:{ 
          name:'l',
          style:'Boolean',
          autoReturnWhenAliveNoValue:'true',
          defaultValuenNoFlag:false,
          defaultValuenHaveFlag:true,
          errorMessage:'',
          description:'是否记录日志'
        },
        port:{
          name:'p',
          style:'Integer',
          autoReturnWhenAliveNoValue:'error',
          defaultValuenNoFlag:0,
          defaultValuenHaveFlag:true,
          errorMessage:'You need provide correct port number',
          description:'端口号'
        },
        directory:{
          name:'d',
          style:'String',
          autoReturnWhenAliveNoValue:'error',
          defaultValuenNoFlag:'/',
          defaultValuenHaveFlag:true,
          errorMessage:'You need provide String url',
          description:'目录'
        }
      }
      expect(args.resolver()).toEqual(schema);
    })

    test('Only input logging pars', () => {
      let inputParameter="-l";
      let noParameter="";
      expect(args.resolver(inputParameter).l).toBeTruthy();
    })

    test('Only input port pars', () => {
      let inputParameter="-p 8080";
      expect(args.resolver(inputParameter).p).toBe(8080);
      expect(args.resolver(inputParameter).l).toBeFalsy();
      expect(args.resolver(inputParameter).l).not.toBeUndefined();
    })

    test('Only input directory pars', () => {
      let inputParameter="-d /usr/logs";
      expect(args.resolver(inputParameter).d).toBe('/usr/logs');
    })

    test('Both input port pars & directory pars', () => {
      let inputParameter="-p 3306 -d /usr/logs/xxx";
      expect(args.resolver(inputParameter).d).toBe('/usr/logs/xxx');
      expect(args.resolver(inputParameter).p).toBe(3306);
    })

  })
  
})
