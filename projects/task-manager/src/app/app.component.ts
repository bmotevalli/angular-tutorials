import { Component, signal } from '@angular/core';
import { HeaderComponent } from '@tasks-components/header/header.component';
import { UserComponent } from '@tasks-components/user/user.component';
import { TasksComponent } from '@tasks-components/tasks/tasks.component';

import { DUMMY_USERS } from '@tasks-assets/data/dummy-users';
import { User } from '@tasks-models/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;

  selectedUser = signal<User | null>(null);

  onSelectUser(id: string) {
    this.selectedUser.set(this.users.find((r) => r.id === id)!);
    // this.selectUser.set(this.users.filter((r) => r.id === id)[0]);
  }
}
