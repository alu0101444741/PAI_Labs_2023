/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 07 2023
 * @desc Robot name
 */

'use static';

/** @desc Robot class */
export class Robot {
  public name : string;
  private static usedNames : Set<string> = new Set<string>();
  private static ALPHABET : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private static DIGITS : string = '0123456789';

  /** @desc Robot constructor */
  constructor() {    
    this.name = this.generateRandomName();
  }

  public resetName(): void {
    this.name = this.generateRandomName();   
  }

  public static releaseNames() : void {
    this.usedNames.clear();
  }  

  /**
  * @desc Robot's name getter method
  * @return robot's name
  */
  /*public get name : string {        
    return(this.name)
  }*/

  /**
  * @desc Generates a random name for the robot.
  * @return string as [A-Z]{2}\[0-9]{3}
  */
  private generateRandomName() : string {
    let randomName : string = '';
    while ((Robot.usedNames.has(randomName)) || (randomName === '')) {
      randomName = '';
      for (let i = 0; i < 2; ++i) {
        randomName += Robot.ALPHABET[Math.floor(Math.random() * Robot.ALPHABET.length)];
      }
      for (let i = 0; i < 3; ++i) {
        randomName += Robot.DIGITS[Math.floor(Math.random() * Robot.DIGITS.length)];
      }
    }
    Robot.usedNames.add(randomName);
    return(randomName);
  }
}

Robot.releaseNames = () => {};