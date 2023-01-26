const {Employee} = require('../lib/index');

describe('function for the employee data', () => {
    it('should do something', () => {
        const data = new Employee("Kasen", 52455, "kasenb1211@gmail.com"); 

        expect(data.name).toEqual(expect.any(String)); 
        expect(data.id).toEqual(expect.any(Number)); 
        expect(data.email).toEqual(expect.any(String)); 
    });
});