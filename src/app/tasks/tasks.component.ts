import { Component, signal, input, effect } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { User } from '../user/user.model';
import { Task } from './task/task.model';

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

  constructor() {
    // Auto-update `userTasks` whenever `user` changes
    effect(() => {
      this.userTasks.set(
        DUMMY_TASKS.filter((r) => r.userId === this.user()?.id)
      );
    });
  }

  onTaskComplete(taskId: string | undefined) {
    this.userTasks.set(this.userTasks().filter((r: Task) => r.id !== taskId));
  }

  onAddNewTask() {
    this.isAddingTask.set(true);
  }

  onCancelTask() {
    this.isAddingTask.set(false);
  }

  onSubmitTask(task: Task) {
    const tasks = this.userTasks();
    tasks.unshift({
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: this.user()?.id,
      id: new Date().toDateString(),
    });
    this.userTasks.set(tasks);
    this.isAddingTask.set(false);
  }
}
