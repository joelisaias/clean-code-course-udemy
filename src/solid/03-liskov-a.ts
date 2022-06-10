import { Tesla, Audi, Toyota, Honda, Car, Volvo } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: (Car)[] ) => {
        
        for (const car of cars) {
            console.log( car.getBrand(), car.getNumberOfSeats() )
          /*
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfTeslaSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfAudiSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }         
        */
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(3),
    ];


    printCarSeats( cars );

})();