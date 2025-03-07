import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@tasks-shared/card/card.component';
import { TasksService } from '@tasks-services/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  close = output<void>();
  userId = input.required<string | undefined>();

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  tasksService = inject(TasksService);

  onCloseTask() {
    this.close.emit();
  }

  onSubmitTask() {
    this.tasksService.addNewTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
