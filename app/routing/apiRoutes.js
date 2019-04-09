//load in friend table
var friendsTable = require("../data/friends");

module.exports = function (app) {
    //visit
    app.get("/api/friends", function(req, res) {
        res.json(friendsTable)
    });

    //post yourself
    app.post("/api/friends", function(req, res) {
        friendsTable.push(req.body)
        res.json(true);
    })
};