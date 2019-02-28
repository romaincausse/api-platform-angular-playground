import { Injectable } from '@angular/core';
import { Adapter } from './adapter/adapter';

export class User {
  constructor(
    public id: number,
    public email: string,
    public username: string,
    public roles: Array<Role>
  ) {

  }
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}
@Injectable({
  providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {

  adapt(item: any): User {
    return new User(
      item.id,
      item.email,
      item.username,
      item.roles ? item.role : []
    );
  }
}