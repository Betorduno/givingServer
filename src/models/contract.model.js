var dbConn = require("./../../config/db.config");
//Employee object create
var UserData = function (userData) {
  this.tipo_id = userData.tipo_id;
  this.id = userData.id;
  this.nombre = userData.nombre;
  this.apellido = userData.apellido;
  this.cat = userData.cat;
  this.edad = userData.edad;
  this.cargo = userData.cargo;
};

UserData.create = function (newUSer, result) {
  dbConn.query("INSERT INTO users set ?", newUSer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// UserData.findById = function (id, result) {
//   dbConn.query(
//     "Select * from users where id = ? ",
//     id,
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };

UserData.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("contract : ", res);
      result(null, res);
    }
  });
};

UserData.update = function (id, contractUpdate, result) {
  dbConn.query(
    "UPDATE users SET tipo_id=?,id=?,nombre=?,apellido=?,cat=?,edad=?,cargo=? WHERE contract_id = ?",
    [
      contractUpdate.tipo_id,
      contractUpdate.id,
      contractUpdate.nombre,
      contractUpdate.apellido,
      contractUpdate.cat,
      contractUpdate.edad,
      contractUpdate.cargo,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

UserData.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE contract_id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = UserData;
