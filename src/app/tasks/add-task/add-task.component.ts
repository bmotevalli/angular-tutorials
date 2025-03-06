import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  cancel = output<void>();
  add = output<Task>();

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmitTask() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
  }
}
