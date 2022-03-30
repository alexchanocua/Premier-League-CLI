## How to user the midterm app cli dependencies

0. Make sure the `midterm-cli` and the `midterm-api` folders are next to each other in the directory.

1. Go into the `midterm-api` folder. Once inside the folder run: `npm install`. This will install all the dependencies listed in the package.json.

2. Go into the `midterm-cli` folder. Once inside the folder run: `npm install`. This will install all the dependencies listed in the package.json.

3. From inside the `midterm-cli` To view the help directions for the CLI run: `node cli.js --help`. To view help directions for the search command run: `node cli.js search --help`

4. To run the `midterm-cli` CLI:

```
    // run the play command with the game argument without passing any options
    node cli.js search {teamName}

    // run the play command with the second name argument and pass the second name as a single word
    node cli.js search {teamName} --s {secondWordTeamName}

    // EX:
    node cli.js search manchester --s united

    //EX:
    node cli.js search manchester --s city

    // List of available current Premier League Teams (2021-2022):
    Arsenal
    Aston Villa
    Brentford
    Brighton
    Burnley
    Chelsea
    Crystal Palace
    Everton
    Leeds United
    Leicester City
    Liverpool
    Manchester City
    Manchester United
    Newcastle United
    Norwich City
    Southampton
    Tottenham Hotspur
    Watford
    West Ham
    Wolverhampton Wanderers

```