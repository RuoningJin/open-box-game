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

  router.post("/users:id", (request, response) => {
    const { userId, bait1, bait2, bait3, baitChoice, isPositive, hasReward} = request.body;

    db.query(`
      INSERT INTO user_trial (user_id, bait_1, bait_2, bait_3, bait_choice, is_positive, has_reward) VALUES ($1::integer, $2::integer, $3::integer, $4::integer, $5::integer, $6::boolean, $7::boolean)
    `,
      [userId, bait1, bait2, bait3, baitChoice, isPositive, hasReward]
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });
  return router;
};

