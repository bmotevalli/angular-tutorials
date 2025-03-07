import { Injectable, signal } from '@angular/core';
import { Task } from '@tasks-models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Task[]>([]);

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string | undefined) {
    if (userId) {
      return this.tasks().filter((r) => r.userId === userId);
    }
    return [];
  }

  deleteTask(taskId: string | undefined) {
    if (taskId) {
      this.tasks.set(this.tasks().filter((r) => r.id !== taskId));
      this.saveTasks();
    }
  }

  addNewTask(task: Task, userId: string | undefined) {
    if (userId) {
      this.tasks.set([
        {
          ...task,
          userId: userId,
          id: new Date().toDateString(),
        },
        ...this.tasks(),
      ]);
      this.saveTasks();
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
