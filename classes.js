class Article {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
}
const articles = [
    new Article("Valorant", 'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.<br>Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.<br>The development of the game started in 2014.<br>Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.'),
    new Article("Red Dead Redemotion", "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.<br>The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan,<br>an outlaw and member of the Van der Linde gang, who must deal with the decline of the Wild West whilst attempting to survive<br>against government forces, rival gangs, and other adversaries. The game is presented through first- and third-person perspectives,<br> and the player may freely roam in its interactive open world. Gameplay elements include shootouts, robberies, hunting, horseback riding,<br> interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system<br>governs the response of law enforcement and bounty hunters to crimes committed by the player."),
   
  ];
  const valorantArticle = articles[0];
  const redDeadRedemptionArticle = articles[1];

  class Game {
    constructor(name, genre, rating) {
      this.name = name;
      this.genre = genre;
      this.rating = rating;
    }
  }
  const game1 = new Game("Overwatch", "PVP", 8);
  const game2 = new Game("Valorant", "FPS", 7.5);
  const game3 = new Game("Red Dead Redemption", "Campaign", 10);
 