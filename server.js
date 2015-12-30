rsj = require('rsj');
fs = require('fs'); 
 
function requestXmlFromCritikat() {
	rsj.r2j('http://www.critikat.com/spip.php?page=backend', function(json) { 
		console.log(json);
		
		fs.writeFile('tutu.json', json, function (err) {
		  if (err) return console.log(err);
		  console.log('json a été écrit');
		});

	})
}


setInterval(function(){
  console.log('test');
  requestXmlFromCritikat();
}, 5 * 1000);  