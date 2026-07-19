export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);

    this.name = "AppError";

    Object.setPrototypeOf(
      this,
      new.target.prototype
    );
  }
}
