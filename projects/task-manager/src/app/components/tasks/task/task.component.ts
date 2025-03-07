import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '@tasks-models/task.model';
import { CardComponent } from '@tasks-shared/card/card.component';
import { TasksService } from '@tasks-services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task | null>();

  tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.deleteTask(this.task()?.id);
  }
}
