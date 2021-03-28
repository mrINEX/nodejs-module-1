const request = require('request');
const csv = require('csvtojson');

csv({ output: "line" })
  .fromStream(request.get('https://epa.ms/nodejs19-hw1-ex1'))
  .subscribe((json)=>{
    return new Promise((resolve,reject) => {
      console.log(json);
      // long operation for each json e.g. transform / write into database.
    })
  },(err) => process.stdout.write(err), (end) => process.stdout.write(`Completed: ${end}`));
