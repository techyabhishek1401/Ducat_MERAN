const fs=require('fs');

fs.readFile('./file.html','UTF-8',(err,data)=>{
    if(err){
        console.log("error Occured:",err);
    }
    else console.log('file content:',data)
})

fs.writeFile('abc.txt','new content added',(err,data)=>{
    if(err){
        console.log("error Occured:",err);
    }
    else console.log('write success:')
})


fs.appendFile('message.txt', 'data to append rr', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });