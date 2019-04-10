var path = require("path");


module.exports = function(app) {
    // handles what html pages are shown

    //add yourself
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
        })
    //shows your friend
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

};

