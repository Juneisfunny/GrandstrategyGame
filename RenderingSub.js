function DrawSub(arg, x, y, scale) {

      x1 = x + cameraX;
      y1 = y + cameraY;
      switch (arg) {
            case ("Setva"):
                  ctx.fillStyle = "#a69180"
                  ctx.fillRect(x1 - (50 * scale), y1 + (10 * scale), 60 * scale, 50 * scale);
                  ctx.fillRect(x1 - (75 * scale), y1 + (20 * scale), 110 * scale, 40 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 - (30 * scale), y1 + (25 * scale), 20 * scale, 35 * scale);

                  ctx.fillStyle = "#d8bfa9"
                  ctx.fillRect(x1, y1, 20 * scale, 60 * scale);
                  ctx.fillRect(x1 - (2 * scale), y1 + (20 * scale), 24 * scale, 40 * scale);
                  ctx.fillRect(x1 - (4 * scale), y1 + (40 * scale), 28 * scale, 20 * scale);

                  ctx.fillRect(x1 - (60 * scale), y1, 20 * scale, 60 * scale);
                  ctx.fillRect(x1 - (62 * scale), y1 + (20 * scale), 24 * scale, 40 * scale);
                  ctx.fillRect(x1 - (64 * scale), y1 + (40 * scale), 28 * scale, 20 * scale);

                  break;
            case ("Waslond1"):
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillRect(x1 + (3 * scale), y1 - (50 * scale), 4 * scale, 60 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 50 * scale, 85 * scale);
                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 50 * scale, 20 * scale);
                  ctx.fillStyle = "#c0c0c0"
                  ctx.fillRect(x1 + (10 * scale), y1 - (55 * scale), 30 * scale, 65 * scale);
                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (5 * scale), y1 - (40 * scale), 40 * scale, 15 * scale);
                  ctx.fillRect(x1 + (5 * scale), y1 - (45 * scale), 5 * scale, 15 * scale);
                  ctx.fillRect(x1 + (40 * scale), y1 - (45 * scale), 5 * scale, 15 * scale);
                  ctx.fillRect(x1 + (15 * scale), y1 - (64 * scale), 20 * scale, 20 * scale);
                  ctx.fillRect(x1 - (3 * scale), y1 - (40 * scale), 20 * scale, 10 * scale);
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillRect(x1 + (3 * scale), y1 - (30 * scale), 4 * scale, 40 * scale);
                  break;
            case ("Waslond2"):
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillRect(x1 + (3 * scale), y1 - (50 * scale), 4 * scale, 60 * scale);
                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 50 * scale, 20 * scale);

                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (5 * scale), y1 - (40 * scale), 40 * scale, 15 * scale);
                  ctx.fillRect(x1 + (5 * scale), y1 - (45 * scale), 5 * scale, 15 * scale);
                  ctx.fillRect(x1 + (40 * scale), y1 - (45 * scale), 5 * scale, 15 * scale);
                  ctx.fillRect(x1 + (15 * scale), y1 - (64 * scale), 20 * scale, 20 * scale);
                  ctx.fillRect(x1 - (3 * scale), y1 - (40 * scale), 20 * scale, 10 * scale);
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillRect(x1 + (3 * scale), y1 - (30 * scale), 4 * scale, 40 * scale);

                  ctx.fillStyle = "#c0c0c0"
                  ctx.fillRect(x1 + (10 * scale), y1 - (55 * scale), 30 * scale, 65 * scale);
                  break;
            case ("ElvenCourt"):
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (37 * scale), y1 - (50 * scale), 21 * scale, 30 * scale);
                  ctx.fillStyle = "#FFFFFF"
                  ctx.fillRect(x1 + (40 * scale), y1 - (43 * scale), 15 * scale, 16 * scale);
                  ctx.fillRect(x1 + (42 * scale), y1 - (47 * scale), 11 * scale, 16 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (45 * scale), y1 - (40 * scale), 5 * scale, 16 * scale);
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillRect(x1 + (35 * scale), y1 - (32 * scale), 25 * scale, 30 * scale);
                  ctx.fillRect(x1 + (35 * scale), y1 - (37 * scale), 25 * scale, 2 * scale);
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (35 * scale), y1 - (55 * scale), 25 * scale, 5 * scale);
                  ctx.fillRect(x1 + (39 * scale), y1 - (68 * scale), 17 * scale, 18 * scale);
                  ctx.fillRect(x1 + (41 * scale), y1 - (73 * scale), 13 * scale, 18 * scale);
                  break;
            case ("TreeOfLife"):
                  ctx.fillStyle = "#c0c0c0"
                  ctx.fillStyle = "#a0a0a0"
                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (0 * scale), y1 - (0 * scale), 50 * scale, 20 * scale);
                  ctx.fillStyle = "#c0c0c0"
                  ctx.fillRect(x1 + (5 * scale), y1 - (15 * scale), 40 * scale, 30 * scale);
                  ctx.fillStyle = "#d0d0d0"
                  ctx.fillRect(x1 + (0 * scale), y1 - (25 * scale), 50 * scale, 20 * scale);
                  ctx.fillStyle = "#6fa647"
                  ctx.fillRect(x1 + (2.5 * scale), y1 - (22.5 * scale), 45 * scale, 15 * scale);
                  ctx.fillStyle = "#72553d"
                  ctx.fillRect(x1 + (37 * scale), y1 - (60 * scale), 10 * scale, 20 * scale);
                  ctx.fillRect(x1 + (28 * scale), y1 - (48 * scale), 20 * scale, 10 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (15 * scale), y1 - (35 * scale), 20 * scale, 24 * scale);
                  ctx.fillRect(x1 + (17 * scale), y1 - (60 * scale), 16 * scale, 30 * scale);
                  ctx.fillStyle = "#ee9900"
                  ctx.fillRect(x1 - (7 * scale), y1 - (87.5 * scale), 50 * scale, 35 * scale);
                  ctx.fillRect(x1 - (10 * scale), y1 - (85 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (13 * scale), y1 - (82 * scale), 50 * scale, 25 * scale);
                  ctx.fillRect(x1 + (15 * scale), y1 - (79.5 * scale), 50 * scale, 20 * scale);
                  ctx.fillRect(x1 + (3 * scale), y1 - (72 * scale), 50 * scale, 20 * scale);
                  ctx.fillStyle = "#ffaa00"
                  ctx.fillRect(x1 + (5 * scale), y1 - (85 * scale), 40 * scale, 30 * scale);
                  ctx.fillRect(x1 + (10 * scale), y1 - (90 * scale), 30 * scale, 40 * scale);


                  break;
            case ("HighElves0"):
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (20 * scale), y1 - (5 * scale), 30 * scale, 25 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (30 * scale), y1 + (3 * scale), 10 * scale, 17 * scale);
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (17 * scale), y1 - (12 * scale), 35 * scale, 12 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (19 * scale), 29 * scale, 12 * scale);
                  break;

            case ("HighElves1"):
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (0 * scale), y1 - (6 * scale), 70 * scale, 20 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 + (3 * scale), 70 * scale, 17 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (10 * scale), 30 * scale, 30 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  break;
            case ("HighElves2"):
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (23 * scale), y1 - (22 * scale), 24 * scale, 20 * scale);

                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 70 * scale, 25 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (12 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (22 * scale), 30 * scale, 6 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 + (60 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 - (0 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillRect(x1 + (52.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);
                  ctx.fillRect(x1 + (12.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (-8 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillRect(x1 + (67 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  break;
            case ("HighElves3"):
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (21 * scale), y1 - (25 * scale), 28 * scale, 20 * scale);
                  ctx.fillRect(x1 + (23 * scale), y1 - (30 * scale), 24 * scale, 20 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (13 * scale), 70 * scale, 25 * scale);

                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (23 * scale), y1 - (22 * scale), 24 * scale, 20 * scale);

                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 70 * scale, 25 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (12 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (22 * scale), 30 * scale, 6 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 + (60 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 - (0 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillRect(x1 + (52.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);
                  ctx.fillRect(x1 + (12.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (-8 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillRect(x1 + (67 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (25 * scale), 15 * scale, 6 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (25 * scale), 15 * scale, 6 * scale);

                  ctx.fillRect(x1 + (-9 * scale), y1 - (30 * scale), 13 * scale, 6 * scale);
                  ctx.fillRect(x1 + (66 * scale), y1 - (30 * scale), 13 * scale, 6 * scale);
                  break;
            case ('DesertUndead0'):
                  ctx.fillStyle = "#331209"
                  ctx.fillRect(x1 + (0 * scale), y1 - (6 * scale), 70 * scale, 20 * scale);
                  ctx.fillStyle = "#94895d"
                  ctx.fillRect(x1 + (0 * scale), y1 + (3 * scale), 70 * scale, 17 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (10 * scale), 30 * scale, 30 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  break;
            case ("SlavicHumans0"):
                  ctx.fillStyle = "#6fa647"
                  ctx.fillRect(x1 + (17 * scale), y1 - (5 * scale), 35 * scale, 25 * scale);
                  ctx.fillRect(x1 + (13 * scale), y1 + (10 * scale), 44 * scale, 10 * scale);
                  ctx.fillRect(x1 + (15 * scale), y1 + (3 * scale), 40 * scale, 10 * scale);

                  ctx.fillStyle = "#6e583a"
                  ctx.fillRect(x1 + (19 * scale), y1 - (5 * scale), 31 * scale, 25 * scale);
                  ctx.fillStyle = "#5c4930"
                  ctx.fillRect(x1 + (19 * scale), y1 + (15 * scale), 31 * scale, 3 * scale);
                  ctx.fillRect(x1 + (19 * scale), y1 + (10 * scale), 31 * scale, 3 * scale);
                  ctx.fillRect(x1 + (19 * scale), y1 + (5 * scale), 31 * scale, 3 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (30 * scale), y1 + (3 * scale), 10 * scale, 17 * scale);
                  ctx.fillRect(x1 + (17 * scale), y1 - (12 * scale), 35 * scale, 12 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (19 * scale), 29 * scale, 12 * scale);
                  ctx.fillStyle = "#6e583a"
                  ctx.fillRect(x1 + (19 * scale), y1 - (10 * scale), 31 * scale, 12 * scale);
                  ctx.fillRect(x1 + (22 * scale), y1 - (17 * scale), 25 * scale, 12 * scale);
                  ctx.fillStyle = "#7d7d7d"
                  ctx.fillRect(x1 + (12 * scale), y1 + (14 * scale), 15 * scale, 8 * scale);
                  ctx.fillRect(x1 + (43 * scale), y1 + (14 * scale), 15 * scale, 8 * scale);
                  ctx.fillStyle = "#52351d"

                  ctx.fillRect(x1 + (19 * scale), y1 - (7 * scale), 31 * scale, 3 * scale);

                  break;

            case ("SlavicHumans1"):
                  ctx.fillStyle = "#5c4930"
                  ctx.fillRect(x1 + (0 * scale), y1 - (6 * scale), 70 * scale, 20 * scale);
                  ctx.fillStyle = "#6e583a"
                  ctx.fillRect(x1 + (0 * scale), y1 + (3 * scale), 70 * scale, 17 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (10 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (23 * scale), 30 * scale, 8 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  ctx.fillStyle = "#856a45"
                  ctx.fillRect(x1 + (47 * scale), y1 - (25 * scale), 3 * scale, 45 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (25 * scale), 3 * scale, 45 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (10 * scale), 3 * scale, 30 * scale);
                  ctx.fillRect(x1 + (68 * scale), y1 - (10 * scale), 3 * scale, 30 * scale);
                  ctx.fillStyle = "#856a45"
                  ctx.fillRect(x1 + (20 * scale), y1 - (18 * scale), 30 * scale, 3 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (9 * scale), 30 * scale, 3 * scale);

                  break;
            case ("SlavicHumans2"):
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (23 * scale), y1 - (22 * scale), 24 * scale, 20 * scale);

                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 70 * scale, 25 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (12 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (22 * scale), 30 * scale, 6 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 + (60 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 - (0 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillRect(x1 + (52.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);
                  ctx.fillRect(x1 + (12.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (-8 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillRect(x1 + (67 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  break;
            case ("SlavicHumans3"):
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (21 * scale), y1 - (25 * scale), 28 * scale, 20 * scale);
                  ctx.fillRect(x1 + (23 * scale), y1 - (30 * scale), 24 * scale, 20 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (13 * scale), 70 * scale, 25 * scale);

                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (23 * scale), y1 - (22 * scale), 24 * scale, 20 * scale);

                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 - (5 * scale), 70 * scale, 25 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (12 * scale), 30 * scale, 30 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (22 * scale), 30 * scale, 6 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 + (60 * scale), y1 - (10 * scale), 10 * scale, 30 * scale);
                  ctx.fillRect(x1 - (0 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillRect(x1 + (52.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);
                  ctx.fillRect(x1 + (12.5 * scale), y1 - (10 * scale), 5 * scale, 30 * scale);

                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (-8 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillRect(x1 + (67 * scale), y1 - (20 * scale), 11 * scale, 35 * scale);
                  ctx.fillStyle = "#c7c7c7"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (15 * scale), 15 * scale, 35 * scale);
                  ctx.fillStyle = "#0b4261"
                  ctx.fillRect(x1 + (-10 * scale), y1 - (25 * scale), 15 * scale, 6 * scale);
                  ctx.fillRect(x1 + (65 * scale), y1 - (25 * scale), 15 * scale, 6 * scale);

                  ctx.fillRect(x1 + (-9 * scale), y1 - (30 * scale), 13 * scale, 6 * scale);
                  ctx.fillRect(x1 + (66 * scale), y1 - (30 * scale), 13 * scale, 6 * scale);
                  break;
            case ('HighElvenCult0'):
                  ctx.fillStyle = "#331209"
                  ctx.fillRect(x1 + (0 * scale), y1 - (6 * scale), 70 * scale, 20 * scale);
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (0 * scale), y1 + (3 * scale), 70 * scale, 17 * scale);
                  ctx.fillRect(x1 + (20 * scale), y1 - (10 * scale), 30 * scale, 30 * scale);
                  ctx.fillStyle = "#52351d"
                  ctx.fillRect(x1 + (25 * scale), y1 - (5 * scale), 20 * scale, 25 * scale);
                  break;
            case ('Tree1Normal'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#253d07"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#302519"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  break;
            case ('Tree1Autumn'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#8f702c"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#302519"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  break;
            case ('Tree1Winter'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#eeeeee"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#302519"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  break;
            case ('Cactus1'):
                  ctx.fillStyle = "#2a8221"
                  ctx.fillRect(x1 + (0 * scale), y1 - (80 * scale), 40 * scale, 300 * scale);
                  ctx.fillRect(x1 + (60 * scale), y1 - (50 * scale), 40 * scale, 150 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (100 * scale), 100 * scale, 40 * scale);
                  ctx.fillRect(x1 - (60 * scale), y1 - (50 * scale), 40 * scale, 150 * scale);
                  ctx.fillRect(x1 - (60 * scale), y1 + (95 * scale), 100 * scale, 40 * scale);
                  break;
            case ('Tree2Normal'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#477a46"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#f0f0f0"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  ctx.fillStyle = "#1f1f1f"
                  ctx.fillRect(x1 + (0 * scale), y1 + (20 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (70 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (100 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (150 * scale), 60 * scale, 8 * scale);
                  break;
            case ('Tree2Autumn'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#c7ac24"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#f0f0f0"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  ctx.fillStyle = "#1f1f1f"
                  ctx.fillRect(x1 + (0 * scale), y1 + (20 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (70 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (100 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (150 * scale), 60 * scale, 8 * scale);
                  break;
            case ('Tree2Winter'):
                  //ctx.fillStyle = "#2c8200"
                  ctx.fillStyle = "#ffffff"
                  ctx.fillRect(x1 + (-40 * scale), y1 - (150 * scale), 140 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (120 * scale), 100 * scale, 170 * scale);
                  ctx.fillRect(x1 + (-20 * scale), y1 - (200 * scale), 100 * scale, 170 * scale);
                  ctx.fillStyle = "#f0f0f0"
                  ctx.fillRect(x1 + (0 * scale), y1 + (0 * scale), 60 * scale, 170 * scale);
                  ctx.fillStyle = "#1f1f1f"
                  ctx.fillRect(x1 + (0 * scale), y1 + (20 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (70 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (100 * scale), 60 * scale, 8 * scale);
                  ctx.fillRect(x1 + (0 * scale), y1 + (150 * scale), 60 * scale, 8 * scale);
                  break;
      }


}

function DrawRenders() { //I think June in all of her lack of wisdom meant DrawShaders

      if (TurnTimerTicks <= 15) {
            ctx.fillStyle = "rgba(255,255,255,0.6)"
            ctx.fillRect(0, 0, 2000, 2000);
            TurnTimerTicks++
      }

      switch (SeasonTimer) {
            case (0):
                  //ctx.fillStyle = "rgba(173, 240, 122, 0.08)"
                  //ctx.fillRect(0,0, 2000, 2000);
                  SeaRoughness = 8;
                  WaveSpeed = 2;

                  break;

            case (1):
                  ctx.fillStyle = "rgba(209, 196, 73, 0.2)"
                  ctx.fillRect(0, 0, 2000, 2000);
                  SeaRoughness = 12;
                  WaveSpeed = 2;
                  break;

            case (2):
                  ctx.fillStyle = "rgba(52, 64, 79, 0.3)"
                  ctx.fillRect(0, 0, 2000, 2000);
                  SeaRoughness = 16;
                  WaveSpeed = 4;
                  break;

            case (3):
                  ctx.fillStyle = "rgba(153, 198, 255, 0.25)"
                  ctx.fillRect(0, 0, 2000, 2000);
                  SeaRoughness = 8;
                  WaveSpeed = 2;
                  break;
      }


}

function DrawDevObjects() {
      function DrawForestZone(value, index) {
            tempFor = ForestZones[index]
            switch (tempFor.type) {
                  case ("Temperate"):
                        ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
                        ctx.fillRect(tempFor.x + cameraX, tempFor.y + cameraY, tempFor.size_x, tempFor.size_y);
                        break;
                  case ("Desert"):
                        ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
                        ctx.fillRect(tempFor.x + cameraX, tempFor.y + cameraY, tempFor.size_x, tempFor.size_y);
                        break;
            }
      }
      ForestZones.forEach(DrawForestZone)
}

function DrawForestObjects() {
      //meow
      for (F = 0; F != ForestZones.length; F++) {
            tempFor = ForestZones[F]
            Treecount = 30 * tempFor.density
            switch (tempFor.type) {
                  case ("Temperate"):
                        switch (SeasonTimer) {
                              case (0):
                                    for (i = 0; i != Treecount; i++) {
                                          DrawSub("Tree" + tempFor.tree_type[i] + "Normal", tempFor.tree_x[i], tempFor.tree_y[i], 0.05)
                                    }
                                    break;
                              case (1):
                                    for (i = 0; i != Treecount; i++) {
                                          DrawSub("Tree" + tempFor.tree_type[i] + "Normal", tempFor.tree_x[i], tempFor.tree_y[i], 0.05)
                                    }
                                    break;
                              case (2):
                                    for (i = 0; i != Treecount; i++) {
                                          DrawSub("Tree" + tempFor.tree_type[i] + "Autumn", tempFor.tree_x[i], tempFor.tree_y[i], 0.05)
                                    }
                                    break;
                              case (3):
                                    for (i = 0; i != Treecount; i++) {
                                          DrawSub("Tree" + tempFor.tree_type[i] + "Winter", tempFor.tree_x[i], tempFor.tree_y[i], 0.05)
                                    }
                                    break;
                        }
                        break;
                  case ("Desert"):
                        for (i = 0; i != Treecount; i++) {
                              DrawSub("Cactus1", tempFor.tree_x[i], tempFor.tree_y[i], 0.05)
                        }
                        break;
            }
      }

}

function DrawGameWorldObjects() {
      function DrawCities(value, index) {
            DrawSub(FactionTypes[Factions[TerrList[index].faction].factionType].name + TerrList[index].tier, TerrList[index].centerpos[0], TerrList[index].centerpos[1], TerrList[index].centerpos[2])
      }

      function CheckForBuilding(region, id) {
            isBuilt = false;

            for (i = 0; i != 8; i++) {
                  if (TerrList[region].buildslot[i] == id) {
                        isBuilt = true;
                  }
            }
            return isBuilt
      }


      if (CheckForBuilding(9, 18) == true) {
            DrawSub("Waslond1", 90, 180, 0.4)
            DrawSub("Waslond2", 70, 260, 0.4)
      }

      if (CheckForBuilding(3, 9) == true) {
            DrawSub("ElvenCourt", 215, 235, 0.4)
      }

      if (CheckForBuilding(2, 17) == true) {
            DrawSub("TreeOfLife", 100, 130, 0.4)
      }

      for (i = 0; i != TerrList.length; i++) {
            DrawCities(0, i)
      }


      if (CheckForBuilding(20, 41) == true) {
            DrawSub("Setva", 275, 550, 0.4)
      }

      //DrawSub("SlavicHumans1", 90, 100, 2)
      //DrawSub("HighElves3", 90, 100, 2)

      //DrawCities(0,6)
      //DrawCities(0,3)
      //TerrList.forEach(DrawCities)
}

function DrawWaves() {
      colorTable = ["#5990A2", "#37758A", "#1F657C", "#104E63", "#03384A"]

      function DrawShape(x, y, color, inv) {
            newX = cameraX + x
            newY = cameraY + y

            //alert(colorTable[color]+" "+color)
            ctx.fillStyle = color
            //"#37758A"
            //colorTable[color]

            switch (inv) {
                  case (0):
                        ctx.beginPath();
                        ctx.moveTo(newX, newY);
                        ctx.lineTo(newX + 30, newY);
                        ctx.lineTo(newX + 15 + AnimationLambda, newY + 30);
                        ctx.fill();
                        break;

                  case (1):
                        ctx.beginPath();
                        ctx.moveTo(newX + AnimationLambda, newY + 30);
                        ctx.lineTo(newX + 30 + AnimationLambda, newY + 30);
                        ctx.lineTo(newX + 15, newY);
                        ctx.fill();
                        break;
            }
      }

      for (h = 0; h < 50; h++) {
            for (i = -30; i < 150; i++) {
                  tempColor = WaveColorQueue.shift();
                  WaveColorQueue.push(tempColor);
                  DrawShape(0 + i * 30, 0 + 30 * h - 90, colorTable[tempColor], 0)

                  tempColor = WaveColorQueue.shift();
                  WaveColorQueue.push(tempColor);
                  DrawShape(15 + i * 30, 0 + 30 * h - 90, colorTable[tempColor], 1)
            }
      }
}

function DrawShoreWaves() {
      /*for (a = 0; a != WaveCoastLine.length; a++) {
            Temp = WaveCoastLine.shift();
            ctx.fillRect(TerrList[Temp].posX + cameraX, TerrList[Temp].posY + cameraY + TerrList[Temp].sizeY + 4, TerrList[Temp].sizeX, 16);
            WaveCoastLine.push(Temp);
      }*/

      //ctx.fillRect(Temp.posX + cameraX, Temp.posY + cameraY, Temp.sizeX, Temp.sizeY);
}

function SceneObj(itemType, Location, startTime){ // Scene object strcture
      this.itemType = itemType;
      this.Location = Location;
      this.startTime = startTime;
      this.exists = true;
}

var SceneObjects=[] // Array with all the scene objects

function AddSceneObject(itemType, Location, startTime){ //Add new scene object to the array
      FoundEmpty=false;
      for(i=0;i!=SceneObjects.length;i++){
            if(SceneObjects[i].exists==false){
                  FoundEmpty=i;
            }
      }
      if(FoundEmpty==false){
            SceneObjects[SceneObjects.length]=new SceneObj(itemType, Location, startTime) // Adding new item to the list
      }
      else{
            SceneObjects[FoundEmpty]=new SceneObj(itemType, Location, startTime) //Overwriting existing items
      }

      
}
function DrawSceneObjects(){
      function DrawSceneObjectProper(arg){
            temp = SceneObjects[arg]
            if(temp.exists==true){ //Check if the item exists

                  objX = GameTicks-temp.startTime+cameraX;
                  objY = temp.Location+cameraY;

                  switch(temp.itemType){
                        case("Cloud"):
                              ctx.fillStyle = "#ffffff"
                              ctx.fillRect(objX,objY, 90, 40); 
                              ctx.fillStyle = "#d9d9d9"
                              ctx.fillRect(objX,objY+30, 90, 10); 
                        break
                  }

                  if(GameTicks-temp.startTime>(-cameraX+1920)){ //is out of frame
                        temp.exists=false //deletes the item  
                  }
            }

      }


      for(i=0;i!=SceneObjects.length;i++){
            DrawSceneObjectProper(i)
      }
      

}