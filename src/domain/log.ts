let lastIndex = 1

export enum ActionLog {
  INCREMENT = 'suma',
  DECREMENT = 'resta',
}

export class Log {

  public id: number
  public when: Date

  constructor(public action: ActionLog) {
    this.when = new Date()
    this.id = lastIndex++
  }

  static getLastIndex() {
    return lastIndex
  }

}