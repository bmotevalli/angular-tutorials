import { Component, signal, input, effect } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { User } from '../user/user.model';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // name = input<string>();
  user = input<User | null>(null);

  isAddingTask = signal<boolean>(false);

  // Use a writable signal
  userTasks = signal<Task[]>([]);

  constructor(private taskService: TasksService) {
    effect(() => {
      this.userTasks.set(this.taskService.getUserTasks(this.user()?.id));
    });
  }

  onOpenNewTaskDialog() {
    this.isAddingTask.set(true);
  }

  onCloseTask() {
    this.isAddingTask.set(false);
  }
}
