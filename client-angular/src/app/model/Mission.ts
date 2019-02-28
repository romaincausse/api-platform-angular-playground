import { Injectable } from '@angular/core';
import { Adapter } from './adapter/adapter';

import { Assignment } from './Assignment';
export class Mission {

    public assignments: Array<Assignment>

    constructor(
      public id: number,
      public title: string,
      public acronyme: string,
      public description: string,
      public color: string,
      public publicationDate: Date,
      public startDate: Date,
      public dueDate: Date,
    ) {
  
    }
  }

@Injectable({
    providedIn: 'root'
})
export class MissionAdapter implements Adapter<Mission> {

  adapt(item: any): Mission {
    return new Mission(
      item.id,
      item.title,
      item.acronyme,
      item.description,
      item.color,
      item.publicationDate,
      item.startDate,
      item.dueDate
    );
  }
}