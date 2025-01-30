# Countdown to Graduation

- [ ] set up the server
- [ ] use a .env file
- [ ] use a catch-all route OR create a custom 404.ejs
- [ ] find the bomb background graphic
- [ ] add flashing effects at 24 hrs

+--------------------+
|   User Accesses    |
|     '/' Route      |
+---------+----------+
          |
          v
+--------------------+
|   Express Server   |
| (Listens on 2103)  |
+---------+----------+
          |
          v
+--------------------+
| Renders 'index.ejs'|
|  with Countdown    |
+---------+----------+
          |
          v
+--------------------+
| JavaScript Updates |
|   Countdown Timer  |
|     Every Second   |
+--------------------+
