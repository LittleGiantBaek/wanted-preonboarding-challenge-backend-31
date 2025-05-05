import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from './error-code.enum';

export function throwApiException(
  code: ErrorCode,
  message: string,
  details?: any,
): never {
  let status = HttpStatus.INTERNAL_SERVER_ERROR;
  switch (code) {
    case ErrorCode.INVALID_INPUT:
      status = HttpStatus.BAD_REQUEST;
      break;
    case ErrorCode.RESOURCE_NOT_FOUND:
      status = HttpStatus.NOT_FOUND;
      break;
    case ErrorCode.UNAUTHORIZED:
      status = HttpStatus.UNAUTHORIZED;
      break;
    case ErrorCode.FORBIDDEN:
      status = HttpStatus.FORBIDDEN;
      break;
    case ErrorCode.CONFLICT:
      status = HttpStatus.CONFLICT;
      break;
    case ErrorCode.INTERNAL_ERROR:
    default:
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      break;
  }
  throw new HttpException({ code, message, details }, status);
}
