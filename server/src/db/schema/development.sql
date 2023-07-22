INSERT INTO categories (name, positive, reward)
VALUES 
  ('flower', 0.8, 0.8),
  ('car', 0.2, 0.2),
  ('fruit', 0.8, 0.2),
  ('ball', 0.2, 0.8);

INSERT INTO baits (name, category_id)
VALUES 
  ('flower1', 1),
  ('flower2', 1),
  ('flower3', 1),
  ('car1', 2),
  ('car2', 2),
  ('car3', 2),
  ('fruit1', 3),
  ('fruit2', 3),
  ('fruit3', 3),
  ('ball1', 4),
  ('ball2', 4),
  ('ball3', 4);

INSERT INTO trials (session, bait_1_category, bait_2_category, bait_3_category)
VALUES 
  (1, 1, 2, 3),
  (1, 1, 3, 2),
  (1, 2, 1, 3),
  (1, 2, 3, 1),
  (1, 3, 1, 2),
  (1, 3, 2, 1),
  (1, 1, 2, 4),
  (1, 1, 4, 2),
  (1, 2, 1, 4),
  (1, 2, 4, 1),
  (1, 4, 1, 2),
  (1, 4, 2, 1),
  (1, 1, 3, 4),
  (1, 1, 4, 3),
  (1, 3, 1, 4),
  (1, 3, 4, 1),
  (1, 4, 1, 3),
  (1, 4, 3, 1),
  (1, 2, 3, 4),
  (1, 2, 4, 3),
  (1, 3, 2, 4),
  (1, 3, 4, 2),
  (1, 4, 2, 3),
  (1, 4, 3, 2),
  (1, 1, 2, 3),
  (1, 1, 3, 2),
  (1, 2, 1, 3),
  (1, 2, 3, 1),
  (1, 3, 1, 2),
  (1, 3, 2, 1),
  (1, 1, 2, 4),
  (1, 1, 4, 2),
  (1, 2, 1, 4),
  (1, 2, 4, 1),
  (1, 4, 1, 2),
  (1, 4, 2, 1),
  (1, 1, 3, 4),
  (1, 1, 4, 3),
  (1, 3, 1, 4),
  (1, 3, 4, 1),
  (1, 4, 1, 3),
  (1, 4, 3, 1),
  (1, 2, 3, 4),
  (1, 2, 4, 3),
  (1, 3, 2, 4),
  (1, 3, 4, 2),
  (1, 4, 2, 3),
  (1, 4, 3, 2),
  (1, 1, 2, 3),
  (1, 1, 3, 2),
  (1, 2, 1, 3),
  (1, 2, 3, 1),
  (1, 3, 1, 2),
  (1, 3, 2, 1),
  (1, 1, 2, 4),
  (1, 1, 4, 2),
  (1, 2, 1, 4),
  (1, 2, 4, 1),
  (1, 4, 1, 2),
  (1, 4, 2, 1),
  (1, 1, 3, 4),
  (1, 1, 4, 3),
  (1, 3, 1, 4),
  (1, 3, 4, 1),
  (1, 4, 1, 3),
  (1, 4, 3, 1),
  (1, 2, 3, 4),
  (1, 2, 4, 3),
  (1, 3, 2, 4),
  (1, 3, 4, 2),
  (1, 4, 2, 3),
  (1, 4, 3, 2),
  (2, 1, 2, 3),
  (2, 1, 3, 2),
  (2, 2, 1, 3),
  (2, 2, 3, 1),
  (2, 3, 1, 2),
  (2, 3, 2, 1),
  (2, 1, 2, 4),
  (2, 1, 4, 2),
  (2, 2, 1, 4),
  (2, 2, 4, 1),
  (2, 4, 1, 2),
  (2, 4, 2, 1),
  (2, 1, 3, 4),
  (2, 1, 4, 3),
  (2, 3, 1, 4),
  (2, 3, 4, 1),
  (2, 4, 1, 3),
  (2, 4, 3, 1),
  (2, 2, 3, 4),
  (2, 2, 4, 3),
  (2, 3, 2, 4),
  (2, 3, 4, 2),
  (2, 4, 2, 3),
  (2, 4, 3, 2),
  (2, 1, 2, 3),
  (2, 1, 3, 2),
  (2, 2, 1, 3),
  (2, 2, 3, 1),
  (2, 3, 1, 2),
  (2, 3, 2, 1),
  (2, 1, 2, 4),
  (2, 1, 4, 2),
  (2, 2, 1, 4),
  (2, 2, 4, 1),
  (2, 4, 1, 2),
  (2, 4, 2, 1),
  (2, 1, 3, 4),
  (2, 1, 4, 3),
  (2, 3, 1, 4),
  (2, 3, 4, 1),
  (2, 4, 1, 3),
  (2, 4, 3, 1),
  (2, 2, 3, 4),
  (2, 2, 4, 3),
  (2, 3, 2, 4),
  (2, 3, 4, 2),
  (2, 4, 2, 3),
  (2, 4, 3, 2),
  (2, 1, 2, 3),
  (2, 1, 3, 2),
  (2, 2, 1, 3),
  (2, 2, 3, 1),
  (2, 3, 1, 2),
  (2, 3, 2, 1),
  (2, 1, 2, 4),
  (2, 1, 4, 2),
  (2, 2, 1, 4),
  (2, 2, 4, 1),
  (2, 4, 1, 2),
  (2, 4, 2, 1),
  (2, 1, 3, 4),
  (2, 1, 4, 3),
  (2, 3, 1, 4),
  (2, 3, 4, 1),
  (2, 4, 1, 3),
  (2, 4, 3, 1),
  (2, 2, 3, 4),
  (2, 2, 4, 3),
  (2, 3, 2, 4),
  (2, 3, 4, 2),
  (2, 4, 2, 3),
  (2, 4, 3, 2);