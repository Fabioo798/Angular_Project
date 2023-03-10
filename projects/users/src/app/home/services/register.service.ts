import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type apiAnswer = {
  result: any;
};
@Injectable({
  providedIn: 'root',
})
export class repoService {
  private apiUrl = 'http://localhost:5000/users/register';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post('http://localhost:5000/users/register', user);
  }

  loginUser(user: Partial<User>): Observable<any> {
    return this.http.post('http://localhost:5000/users/login', user);
  }
  loadUsers(headers?: any): Observable<User[]> {
    const options = { headers };
    return this.http.get<User[]>('http://localhost:5000/users/', options);
  }
}
