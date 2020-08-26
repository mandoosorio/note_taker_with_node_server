var notesData = require("../../../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
      return res.json(notesData);
    });
    var id = 0;

    app.post("/api/notes", function(req, res) {
      id++;
      req.body.id = id;
      notesData.push(req.body);
      res.json(true);
    });
    
    app.delete("/api/notes/:id", function(req, res) {
      for (i = 0; i < notesData.length; i++) {
        if (notesData[i].id == req.body.id) {
          notesData.splice(i, 1);
        }
      }

      return res.json(notesData);
    });
};