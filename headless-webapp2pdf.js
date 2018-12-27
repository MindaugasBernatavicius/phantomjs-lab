var wpage = require('webpage').create(); 
var url = "https://en.wikipedia.org/wiki/Main_Page"; 
var output = "wiki-home.pdf"; 

wpage.paperSize = { 
   width: screen.width+'px', 
   height: '1500px', 
   
   margin: {
      'top':'50px', 
      'left':'50px', 
      'rigtht':'50px' 
   }, 
   orientation:'portrait', 
   header: { 
      height: "1cm", 
      contents: phantom.callback(function(pageNumber, nPages) { 
         return "<h5>Header <b>" + pageNumber + " / " + nPages + "</b></h5>"; 
      }) 
   }, 
   footer: { 
      height: "1cm", 
      contents: phantom.callback(function(pageNumber, nPages) {   
         return "<h5>Footer <b>" + pageNumber + " / " + nPages + "</b></h5>"; 
      }) 
   } 
} 
wpage.open(url, function (status) { 
   if (status !== 'success') { 
      console.log('Page is not opening'); 
      phantom.exit(); 
   } else { 
      wpage.render(output); 
      phantom.exit();     
   } 
});
