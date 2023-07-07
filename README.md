# Total War: Trumps

## Intro

Total War Trumps is a game based on the classic game of Rock, Paper, Scissors. But given a new twist by basing your choices on combat units from the hit real time strategy game, Total War: Shogun 2. Tally your score and prove you are the superior commander against the computer by picking one of four units and see who trumps who. The aim of the game is to become the first player to reach 5 Victories.

Similar in logic to Rock, Paper, Scissors where Rock beats Scissors, Scissors beats Paper and Paper beats Rock. Total War: Trumps, works on the same logic of comparing strengths and weaknesses.

In this game, the units consist of Archers, Samurai, Yari Spearmen and Cavalry.
Archers trump Samurai, Samurai trump Yari Spearmen, Yari Spearmen trump Cavalry and finally Cavalry trumps Archers.
While Archers against Spearmen and Samurai against Cavalry will result in a draw, that will result in no points being awarded.

[Link to the live Total War: Trumps website](https://tobyjef.github.io/total-war-trumps/)

## Features

- On page load you are met with the games rules, objective and backstory. Followed by a button (still to be implemented and confirmed working) that would hide this content and then reveal the game with short reminder on how to win the round. Due to the differences between the standard and well known Rock, Paper, Scissors game that this game is based on.

- insert screenshot of rules-box with button and hidden game area content here..

- The game area consists of three blocks of content. The main game area, consists of;

- The reminder on how to win at Total War: Trumps at the top. Below shows the four game cards the player has to choose from.
- These options for those playing are an Archer card, a Samurai card, a Spearmen card and a Cavalry card. I have styled the game cards to scale upwards to 1.1 of the orignal image size to help identify which game card the user is hovering over.

- Below the main game are is a small text box with the purpose of displaying the Glorious Victory! message to the player if the win or the Shameful Defeat! message if the player has lost to the cpu opponent. Following either the win or loss message there is a short message that informs the player of each card that was played in that round.

- Finally there is the score tally box which shows the player and cpu score. The score correctly increments automatically at the end of each hand and awards a point to the respective winner. Once the desired score has been reached, a new message will appear informing wether the player had won or lost the full game. The win message to the player is shown in green, while the loss message is displayed in red. These colours were chosen as they can be associated with positive (green) or negative (red) actions.

- A seperate button is added (to be implemented) which is designed to reset the scores to 0-0 and allow the player to play again.

## Technologies Used

- HTML
- CSS
- JavaScript

Content

## Images

- Game unit images taken by screenshot, from my personal copy of Total War: Shogun 2
- [Favicon image](https://www.favicon-generator.org/)
- Crossed sword image found via Bing image search
- Logo image found and saved from Shutterstock
- Background image found
- [Link for image]()

## Page style decisions

## Who Total War: Trumps if for

## Future Improvements

- For a future update it would be my goal to add more units, adding further complexity to the game.
- I would also like to include a drop down option, allowing players to change the time period and the in game units.
  i.e. A Roman Empire update, Roman Urban Cohorts taking place of Sword Samurai, etc.

## Testing

Validators screenshots

- HTML Validator
- CSS Validator
- JS Validator

### Deployment

The site Total War: Trumps was deployed to Github pages.

To deploy the page on Github pages, the steps below are as follows:

Login to Github.
Go to the repository for this project, TobyJef/total-war-trumps.
Click the settings button.
Select pages in the left hand navigation menu.
From the source dropdown, select main branch and press save.
Following a short delay, the deployment will have been completed and the page provides a link to the completed website
_The live link can be found here *insert live link*_
[Link to the live Total War: Trumps website](https://tobyjef.github.io/total-war-trumps/)

### Bugs

- Hide/Reveal content button issues.

### Acknowledgements

- I would like to acknowledge the help I recieved from Ed at Tutor Support. I reached out to Tutor Support as I was struggling to
  figure out how to construct a function that checks to see when a score of 5 was reached, and that when the score was reached to display a message to the player that they have either won or lost the game. On my first attempt I had actually written code that was close to the end result. However my code never called the message to display when a score of 5 was achieved. After removing that code and re writting the playerVictory function trying different methods with still no success. I reached out to Tutor Support. After speaking with Ed and explaining what I wanted my function to achieve. He showed an example of how that function should look. After looking at the example Ed had sent. The difference between the example function and what I had first written, was that in my first attempt, I had written: if (playerScoreCounter = 5). This changed the set player score that was set at 0, at the top of the js script (var playerScoreCounter = 0;), to 5 which was incorrect.

What should of been called was: if (playerScoreCounter === 5). Which checks the score once it reaches 5, and then call the rest of the function. I also initally had an initial issue with the function coming into action as where it was originally placed, as it was placed directly under the function playerVictory(). When discussing this issue with Ed, he advised that the newly re written function wasn't coming into being called as it placed incorrectly and that thought should be placed into where calling that function would serve it's purpose. Following a further discussion and a hint from Ed, I understood that the function should of been placed within the end of the game function. As that within this function, the player choice and computer choices was being checked to see which hand had won the round and assigning points. After the help and encouragement I recieved from Ed, I was able to understand how to carry that function forward with the additional calls, and allowed me to compose the cpuVictory function by myself.
