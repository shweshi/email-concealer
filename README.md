# email-concealer

This package conceals the email in a string with example.org, this can be used to conceal the emails in sql dumps.

Inspired by: https://github.com/spatie/email-concealer

It removes the domain and append the local part with example.org. Concealer can idenfity if there are more than one same local part than it will increment the count and append it.

[![NPM](https://nodei.co/npm/email-concealer.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/email-concealer)

# Installation
```bash
npm install email-concealer --save
```

# Usage
```json
let string = 'hi alex@gmail.com';

const concealer = new Concealer();

concealer.conceal(string);
// hi alex@example.org


string = 'hi alex@gmail.com and alex@yahoo.in';
concealer.conceal(string);
// hi alex@example.org and alex-1@example.org
```

### Using cli

You can use the email-concealer command line interface (cli)

```
Commands:

email-concealer --help
email-concealer --version
email-concealer conceal --file [filepath] --domain [domain]
```

Example:
```
email-concealer conceal --file ./users.sql --domain example.org
```

### Testing

    npm test

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

### Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE OF CONDUCT](CODE_OF_CONDUCT.md) for details.

### License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

### Happy Coding!!!
