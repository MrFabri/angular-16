import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  phone?: string;
  website?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private api = 'https://646666a7ba7110b6639fe850.mockapi.io/api';
  private http = inject(HttpClient); /* Works from angular 15 */

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.api, user);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.api}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
