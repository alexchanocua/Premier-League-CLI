const inquirer = require('inquirer');
const search_api = require('midterm-api');

// prompt the user to select which player to select
const players_prompt = async (players) => {
    const terms = [];
    players.forEach(player => {
        terms.push({name: player.name});
    });

    return inquirer.prompt([
        {
            type: 'list',
            name: 'playerName',
            message: 'Select player to get stats',
            choices: terms
        }
    ])

};

// prompt to check if the user wants to perform a search for the same team
const continuePrompt = async () => {
    const terms = [
        {name: 'Yes', value: true}, 
        {name:'No', value: false}
    ];

    return inquirer.prompt([
        {
            type:'list',
            name: 'continue',
            message: 'Perform another search for the same team?',
            choices: terms
        }
    ])
    
};

// print the player's stats for the Premier league current season
const printPlayerStats = (stats) => {
    // array to hold all the PL tournaments the player has been in 
    const PLtournamentArr = [];

    // Get Premier League seasons of the player and push them into the PLtournament array
    Object.keys(stats.tables).forEach(key => {
        stats.tables[key].forEach(tournament => {
            if(tournament.tournament === 'Premier League'){
                PLtournamentArr.push(tournament);
            };
        })
    })

    // get the first one b/c it's the most current season
    const PLtournament = PLtournamentArr[0];

    // Printing stats
    console.log('---------------------');
    console.log('---------------------')
    console.log('Premier League Stats:');
    for (const stat in PLtournament.games[0]){
        console.log(`${stat}: ${PLtournament.games[0][stat]}`);
    }
    console.log('---------------------')
    console.log('---------------------')
};


const search = async (args) => {
    try{
        let {team, second} = args;

        // check if there is a second name
        if(second){
            team = team.concat(' ', second);
        }
        // get the players
        const players = await search_api.searchPlayers(team);
        // prompt user to chose player
        const chosenPlayer = await players_prompt(players);
        // search for player stats
        const playerStats = await search_api.searchPlayerStats(chosenPlayer.playerName);
        // print player stats
        printPlayerStats(playerStats);

        // prompt user if they want to perform another search in the same team
        let choice = await continuePrompt();
        while(choice.continue){
            const otherPlayer = await players_prompt(players);
            const otherPlayerStats = await search_api.searchPlayerStats(otherPlayer.playerName);
            printPlayerStats(otherPlayerStats);
            choice = await continuePrompt();
        }

    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    search
};