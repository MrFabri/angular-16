import { Component, inject } from '@angular/core';
import { DataService, User } from '@services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private dataService = inject(DataService);
  title = 'angular16';

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
