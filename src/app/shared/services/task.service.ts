import { Injectable } from '@angular/core';
import {Task} from '../model/Task';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URL = `${environment.apiUrl}/tasks`;

  constructor(private httpClient: HttpClient) {

  }

  listar(userId: number, searchBar: string = '', arrayCheckbox: string[] = []): Observable<Task[]> {
    let httpParams = new HttpParams()
      .set ('donoId', userId.toString())
      .set('removido_ne', 'true')
      .set('_sort', 'dataCriacao')
      .set('_order', 'desc')

    if (searchBar.trim()){
      httpParams = httpParams.set('q', searchBar);
    }

    arrayCheckbox.forEach(element => {
      if (element.trim() === 'feito' || element.trim() === 'pendente'){
        httpParams = httpParams.append('status', element)
      }
      else{
        httpParams = httpParams.append('prioridade', element)
      }
    })

    return this.httpClient.get<Task[]>(this.URL, {params: httpParams});

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
