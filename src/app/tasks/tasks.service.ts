import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(DUMMY_TASKS);

  getUserTasks(userId: string | undefined) {
    if (userId) {
      return this.tasks().filter((r) => r.userId === userId);
    }
    return [];
  }

  deleteTask(taskId: string | undefined) {
    if (taskId) {
      this.tasks.set(this.tasks().filter((r) => r.id !== taskId));
    }
  }

  addNewTask(task: Task, userId: string | undefined) {
    if (!userId) {
      return;
    }
    this.tasks.set([
      {
        ...task,
        userId: userId,
        id: new Date().toDateString(),
      },
      ...this.tasks(),
    ]);
  }
}
