import { Component, computed, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { User } from '../user/user.component';

import { DUMMY_TASKS } from '../dummy-tasks';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

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
