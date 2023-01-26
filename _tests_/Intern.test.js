const {Intern} = require('../lib/index');

describe("This will save the name, id, email, school, and role of the intern", () => {
    it('should do something', () => {
        const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String)); 
    expect(intern.getRole()).toEqual('Intern');
    });
});