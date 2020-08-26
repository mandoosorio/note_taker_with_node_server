var notesData = require("../../../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
      console.log("retrieved");
      console.log("NOTES DATA FROM GET", notesData);
      return res.json(notesData);
    });
    var id = 0;

    app.post("/api/notes", function(req, res) {
      id++;
      req.body.id = id;

      console.log("posted");
      notesData.push(req.body);
      console.log("req.body from post", req.body);
      res.json(true);
      console.log("notes data from post", notesData);
    });
    
    app.delete("/api/notes/:id", function(req, res) {
      for (i = 0; i < notesData.length; i++) {
        if (notesData[i].id == req.body.id) {
          notesData.splice(i, 1);
          console.log("deleted");
        }
      }

      console.log("notes data", notesData);
      console.log("req from delete", req.body);
      return res.json(notesData);
    });
};