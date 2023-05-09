/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 07 2023
 * @desc Robot simulator
 */

'use static';

/**
* @desc 
*/
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

const NORTH /*: string*/ = 'north';
const SOUTH /*: string*/ = 'south';
const EAST /*: string*/ = 'east';
const WEST /*: string*/ = 'west';
const RIGHT /*: string*/ = 'R';
const LEFT /*: string*/ = 'L';
const ADVANCE /*: string*/ = 'A';

/** @desc Robot class*/
export class Robot {
  //public coordinateX : number;
  //public coordinateY : number;
  //public bearing : string;
  /** @desc Robot class constructor */
  constructor() {
    this.coordinateX = 0;
    this.coordinateY = 0;
    this.bearing = NORTH;
  }  

  /**
  * @desc Given an object with coordinates and bearing, places and rotates the robot.
  * @param {Object} coordinates and bearing
  */
  place({ x, y, direction }) /*: void*/ {
    this.coordinateX = x;
    this.coordinateY = y;

    switch (direction) {
      case NORTH:
      case SOUTH:
      case EAST:
      case WEST:
        this.bearing = direction;
        break;
      default:
        throw new InvalidInputError();
    }    
  }

  /**
  * @desc Moves or rotate the robot for every given instruction.
  * @param {String[]} instructions as a string that contains L, A or R
  */
  evaluate(instructions /*: string[]*/) /*: void*/ {
    for (let i = 0; i < instructions.length; ++i) {
      let actualLetter /*: string*/ = instructions[i];
      if ((actualLetter !== RIGHT) && (actualLetter !== LEFT) && (actualLetter !== ADVANCE)) {
        throw new InvalidInputError();
      }
      switch(actualLetter) {
        case RIGHT:
        case LEFT:
          this.#changeDirection(actualLetter);
          break;
        case ADVANCE:
          this.#advancePosition();
          break;
      }
    }
  }

  /**
  * @desc Rotate the robot given a side.
  * @param {String} 'L' or 'R'
  */
  /*private*/ #changeDirection (side /*: string*/) /*: void*/ {
    if (side === RIGHT) {
      switch(this.bearing) {
        case NORTH: this.bearing = EAST; break;
        case SOUTH: this.bearing = WEST; break;
        case EAST: this.bearing = SOUTH; break;
        case WEST: this.bearing = NORTH; break;
      }
    }
    else{
      switch(this.bearing) {
        case NORTH: this.bearing = WEST; break;
        case SOUTH: this.bearing = EAST; break;
        case EAST: this.bearing = NORTH; break;
        case WEST: this.bearing = SOUTH; break;
      }
    }
  }

  /**
  *  @desc Makes the robot advance on the direction that it is facing
  /
  /*private*/ #advancePosition() /*: void*/ {
    switch(this.bearing) {
      case NORTH: this.y ++; break;
      case SOUTH: this.y --; break;
      case EAST: this.x ++; break;
      case WEST: this.x --; break;
    }
  }

  /**
  * @desc Getter method for the robot's coordinates
  * @return {number[]} coordinates in an array
  */
  get coordinates()/* : number[]*/ {
    return([this.coordinateX, this.coordinateY]);
  } 
}
