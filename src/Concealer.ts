export default class Concealer {
    private readonly dictionary: object;
    private readonly domain: string;
    constructor() {
        this.dictionary = {};
        this.domain = 'example.org';
    }

    public conceal = (string: string): string => {
        const extractedEmails = this.extractEmails(string);
        const concealedEmails = this.fill(extractedEmails);
        for (const originalEmail in concealedEmails) {
            string = string.replace(originalEmail, concealedEmails[originalEmail]);
        }
        return string;
    }

    private extractEmails = (string: string): string[] => {
        return string.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }

    private fill = (emails: string[]) => {
        emails.forEach((email) => {
            this.add(email);
        });
        return this.dictionary;
    }

    private add = (email: string) => {
        let localPart = email.split('@')[0];
        while (Object.keys(this.dictionary).find((key) => this.dictionary[key] === localPart + '@' + this.domain)) {
            localPart = this.addOrUpdateIncrement(localPart);
        }
        return this.dictionary[email] = localPart + '@' + this.domain;
    }

    private addOrUpdateIncrement = (string: string) => {
        const pattern = /-(\d+$)/;
        const matches = string.match(pattern);
        if (!matches) {
            return string + '-1';
        }
        const increment = Number(matches[1]) + 1;
        return string.replace(pattern, '-' + increment);
    }
}
