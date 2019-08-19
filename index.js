exports.handler = (event, context)=>{
  
  context.done(null, {
    "statusCode": 200,// |301|4XX|5XX,
    "headers":{
      "Content-Type": "text/html",
    },
    "body": require('fs').readFileSync('./build'+event.path).toString()
  });
}
