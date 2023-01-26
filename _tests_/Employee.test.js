const Employee = require('../lib/index');

describe('function for the employee data', () => {
    const employee = new Employee(); 

    expect(data.name).toEqual(expect.any(String)); 
    expect(data.id).toEqual(expect.any(Number)); 
    expect(data.email).toEqual(expect.any(String)); 
});