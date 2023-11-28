\c players_dev;

INSERT INTO players (playerName, img_url, yearDrafted, teamDraftedBy, rookieOfTheYear)
VALUES
('Michael Jordan', 'https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTY4MTg2MDIzMDQ5MDQ1MjY1/1983-michael-jordan-001283945jpg.webp', '1984', 'Chicago Bulls', true),

('Allen Iverson', 'https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_571/MTY4MTI3NTczMTEwNTY0MTEz/allen-iverson.webp', '1996', 'Philadelphia 76ers', true),

('Kobe Bryant', 'https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTcwMDIzMjI5MTMyMzgzNjA5/005721185final.webp', '1996', 'Los Angeles Lakers', false);


INSERT INTO reviews (player_id, reviewerName, content, favorite, rookieRating)
VALUES
('1', 'Joe', 'Michael Jordan is the best basketball player ever', true, 10),

('2', 'Thomas', 'Allen Iverson was the king of the crossover',true, 9),

('3', 'Malik', 'Kobe sat on the bench his rookie year,although Kobe developed into generational talent', false, 1);