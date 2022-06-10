(() => {
  type Gender = "M" | "F";
  class Person {
    /*
        public name:string;
        public gender:Gender;
        public birthDate:Date;

        constructor( name: string, gender:Gender,  birthDate: Date) {
            this.name=name;
            this.gender=gender;
            this.birthDate=birthDate;
        }
        */
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthDate);
    }
  }

  const p = new UserSettings("directorio1", "directorio2",'email@email.com','admin', new Date("1990-01-11"),'Joel','S',new Date("1990-01-11"));
  console.log({ p });
})();
