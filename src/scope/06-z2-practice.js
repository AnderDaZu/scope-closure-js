
function moneyBox(user){
    let saveCoins = 0;
    function countCoins(coins){
        console.log(`temp savecoins: ${saveCoins}`);
        saveCoins += coins;
        console.log(`Total coins to ${user}: ${saveCoins}`);
    }
    return countCoins;
}

const coinsAnder = moneyBox('Ander');
coinsAnder(10);
coinsAnder(5);


function outerFunction(user) {
    let saveCoinsOuter = 0;

    function middleFunction(familyMember) {
        let saveCoinsMiddle = 0;

        function innerFunction(coins) {
            console.log(`${user}'s total coins: ${saveCoinsOuter}`);
            saveCoinsOuter += coins;
            console.log(`  ${familyMember}'s total coins: ${saveCoinsMiddle}`);
            saveCoinsMiddle += coins;
            console.log(`  ${familyMember} added ${coins} coins.`);
            console.log(`  New total for ${user}: ${saveCoinsOuter}`);
            console.log(`  New total for ${familyMember}: ${saveCoinsMiddle}`);
        }

        return innerFunction;
    }

    return middleFunction;
}

// Uso del sistema
const anderFamily = outerFunction('Ander');

const child1 = anderFamily('Child1');
const child2 = anderFamily('Child2');

child1(10); // Child1 adds 10 coins
child1(5);  // Child1 adds 5 coins
child2(20); // Child2 adds 20 coins
child2(5);  // Child2 adds 5 coins
child1(10); // Child1 adds 10 more coins


// Ejercicio de equipo y jugador
function teamScore(team){
    let pointsTeam = 0;
    function playerScore(player){
        let pointsPlayer = 0;
        function addPoints(points){
            pointsPlayer += points;
            pointsTeam += points;
            console.log(`PLayer ${player} add: ${points} points`);
            console.log(`Total Team ${team}: ${pointsTeam}, Total player ${player}: ${pointsPlayer}`);
        }
        return addPoints;
    }
    return playerScore;
}

const team1 = teamScore('Team 1');
const player1 = team1('Player 1');
const player2 = team1('Player 2');

player1(10);
player1(5);
player2(20);
player2(5);
player1(10);