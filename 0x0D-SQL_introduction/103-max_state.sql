-- Displays the maximum temp.
-- in the order of State name.

SELECT state, MAX(value) as max_temp
FROM temperatures
GROUP BY state
ORDER BY state ASC;
