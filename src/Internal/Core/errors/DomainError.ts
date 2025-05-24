export class DomainError extends Error {
  public readonly code: string;
  public readonly status: number;

  constructor(message: string, code: string = 'INTERNAL_ERROR', status = 500) {
    super(message);
    this.code = code;
    this.status = status;
    Object.setPrototypeOf(this, DomainError.prototype);
  }
}
