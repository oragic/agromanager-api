import { DomainError } from './DomainError';

export class NotFoundError extends DomainError {
  constructor(entity: string, id?: string) {
    super(
      `${entity} not found${id ? ` with ID: ${id}` : ''}`,
      'NOT_FOUND',
      404,
    );
  }
}

export class ConflictError extends DomainError {
  constructor(message: string) {
    super(message, 'CONFLICT', 409);
  }
}

export class ValidationError extends DomainError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
  }
}
