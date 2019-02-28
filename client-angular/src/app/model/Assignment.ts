import { User } from './User';
import { Mission } from './Mission';

export class Assignment {
    constructor(
      public id: number,
      public date: Date,
      public user: User,
      public mission: Mission
    ) {
  
    }
  }
