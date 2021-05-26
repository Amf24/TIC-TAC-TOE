# project-abdullahFaden
Well "Tic Tac Toe" is a very popular game as well as very fun and good for playing with family and friends at times.

## List of technologies used in this project:
- HTML
- CSS
- Java Script
- Jquery
- Figma Wireframes
- Visual Studio Code

## Wireframes:
![Wireframes](https://media.git.generalassemb.ly/user/34636/files/88233f80-9198-11eb-936f-b12c71346b0a)

## User Stories:
- As a player, I want to add my name to play.
- As a player, I want to play and put shapes on the board.
- As a player, I want that if I put three shapes that meet the conditions for winning that I will win the game.
- As a player, I want to remove all shapes from cells.
- As a player, I want the game to show me the winning message with the name of the winner.
- As a player, I want the game to add the winner's name to the list.
- As a player, I want to continue with the same game and players, and I don't want to introduce new players.

## Planning/Development process:
- Create New Repository in GitHub Enterprise.
- create wireframe folder for wireframe.
- Link files with html file.
- Prepare the Folders and Files for the game.
- Put all html items.
- Create simple version from game.
- Work in JS file and make all functions.
- Work in Css file and make all styles.
- Test the game and make sure evreything work.

## Problem-solving strategy:
My method for solving problems that may occur:
- First, identify the problem and its location to avoid causing other problems.
- Analyze the problem and verify sayntx.
- Apply the expected solutions.

If I do not find a solution to the problem, I do research on the Internet or help from an expert

## How to become a winner:
To win in "Tic Tac Toe" you have to put three shapes Consecutive that meet the conditions Either it is one of the rows or columns or diagonal.

## My favorite functions:
```javascript

function play(id) {

    if (names()) {
        setOption = $("#" + id).text()

        if (turn && setOption == "") {

            $("#player").text(Player2 + " Turn ")
            $("#" + id).text("X")
            turn = false
        } else if (!turn && setOption == "") {
            $("#player").text(Player1 + " Turn")

            $("#" + id).text("O")
            turn = true
        }
        winCondition()
    } else {
        alert("Please Enter Players name");
    }
}
```
this my favorite part of the code, through this code can the player to play then the control is Is changing to the other player and also the names of the players are checked and the winning condition is verified







