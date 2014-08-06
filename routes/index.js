
exports.index = function(req, res) {
	res.render('index');
};

exports.subscribe = function(req, res) {
	res.render('thanks');
};

exports.api = function(req, res) {
  var json = {
    "test": "successfull",
     "action": req.params.action
  };
  var pg = require('pg');

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
    });
  });
  
  var jsonRes = JSON.stringify(json);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(jsonRes);
};

