

class DatabaseAccesor {
  private static database : Database
  private constructor() {

  }
}

class Database {
  private storedInformation : string[];

  constructor(){
    this.storedInformation = [];
    this.loadInformation();
  }

  public query() {
    
  }

  private loadInformation() : void {
    for (let number = 0; number < 10; ++number) this.storedInformation.push(`${number}`);
  }
}