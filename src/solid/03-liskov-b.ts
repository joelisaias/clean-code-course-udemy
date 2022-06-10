export class Car{
    constructor( private numberOfSeats: number,private brand:string ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    getBrand() {
        return this.brand;
    }

}

export class Tesla extends Car{

    constructor( numberOfSeats: number ) {
        super( numberOfSeats, 'Tesla' );
    }

    getNumberOfTeslaSeats() {
        return this.getNumberOfSeats();
    }
}

export class Audi extends Car{

    constructor( numberOfSeats: number ) {
        super( numberOfSeats, 'Audi' );
    }

    getNumberOfAudiSeats() {
        return this.getNumberOfSeats();
    }
}

export class Toyota extends Car{

    constructor(numberOfSeats: number ) {
        super( numberOfSeats, 'Toyota' );
    }

    getNumberOfToyotaSeats() {
        return this.getNumberOfSeats();
    }
}

export class Honda extends Car{

    constructor( numberOfSeats: number ) {
        super( numberOfSeats, 'Honda' );
    }

    getNumberOfHondaSeats() {
        return this.getNumberOfSeats();
    }
}

export class Volvo extends Car{

    constructor( numberOfSeats: number ) {
        super( numberOfSeats, 'Volvo' );
    }

    getNumberOfHondaSeats() {
        return this.getNumberOfSeats();
    }
}

