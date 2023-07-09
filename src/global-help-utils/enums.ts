export const PASSWORD_HASH_SALT_ROUNDS = 12;

export enum ERROR_CODE {
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  NOT_UNIQUE = 'NOT_UNIQUE',
}
