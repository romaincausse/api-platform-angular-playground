import { Injectable } from '@angular/core';
import { Mission, MissionAdapter } from '../model/Mission';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { missionsList } from '../model/mock/missions.data';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(
    private http: HttpClient,
    private adapter: MissionAdapter
    ) { }

  list():Observable<Mission[]> {
    return this.http.get(`${API_URL}/missions/`).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

  getMissionById(mission_id: number): Observable<Mission> {
    return this.http.get(`${API_URL}/missions/${mission_id}`).pipe(
      map((item: any) => this.adapter.adapt(item)),
    );
  }

  create(mission: Mission) {
    return this.http.post(`${API_URL}/missions/`, mission);
  }

  update(id: number, mission: Mission) {
    return this.http.put(`${API_URL}/missions/${id}`, mission);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/missions/${id}`);
  }
}
