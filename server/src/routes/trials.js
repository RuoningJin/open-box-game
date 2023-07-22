const router = require("express").Router();

module.exports = db => {
  router.get("/trials", (request, response) => {
    db.query(`SELECT * FROM trials`).then(({ rows: trials }) => {
      response.json(trials);
    });
  });
  return router;
};
