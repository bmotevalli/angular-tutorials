import { Component, computed, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { Task } from './task/task.model';

import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // name = input<string>();
  user = input<User | null>(null);

  userTasks = computed<Task[]>(() =>
    DUMMY_TASKS.filter((r) => r.userId === this.user()?.id)
  );
}
