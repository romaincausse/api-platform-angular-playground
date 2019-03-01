import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MissionService } from 'src/app/services/mission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Mission } from 'src/app/model/Mission';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  missionForm: FormGroup
  id: number = null;
  mission: Mission

  constructor(
    private formBuilder: FormBuilder,
    private missionService: MissionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();

    this.id = this.route.snapshot.params['id'];
    this.mission = new Mission(this.id, "", "", "", "", null, null, null)

    if (this.id != -1) {
      this.missionService.getMissionById(this.id)
        .subscribe(
          response => {
            this.mission = response;
            this.missionForm.patchValue(this.mission)
          }
        )
    }
  }

  initForm() {
    this.missionForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      acronyme: ['', [Validators.required]],
      color: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required]
    }
    );
  }

  onSaveMission() {
    this.mission = { ...this.missionForm.value }

    if (this.id == -1) {

      this.mission.publicationDate = new Date();
      this.missionService.create(this.mission).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["mission"])
        }
      )
    } else {
      this.missionService.update(this.id, this.mission).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["mission"])
        }
      )
    }
  }

  delete() {
    this.missionService.delete(this.id).subscribe(
      data => this.router.navigate(['mission'])
    );
  }
}
