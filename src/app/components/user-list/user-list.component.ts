import { Component, OnInit, inject } from '@angular/core';
import { User, DataService } from '@services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  private dataService = inject(DataService);

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
