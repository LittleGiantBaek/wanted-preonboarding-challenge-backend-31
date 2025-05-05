import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponseDto } from './dto/common-response.dto';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, CommonResponseDto<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CommonResponseDto<T>> {
    return next.handle().pipe(
      map((data) => {
        // 이미 공통 포맷이면 그대로 반환
        if (
          data &&
          typeof data.success === 'boolean' &&
          'data' in data &&
          'message' in data
        ) {
          return data;
        }
        return {
          success: true,
          data,
          message: '요청이 성공적으로 처리되었습니다.',
        };
      }),
    );
  }
}
