const fs=require('fs');

fs.readFile('./file.csv','UTF-8',(err,data)=>{
    if(err){
        console.log("error Occured:",err);
    }
    else console.log('file content:',data);
    console.log(data.split('\r\n'));
    let rowArray=data.split('\r\n');
  let medicineArray=[];
    rowArray.map((row,index)=>{
        medicineArray.push(row.split(',')[1]+","+row.split(',')[4]+'\r\n');
    })
    console.table(medicineArray.slice(0,487))
   // console.log(medicineArray)
    fs.writeFile('medicine.csv',medicineArray,(err,data)=>{
        if(err)
        console.log(err)
       else console.log('success')
    })
})