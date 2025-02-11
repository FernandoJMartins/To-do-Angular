import { Injectable } from '@angular/core';
import {Task} from '../model/Task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URL = `${environment.apiUrl}/tasks`;

  constructor(private httpClient: HttpClient) {

  }

  listar(userId: number, filtro: string = ''): Observable<Task[]> {
    const params: any = {
      donoId: userId,
      removido_ne: true,
      _sort: '-dataCriacao',
    };

    // Se houver filtro, aplicar em título ou descrição
    if (filtro.trim()) {
      params['q'] = filtro;
    }

    return this.httpClient.get<Task[]>(this.URL, { params });
  }

  inserir(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.URL, task);
  }

  atualizar(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.URL}/${task.id}`, task);
  }

  remover(task: Task): Observable<Task> {
    task.dataAlteracao = new Date();
    task.removido = true;
    return this.httpClient.put<Task>(`${this.URL}/${task.id}`, task);
  }

}
