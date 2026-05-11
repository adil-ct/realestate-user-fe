import { getValidFormattedDob, autoFormatDob } from './profileFormValidation'


describe("Testing getValidFormattedDob", () => {
    it('should take a date string and format it as MM/DD/YYY', () => {
        expect(getValidFormattedDob({ dob: "1999-06-02T00:00:00.000Z"})).toEqual("06/02/1999");
        expect(getValidFormattedDob({ dob: "2023-12-31T22:59:59.999Z"})).toEqual("12/31/2023");
        expect(getValidFormattedDob({ dob: "1879-01-01T16:11:05.002Z"})).toEqual("01/01/1879");
        expect(getValidFormattedDob({ dob: new Date("1992-02-15T00:00:00.000Z").toISOString()})).toEqual("02/15/1992");
        expect(getValidFormattedDob({ dob: new Date("1986-03-21").toISOString()})).toEqual("03/21/1986"); 
        expect(getValidFormattedDob({ dob: "06/01/1999" })).toEqual("06/01/1999");
        expect(getValidFormattedDob({ dob: "10/11/2009" })).toEqual("10/11/2009");
        expect(getValidFormattedDob({ dob: "10-11-2009" })).toEqual("10/11/2009");
        
    });

    it('should return an empty string if the input date is invalid', () => {
        expect(getValidFormattedDob(null)).toEqual("");
        expect(getValidFormattedDob(undefined)).toEqual("");
        expect(getValidFormattedDob("")).toEqual("");
        expect(getValidFormattedDob("1")).toEqual("");
        expect(getValidFormattedDob("0")).toEqual("");
        expect(getValidFormattedDob("2023-01-01")).toEqual("");
        expect(getValidFormattedDob("hello to you")).toEqual("");
        expect(getValidFormattedDob("123456")).toEqual("");
        expect(getValidFormattedDob(new String("9525977109"))).toEqual("");
        expect(getValidFormattedDob(36)).toEqual("");
        expect(getValidFormattedDob(new Date())).toEqual("");
        expect(getValidFormattedDob({ })).toEqual("");
        expect(getValidFormattedDob({ dob : '' })).toEqual("");
        expect(getValidFormattedDob({ dob : null })).toEqual("");
        expect(getValidFormattedDob({ dob : undefined })).toEqual("");
        expect(getValidFormattedDob({ dob : 1 })).toEqual("");
        expect(getValidFormattedDob({ dob : 0 })).toEqual("");
        expect(getValidFormattedDob({ dob : "1999" })).toEqual("");
        expect(getValidFormattedDob({ dob : 'hi how are you' })).toEqual("");
        expect(getValidFormattedDob({ dob : -1 })).toEqual("");
        expect(getValidFormattedDob({ dob: new Date("1992-02-15T00:00:00.000Z")})).toEqual("");
    });
  });

  describe("Testing autoFormatDob", () => {

    it('should take a string with expected date format MM/DD/YYY and remove any unallowed characters', () => {

        expect(autoFormatDob("06/01/1999")).toEqual("06/01/1999");
        expect(autoFormatDob("06-01-1999")).toEqual("06/01/1999");
        expect(autoFormatDob("0abc")).toEqual("0");
        expect(autoFormatDob("et tu brute")).toEqual("");

        // TODO: Get variations of how this is expected to work
        //expect(autoFormatDob("3/5/1994")).toEqual("03/05/1994");
    });
    
  });

