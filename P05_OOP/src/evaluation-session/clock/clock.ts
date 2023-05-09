/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 07 2023
 * @desc Class Clock
 */

/** @Clock class */
export class Clock {
  /**
  * @desc Clock class constructor
  * @param hour - hour value to assign
  * @param minute - minute value to assign
  */
  constructor(private hour : number = 0,
              private minute : number = 0) {
    this.minute = (minute !== undefined) ? minute : 0;
    this.normalizeHours();
    this.normalizeMinutes();
  }

  /**
  * @desc Create a string with the clock's values
  * @returns 
  */
  public toString(): string {
    let hours : string = (this.hour < 10) ? `0${this.hour}` :`${this.hour}`;
    let minutes : string = (this.minute < 10) ? `0${this.minute}` :`${this.minute}`;
    return(`${hours}:${minutes}`);
  }

  /**
  *  @desc Creates a clock as the result of adding minutes to the current one.
  *  @param minutes - minutes to add
  *  @returns result clock
  */
  public plus(minutes : number) : Clock {
    let resultClock : Clock = this.createCopy();
    resultClock.addMinutes(minutes);
    return(resultClock);
  }

  /**
  *  @desc Creates a clock as the result of subtracting minutes to the current one.
  *  @param minutes - minutes to subtract
  *  @returns result clock
  */
  public minus(minutes : number) : Clock {
    let resultClock : Clock = this.createCopy();
    resultClock.subtractMinutes(minutes);
    return(resultClock);
  }

  /**
  *  @desc Check if a clock is equal to the current one. They are equal if has the same hours and minutes.
  *  @param other - clock to compare
  *  @returns 'true' if they are equal
  */
  public equals(other: Clock) : boolean {
    return((this.hour === other.hour) && (this.minute === other.minute));
  }

  /**
  *  @desc Creates a new clock that is a copy of the current one.
  *  @returns copied clock
  */
  private createCopy() : Clock {
    return(new Clock(this.hour, this.minute));
  }

  /**
  *  @desc Adds minutes to the current clock.
  *  @param minutes - minutes to add
  */
  private addMinutes(minutes : number) : void {
    this.minute += minutes;
    this.normalizeMinutes();
  }

  /**
  *  @desc Subtract minutes to the current clock.
  *  @param minutes - minutes to add
  */
  private subtractMinutes(minutes : number) : void {
    this.minute -= minutes;
    this.normalizeMinutes();
  }

  /** @desc Private method to normalize the hour value (between 0 and 23) */
  private normalizeHours() :void {
    if (this.hour < 0) {
      this.hour = this.hour % 24;
      this.hour = 24 + this.hour;
    }
    if (this.hour >= 24) this.hour = this.hour % 24;
  }
  
  /** @desc Private method to normalize the minute value (between 0 and 59) */
  private normalizeMinutes() :void {
    if (this.minute < 0) {
      this.hour += Math.floor(this.minute / 60);
      if (this.minute % 60 <= 0) this.minute = 60 + this.minute % 60;
      this.normalizeHours();
    }
    if (this.minute >= 60) {
      this.hour += Math.floor(this.minute / 60);
      this.minute = this.minute % 60;
      this.normalizeHours();
    }
  }
}
