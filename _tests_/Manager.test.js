const {Manager} = require('../lib/generateHtml.js');

describe("This will save the name, ID, email, school, and role for manager", () => {
    it('should do something', () => {
        const data = new Manager();

        expect(data.managerName).toEqual(expect.any(String));
        expect(data.managerId).toEqual(expect.any(Number));
        expect(data.managerEmail).toEqual(expect.any(String));
        expect(data.managerOffice).toEqual(expect.any(Number));
        expect(employeeData.employeeRole).toEqual("Manager");
    });
})