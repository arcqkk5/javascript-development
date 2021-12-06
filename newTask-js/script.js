'use strict';

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
  printGoals: function (...goalsAll) {
    let goalsSum = goalsAll.length;
    for (let i = 0; i < goalsAll.length; i++) {
      console.log(`${goalsAll[i]} забил гол!`);
    }
    console.log(goalsSum);
  },
};

/***********************************
1. Create separate arrays with players for each team (variables players1 and players2).

2. The first player in each of these arrays is the goalkeeper and the rest are the field players. 
For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array 
(fieldPlayers) with all the remaining 10 field players.

3. Create an array allPlayers containing all players from both teams (22 players).

4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) 
containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.

5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).

6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and
 prints each one to the console along with the total number of goals scored (the number of player names passed to the function).

 7. The team with the lower odds will win more likely. Print to the console which team is more 
likely to win, WITHOUT using an if / else or ternary operator.
Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. 
Then call the function again with the players from game.scored.

************************************/

//1 Создать отдельные массивы с игроками разных команд. - done
// const playerOne = game.players[0];
// const playerTwo = game.players[1];
// const [playerOne, playerTwo] = game.players;

// console.log(playerOne); //Массив игроков первой команды
// console.log(playerTwo); //Массив игроков второй команды

// //2 Создайте для каждой команды одну переменную вратарь, и массив из оставшихся игроков - done

// // const goalkeeperOne = playerOne[0];
// // const goalkeeperTwo = playerTwo[0];
// const [goalkeeperOne, ...playerNotGoalkeeperOne] = playerOne;
// const [goalkeeperTwo, ...playerNotGoalkeeperTwo] = playerTwo;

// console.log(goalkeeperOne, goalkeeperTwo);
// console.log(playerNotGoalkeeperOne, playerNotGoalkeeperTwo);

// //3 Создайте массив из всех игроков (22 человека) - done
// const allPlayers = [...playerOne, ...playerTwo];
// console.log(allPlayers);

// //4 Реал использовал 5 замен, нужен массив игроков из всех игроков реала. - done
// const playerOneTotal = [
//   ...playerOne,
//   'Marcelo',
//   'Isco',
//   'Asensio',
//   'Diaz',
//   'Odriozola',
// ];
// console.log(playerOneTotal);

// //5 Деструктизация объекта odds: - done
// // const { team1, draw, team2 } = game.odds;
// // console.log(team1);
// // console.log(draw);
// // console.log(team2);

// //6 printGoal - done
// game.printGoals('Kroos', 'Benzema', 'Mingueza');

//7 Кто выиграет с большей вероятностью?
// const winPlayers = team1 > team2 ? 'Win the Players2' : 'Win the Players1';
// console.log(winPlayers);

// team2 < team1 && console.log('Team2 win');
// team2 > team1 && console.log('Team1 win');

//TASK2
/******************
1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
2. Use a loop to calculate the average odd and print it to the console 
3. Print 3 odds to the console, but formatted, exactly like this:
Rate for REAL MADRID victory: 1.48 
Rate for draw: 2.53
Rate for BARCELONA victory: 4.25
Get team names directly from the game object, don't hardcode them 
4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
{
  Kroos: 1,
  Benzema: 1,
  Mingueza: 1
}
 *******************/

//1 - done
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1} - ${player}`);
// }

// //2 - done
// const oddsNew = Object.values(game.odds);
// let pretVar = 0;
// for (const iter of oddsNew) {
//   pretVar += iter;
// }
// console.log(pretVar / oddsNew.length);

// //3 - done
// const printEvent = Object.entries(game.odds);
// for (const [teamName, odd] of printEvent) {
//   const mutableText =
//     teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
//   console.log(`Rate for ${mutableText}: ${odd}`);
// }

// //4
// const gameScore = {};
// for (const player of game.scored) {
//   gameScore[player] ? gameScore[player]++ : (gameScore[player] = 1);
// }
// console.log(gameScore);

/*********
 * Your tasks:
1. Create an array of gameEvents with different game events that can happen (no duplicates).
2. After the end of the game, it turned out that the yellow card from minute 75 was unfair. So remove this event from the game events log.
3. Calculate and log the following in the console: “On average, an event happened every 11 minutes” (keep in mind that there are 90 minutes in the game).
4. Loop over the events map and log each item to the console, with mark whether it is in the first or second half (after 45 minutes) of the game, for example:
[FIRST HALF] 19:  Goal

 **********/

//1 - done

//Массив событий за матч
const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

// Нужно Создать Set из данного Map, взяв из него только значения и поместить их в Set
// Начнём
const eventsSet = new Set();
for (const [minute, event] of events) {
  eventsSet.add(event);
}
const myArr = [...eventsSet];
console.log(myArr);

//2 - done
events.delete(75);
console.log(events);

//3 - done

// Частный случай, не будет рабоать, если после 90 минуты ничего не происходило
let tmp = 0;
for (const [minute, event] of events) {
  minute < 90
    ? tmp++
    : console.log(`В среднем событие происходило каждые ${90 / tmp} минут`);
}

// или Вариант2
let tmp2 = 0;
for (const [minute2, event2] of events) {
  if (minute2 < 90) {
    tmp2++;
  }
}
console.log(`В среднем событие происходило каждые ${90 / tmp2} минут`);

//4 - done
for (const [min, e] of events) {
  min <= 45
    ? console.log(`[FIRST HALF] ${min}: ${e}`)
    : console.log(`[SECOND HALF] ${min}: ${e}`);
}
