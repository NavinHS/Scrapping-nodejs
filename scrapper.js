var Xray = require('x-ray');
var x = Xray();                             
var url="http://yourstory.com/";            

x(url,'.list-block', [{                     //Accessing the titles which comes under .listblock class in div tag
  title: 'a',   
}]).paginate('.pagination a:last-child@href')//Pagination using the Next button

  .limit(6)                                  //Limiting pages for scrapping
  .write('results.json')                     //The json result will be saved in this file



 


