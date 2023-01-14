export class DatabaseConnectionError extends Error {
  public reason: string;

  constructor() {
    super();

    this.reason = 'Error connecting to database';

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
