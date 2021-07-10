import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable()
export class ErrorService extends ErrorHandler {

  private static INT_ERR_MSG = 'Internal error has occured';

  constructor() {
    super();
  }

  handleError(error: any): string {
    super.handleError(error);
    return  ErrorService.INT_ERR_MSG;
  }
}
