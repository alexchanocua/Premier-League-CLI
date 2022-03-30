const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
    .usage('$0: Usage <cmd> [options]')
    .command(
        'search <team>',
        'search team in Premier League',
        (yargs) => {
            return yargs
            // positional args
                .positional('t', {
                    alias: 'team',
                    describe: 'name of the team (1 word)',
                    type: 'string',
                })
            // 
                .option('s', {
                    alias:'second',
                    describe: 'the second word in the team name',
                    default:'',
                    type:'string'
                })
        },
        (args) => {
            if(args.team){
                app.search(args);
            }
            else{
                console.log("Please type a Premier League team.")
            }
            
        }
    )
    .help().argv;
