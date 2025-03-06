import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  cancel = output();
  submit = output();

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmitTask() {
    this.submit.emit();
  }
}
