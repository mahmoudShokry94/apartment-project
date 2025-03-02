export class AppError extends Error {
    public statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
  
      // Capture the stack trace (excluding constructor)
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export class NotFoundError extends AppError {
    constructor(message = 'Not Found') {
      super(message, 404);
    }
  }

  export class ValidationError extends AppError {
    constructor(message = 'Validation Error') {
      super(message, 400);
    }
  }