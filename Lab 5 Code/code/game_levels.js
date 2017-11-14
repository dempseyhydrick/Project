var GAME_LEVELS = [
  ["                                                                                ",
   "                                w            w   xxxx o                   w     ",
   "           w      w                       w     xxxxxx          w               ",
   "             w                                 xxxxxxxx                         ",
   "                                               x      x                      x  ",
   "                            o                     oo                         x  ",
   "                                                                             x  ",
   "  xx                o     xxxxx     o                      x                 x  ",
   "  x                       x   x                            xx                x  ",
   "  x         o     xxxxx   x   x   xxxxx     o              xxx     w         x  ",
   "  x                 x     x   x   x   x                    xxxx              x  ",
   "  x       xxxxx     x     xxxxx   x   x   xxxxx            xxxxx       o     x  ",
   "  x       x         x     x   x   x   x     x     xxxxxxxxxxyxyxx            xxx",
   "  x @     x         x     x   x   xxxxx     x     xxxxxxxxxxyxyxxx     x       f",
   "  xxxxx   x         x     x   x   xx        x     xxxxxxxxxxxxxxxxx   xx      of",
   "      x   xxxxx     x     x   x   x x       x     xxxxxxxxxyxxxyxx    xxx      f",
   "      x       x     x             x  x      x     xxxxxxxxxxyyyxx     xxx   xxxx",
   "      x!!!!!!!x!!!!!x!!!!!!!!!!!!!x!!!x!!!!!x!!!!!!!!!!!!!!xxxxx!!!!!xxxx!!!x   ",
   "      x!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!xxxx!!!!!!xxxx!!!x   ",
   "      x!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!xxx!!!!!!!xxxxx!!x   ",
   "      x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx!!!!!!!xxxxxxx!x   ",
   "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ",
   "                                                                                ",
   "                                                                                "],

  ["                                                                                                                  ",
   "                                                                                                 xxxxx            ",
   "                                                                                                 x    x           ",
   "                          xxxxxxx                             x                                  x  w  x          ",
   "                          x!!!!!x                             x   w                              x     x          ",
   "                          x!!!!!x                             x                                  x    x           ",
   "                          x!!!!!x                             x                                  xxxxx       w    ",
   "                          xxx!xxx                             x  o        xxxxxxxxxx                              ",
   "                            x!x                               x                     x           xxxxxxx           ",
   "                            x!x          w                    xxxxxx                 x  o       x     x           ",
   "                             v                   o                 x                 xx         x     x           ",
   "                      w                                             x                 x xxx      x  w  x           ",
   "                                               xxxxxx          w   xxxxxx      xxx   x          x     x           ",
   "                                                     x                       o x     x  w       xxxxxxx           ",
   "        @                     w   xxxxxx o            x          w             x     x                            ",
   "        x                              x               x                    xxxx     x w       x     x        w   ",
   "        x        o   xxx    xxx        xxx              x                   x        x         x     x            ",
   "       xxx             x    xyx           xxx       xxxxxx                  x        x         x     x            ",
   "       xxx       x     x  o xxx                           x              xxxx        x         x  x  x   w        ",
   "      xxxx      xx     x                                   x            x            x         x x x x            ",
   "     xx  xx     xxx    x                       xxx          x    o     x             x  o      xx   xx            ",
   "     xx   xx   xxxx    xxxxxxxxxxxxx           x       w     x  enemy x              x        ff                  ",
   "     xx    xx  xxxx                x          xx   w          xxxxxxxx               xxxxxx   xx    x             ",
   "    xx     xx xx xx                x           x                                              x x   x             ",
   "   xxx     xxxx   xx               x           x                                              x  x  x             ",
   "  xx!!!!!!!xxx!!!!!xx!!!!!!!!!!!!!!xx    o     x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!x!x!!!!!!!!!!!!!",
   "  xx!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!x           x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!xx!!!!!!!!!!!!!",
   "  xx!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!x!!!xx!!xx!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!x!!!!!!!!!!!!!",
   " xx!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xx!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],

  ["                                                                                                              ",
   "                                                                                                              ",
   "   xxxxx                                                                                                      ",
   "   x                                                                                                          ",
   "   x                                                                                                          ",
   "   x @                                                      x                    x                            ",
   "   xxxxx   xxxxx                                           x   x      xx      x   x                           ",
   "     !!x   x   x                                           x  x      xxxx      x  x                           ",
   "    !!!x   x   x                                           x  x     xxxxxx     x  x                           ",
   "  !!!!!x   x   x                                           x   x     xxxx     x   x                           ",
   "  !xxxxx   xxxxx   xxxxx                                    x   xxx   xx   xxx   x                            ",
   "  !        x         x                                       xx  xxxxxxxxxxxx  xx                             ",
   "  !        x         x                                        xx xxxyyyyyyxxx xx                              ",
   "  !        x         x                                         xxxxxxyyyyxxxxxx                               ",
   "  !        x         x                                         xx xxxxyyxxxx xx                               ",
   "  !                  x     xxx                               xx   xxxyyyyxxx   xx                             ",
   "  !                  x     x  x                             xx   x xyyyyyyx x   xx                            ",
   "                     x     x   x                            x    x xxxxxxxx x    x                            ",
   "                   xxxxx   x   x                            x   x    xxxx    x   x                            ",
   "                           x   x                            x   x            x   x                            ",
   "                           x   x   xxxxx                    x   x            x   x                            ",
   "                           x   x   x                             x          x                                 ",
   "                           x  x    x                              x        x                                  ",
   "                           xxx     x                                                                          ",
   "                                   xxx     xxxxx                                                              ",
   "                                   x       x   x                                                              ",
   "                                   x       x   x                                                              ",
   "                                   x       x   x                                                              ",
   "                                   xxxxx   xxxxx                                                              ",
   "                                           xx                                                                 ",
   "                                           x x                                                                ",
   "                                           x  x                                                               ",
   "                                           x   x                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              "],

  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
