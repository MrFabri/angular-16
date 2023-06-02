import { Component, inject } from '@angular/core';
import { DataService } from '@services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.scss'],
})
export class SubcompComponent {
  private dataService = inject(DataService);
  public subjectMessage$!: Observable<string>;

  constructor() {
    this.subjectMessage$ = this.dataService.messageSubject;
  }
}
