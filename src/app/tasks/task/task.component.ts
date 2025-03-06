import { Component, input, output } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task | null>();

  complete = output<string | undefined>();

  onComplete() {
    this.complete.emit(this.task()?.id);
  }
}
