var page = require('webpage').create();
page.open('https://blog.mindaugas.cf', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
