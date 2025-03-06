import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.component';

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
