$(document).ready(function () {
  $("#btn-start").click(function () {
    start();
  });
});

function start() {
  $("#start").hide();

  $("#game-background").append('<div id="player"></div>');
  $("#game-background").append('<div id="enemy1"></div>');
  $("#game-background").append('<div id="enemy2"></div>');
  $("#game-background").append('<div id="friend"></div>');
}
