import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { usersList } from '../model/mock/users.data';
import { User, UserAdapter } from '../model/User';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private adapter: UserAdapter
  ) { }

  list():Observable<User[]> {
    return this.http.get(`${API_URL}/users/`).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

  getUserById(user_id: number): Observable<User> {
    return this.http.get(`${API_URL}/users/${user_id}`).pipe(
      map((item: any) => this.adapter.adapt(item)),
    );
  }

  create(user: User) {
    return this.http.post(`${API_URL}/users/`, user);
  }

  update(id: number, user: User) {
    return this.http.put(`${API_URL}/users/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/users/${id}`);
  }
}
