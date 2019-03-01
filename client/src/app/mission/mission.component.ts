import { Component, OnInit } from '@angular/core';
import { Mission } from '../model/Mission';
import { MissionService } from '../services/mission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  missions: Mission[];

  displayedColumns: string[] = ['id', 'title', 'acronyme', 'color'];

  constructor(private missionService: MissionService,
    private router: Router) { }

  ngOnInit() {
    this.loadMissions();
  }

  loadMissions() {
    this.missionService.list().subscribe(
      response => this.missions = response,
      error => console.log(error)
    )
  }

  createMission() {
    this.router.navigate(["mission", -1])
  }

  updateMission(id) {
    this.router.navigate(["mission", id])
  }
}
