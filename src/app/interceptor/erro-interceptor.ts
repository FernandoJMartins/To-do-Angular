import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { MensagemSnackService } from '../shared/services/message/snack.service';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {
    constructor(private mensagemService: MensagemSnackService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => this.processarErroResposta(err))
        );
    }

    processarErroResposta(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
        this.mensagemService.erro(erro.message);
        return throwError(() => erro);
    }
}