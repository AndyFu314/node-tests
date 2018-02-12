const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andy', 27);
        expect(spy).toHaveBeenCalledWith('Andy', 27);
    });

    it('should call saveUser with user object', () => {
        var email = 'andy.fu@gmail.com';
        var password = '1234';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});