import moment from "moment";


export function getValidFormattedDob(valuesObj) {
    if (!valuesObj || !valuesObj.dob 
          || (typeof valuesObj.dob !== 'string' && !(valuesObj.dob instanceof String)) 
          || valuesObj.dob.length < 6 || !/\d/.test(valuesObj.dob)) {
      return ""; 
    }
    return moment.utc(new Date(valuesObj.dob)).format("MM/DD/YYYY");
  }

  export function autoFormatDob(dob) {
    if (!dob || (typeof dob !== 'string' && !(dob instanceof String)) || dob.length < 1) {
      //console.log('Invalid input');
      return "";  
    }
    return dob?.replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2})$/g,
      "$1/$2" // To handle 113 > 11/3
    )
    .replace(
      /^(\d{2})(\d{0,2})(\d{0,4})$/,
      (match, month, day, year) => {
        const formattedMonth = month.padStart(2, "0");
        const formattedDay = day ? `/${day<32?day.padStart(2, "0"):31}` : "";
        const formattedYear = year ? `/${year}` : "";
        return `${formattedMonth}${formattedDay}${formattedYear}`;
      }
    );
  }