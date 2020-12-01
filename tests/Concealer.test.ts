import Concealer from '@src/Concealer';
import chai from 'chai';
import sinon from 'sinon';
const expect = chai.expect;

describe('Concealer Test', () => {
    let concealer;

    beforeEach(() => {
        concealer = new Concealer();
    });

    after(() => {
        sinon.restore();
    });

    describe('Conceal emails test', () => {
        it('should conceal emails with yopmail.com', () => {
            const string = 'hi alex@gmail.com';
            const concealString = concealer.conceal(string);
            expect(concealString).to.equal('hi alex@example.org');
        });

        it('should conceal emails with yopmail.com with provided domain', () => {
            const string = 'hi alex@gmail.com';
            const concealString = concealer.conceal(string, 'concealed.com');
            expect(concealString).to.equal('hi alex@concealed.com');
        });

        it('should conceal emails by incrementing the local part if there are more than one same local part',
            () => {
                const string = 'hi alex@gmail.com, alex@yahoo.in and alex@outlook.com';
                const concealString = concealer.conceal(string);
                expect(concealString).to.equal('hi alex@example.org, alex-1@example.org and alex-2@example.org');
            });
    });
});
