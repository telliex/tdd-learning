
/**
 * @description
 * 
 * 
 * 
 * @export
 * @class Args
 */
export default class Args{
  constructor(){
    // 参数结构
    this.schema={
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
  }
  resolver(para){
  
    let returnObject={}
    if(!para){
      returnObject=this.schema
    }
    if(para){
      let paraArray=para.split('-');

      paraArray.forEach(function(element){
        let isLogging=false;
        if(element.split(" ")[0]==="l"){
          returnObject.l=true;
          isLogging=true;
        }
        if(element.split(" ")[0]==="p"){
          returnObject.p=Number(element.split(" ")[1]);
          
        }
        if(element.split(" ")[0]==="d"){
          returnObject.d=String(element.split(" ")[1]);
        }
        if(isLogging===false){
          returnObject.l=false;
        }
      })
      
    }






    // if(para.split('-')[1]===this.schema.logging.name){
    //   returnObject.l=true
    // }

    // if(para==="-p"){
    //   return 
    // }
    // return false
    return returnObject
  }
}
