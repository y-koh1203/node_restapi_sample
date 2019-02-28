import mysql from 'mysql';
import connection_config from './src/config/mysql/connection';

const connection = mysql.createConnection(connection_config);

//console.log(connection_config);

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
});

connection.end();
