const axios = require('axios');
const config = require('./config.json');

// Async func that search for players in a given team
const searchPlayers = async (team) => {
    try{
        const parsedTeam = team.toLowerCase();
        const searchURL = `${config.url}q=${parsedTeam}+current+players&location=fullerton%2C+california%2Cunited+states&api_key=${config.key}`;
        const response = await axios.get(searchURL);
     
        return(response.data.knowledge_graph.players);


    } catch (error) {
        return error;
    }

};

// Async func that searches for a player stats
const searchPlayerStats = async (player) => {
    try{
        // normalize the player name incase the name has accented letters
        const parsedPlayer = player.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const searchURL = `${config.url}q=${parsedPlayer}+stats&location=united+states&api_key=${config.key}`;
        const response = await axios.get(searchURL);

        return response.data.sports_results;

    } catch (error){
        return error;
    }
};

module.exports = {
    searchPlayers,
    searchPlayerStats
}