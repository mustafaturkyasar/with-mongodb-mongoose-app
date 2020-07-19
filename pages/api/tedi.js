var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var config = {
    server: '78.186.17.110',  //update me
    connectionTimeout: 32000,
    authentication: {
        type: 'default',
        options: {
            userName: 'test', //update me
            password: 'A12345a'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'SINIFTANIM'  //update me
    }
};

export default async function handler(request, res) {
    var connection = new Connection(config);
    connection.on('connect', function (err) {
        console.log(err)
        var Request = require('tedious').Request;
        request = new Request("select 42, 'hello world'", function (err, rowCount) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(rowCount + ' rows');
            }
        });

        request.on('row', function (columns) {
            columns.forEach(function (column) {
                console.log(column.value);
            });
        });

        connection.execSql(request);
    });

}
