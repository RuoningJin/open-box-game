const router = require("express").Router();

module.exports = db => {
  router.get("/trials", (request, response) => {
    db.query(`
      SELECT
        t.id AS trial_id,
        t.session,
        t.bait_1_category,
        c1.name AS bait_1_category_name,
        c1.positive AS bait_1_positive,
        c1.reward AS bait_1_reward,
        t.bait_2_category,
        c2.name AS bait_2_category_name,
        c2.positive AS bait_2_positive,
        c2.reward AS bait_2_reward,
        t.bait_3_category,
        c3.name AS bait_3_category_name,
        c3.positive AS bait_3_positive,
        c3.reward AS bait_3_reward
        FROM trials t
        JOIN categories c1 ON t.bait_1_category = c1.id
        JOIN categories c2 ON t.bait_2_category = c2.id
        JOIN categories c3 ON t.bait_3_category = c3.id;
    `).then(({ rows: trials }) => {
      response.json(trials);
    });
  });
  return router;
};
