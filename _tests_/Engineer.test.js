const Engineer = require('../lib/index');

describe("This will save the name, id, email, github, and role of the engineer", () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String)); 
    expect(engineer.getRole()).toEqual("Engineer"); 
});