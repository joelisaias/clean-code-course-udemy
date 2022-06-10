export const testClean = () => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;
    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    person: PersonProps;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: String;
    public role: String;
    constructor({ email, role, person }: UserProps) {
      super(person);
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    user: UserProps;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder, user }: UserSettingsProps) {
      super(user);
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const p = new UserSettings({
    workingDirectory: "C:\\Users\\user\\Documents",
    lastOpenFolder: "C:\\Users\\user\\Documents\\Projects",
    user: {
      email: "jalvarado@mail.com",
      role: "admin",
      person: {
        name: "John",
        gender: "M",
        birthDate: new Date("1990-01-11"),
      },
    },
  });

  console.log({ p });
};
testClean();
