const router = require("express").Router();

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(`
      SELECT * from users
      ORDER BY id DESC
      LIMIT 1;
    `).then(({ rows: users }) => {
      response.json(users);
    });
  });

  router.post("/users", (request, response) => {
    const { isFemale, age } = request.body;

    db.query(`
      INSERT INTO users (is_female, age) VALUES ($1::boolean, $2::integer)
    `,
      [isFemale, age]
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });
  return router;
};
