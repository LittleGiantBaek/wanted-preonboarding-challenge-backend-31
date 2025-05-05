import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorCode } from './error-code.enum';
import { CommonErrorDto } from './dto/common-error.dto';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    const error: CommonErrorDto = {
      code: ErrorCode.INTERNAL_ERROR,
      message: '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      details: {
        url: request.url,
        method: request.method,
      },
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'string') {
        error.message = res;
      } else if (typeof res === 'object' && res !== null) {
        const obj = res as any;
        error.code =
          typeof obj.code === 'string' ? obj.code : ErrorCode.INTERNAL_ERROR;
        error.message = obj.message || error.message;
        error.details = obj.details || error.details;
        if (!error.details) {
          error.details = { url: request.url, method: request.method };
        }
      }
    }

    response.status(status).json({
      success: false,
      error,
    });
  }
}
