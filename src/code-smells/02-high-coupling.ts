(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        name      : string,
        gender    : Gender,
        birthDate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            name,
            gender,
            birthDate
        )
    }
}
    


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()