
const config = {
  user: 'test',
  password: 'A12345a',
  server: '78.186.17.110', // You can use 'localhost\\instance' to connect to named instance
  database: 'SINIFTANIM',
}
export default async function handler(req, res) {
  res.send('Mustafa')
  var sql = require("mssql");

  // config for your database
  var config = {
    user: 'test',
    password: 'A12345a',
    server: '78.186.17.110', // You can use 'localhost\\instance' to connect to named instance

    database: 'SINIFTANIM',
    encrypt: true

  };

  // connect to your database
  sql.connect(config, function (err) {
     console.log('dasda')
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from Ogrenci', function (err, recordset) {

      if (err) console.log(err)

      // send records as a response
      res.send(recordset);

    });
  });
}
