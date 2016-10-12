var season;

function preload() {
  season = loadTable("teams_UTA_2015_games_teams_games.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  noLoop();
  
  println(season.getRowCount() + " total rows in table");
  println(season.getColumnCount() + " total columns in table");
}

function draw() {
  background(50);
  
  for (var i = 0; i < season.getRowCount(); i++) {
    fill(255);
    ellipse(i * 5, 100 + season.getNum(i, "Tm"), 5, 5);
    
    fill(0);
    ellipse(i * 5, 100 + season.getNum(i, "Opp"), 5, 5);
  }
}