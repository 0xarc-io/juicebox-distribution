let csvToJson = require('convert-csv-to-json');
let path = require('path');
let fs = require('fs');

let fileInputName = path.join(__dirname, "../../csvConfig.csv");
let fileOutputName = path.join(__dirname, "../../config.json");

let file = fs.readFileSync(fileInputName, 'utf8');
// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
csvJSON(file);
function csvJSON(csv: string){

    var lines = csv.split("\n");
  
    var result = {
        decimals: 18,
        airdrop: {}
    }
  
    var headers: any = lines[0].split(",");
    
    for(var i = 1 ; i < lines.length; i++){
  
        var obj: any = {};
        var currentline = lines[i].split(",");

        obj[currentline[0].toLowerCase()] = parseInt(currentline[1]);
  
        result.airdrop = obj;
  
    }

    fs.writeFileSync(fileOutputName, JSON.stringify(result, null, 2));
    
    // //return result; //JavaScript object
    // console.log(JSON.stringify(headers));
  }