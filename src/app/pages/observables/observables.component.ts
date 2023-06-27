import { Component, inject } from '@angular/core';
import { DataService, User } from '@services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  private dataService = inject(DataService);

  public user$!: Observable<User>;
  public subject: string = '';
  public subjectMessage$!: Observable<string>;

  constructor() {
    this.user$ = this.dataService.getUser(1);
    this.subjectMessage$ = this.dataService.messageSubject;
  }

  updateSubject() {
    this.dataService.editMessageSubject = this.subject;
  }
}
