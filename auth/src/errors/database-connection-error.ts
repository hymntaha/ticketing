export class DatabaseConnectionError extends Error {
  reason = "Error connecting the database";
  constructor() {
    super();

    // Only bc we are extending a built class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
