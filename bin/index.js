#!/usr/bin/env node

const Concealer = require('../dist/src/Concealer').default
const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
    .scriptName("email-concealer")
    .usage('$0 [args]')
    .command('conceal [file] [domain]', 'file containing the emails and custom domain to replace the original domain.', (yargs) => {
        yargs.positional('domain', {
            type: 'string',
            default: 'example.org',
            describe: 'the domain to replace with'
        })
    }, function (argv) {
        var string = fs.readFileSync(argv.file, 'utf8');

        const concealer = new Concealer(string);
        const concealString = concealer.conceal(string, argv.domain);

        fs.writeFileSync(argv.file, concealString, 'utf8');
    })
    .help()
    .argv