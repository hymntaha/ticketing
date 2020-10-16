export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Error connecting the database";
  constructor() {
    super();

    // Only bc we are extending a built class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
