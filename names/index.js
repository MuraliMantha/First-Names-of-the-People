let getFirstNames = require("../utilities/utils/index");
let peopleNames = require("../country/state/city/index");

let getPeopleInCity = (peopleNames) => {
  let firstNames = getFirstNames(peopleNames);
  return firstNames;
};

module.exports = getPeopleInCity;
