export default class House {
	constructor() {
		this.numberOfBedrooms = 3;
		this.type = 'flat';
	}
}

export function getBedrooms(house) {
  return  `The number of the bedrooms in the house is ${house.numberOfBedrooms}`;
}


export function getType(house) {
  return  `The house is a ${house.type}`;
}

export const someConstant = 'LWC For Salesforce Developers';