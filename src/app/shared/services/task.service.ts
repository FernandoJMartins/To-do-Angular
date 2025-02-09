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

  listar(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.URL);
  }

  inserir(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.URL, task);
  }

}
