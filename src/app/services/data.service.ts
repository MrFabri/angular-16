import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private http = inject(HttpClient); /* Works from angular v15 */
  private message: BehaviorSubject<string> = new BehaviorSubject('Hello!');

  get messageSubject(): Observable<string> {
    return this.message.asObservable();
  }

  set editMessageSubject(newMessage: string) {
    this.message.next(newMessage);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.api}/users/`, user);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.api}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.api}/users/${id}`);
  }
}
