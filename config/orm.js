var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (burg_name, dev, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ?, ?)";
        connection.query(queryString, [burg_name, dev], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (dev, key, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [dev, key], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;

