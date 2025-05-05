export class CommonResponseDto<T> {
  success: boolean;
  data: T;
  message: string;

  constructor(init: { success: boolean; data: T; message: string }) {
    this.success = init.success;
    this.data = init.data;
    this.message = init.message;
  }
}
