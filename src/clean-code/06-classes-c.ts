export const testClean = () => {
  //Aplicando principio de responsabilidad unica

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
  }

  class User {
    public lastAccess: Date;
    public email: String;
    public role: String;
    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthDate: Date;
    email: string;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings {
    public user: User;
    public settings: Settings;
    public person: Person;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const p = new UserSettings({
    workingDirectory: "C:\\Users\\user\\Documents",
    lastOpenFolder: "C:\\Users\\user\\Documents\\Projects",
    email: "jalvarado@mail.com",
    role: "admin",
    name: "John",
    gender: "M",
    birthDate: new Date("1990-01-11"),
  });

  console.log({ p });
};
testClean();
