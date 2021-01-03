// Add a constructor to the Satellite class. 
// Assign the class properties in the constructor.
// Use the Satellite class to create an initial array of Statellite objects

export class Satellite {
    constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }
}

