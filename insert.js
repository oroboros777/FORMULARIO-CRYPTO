var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Proz@2023",
  database: "hugão"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Dados_Pessoais (Nome, CPF, Idade, Endereco) VALUES ?";
  var values = [
    ['Beck', '12345678', 15, 'Açaí'],
    ['Phoebe', '12223334', 25, 'Açaí'],
    ['Brisa', '87654321', 15, 'Açaí']

   
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});