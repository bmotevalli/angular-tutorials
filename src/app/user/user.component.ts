import {
  Component,
  input,
  computed,
  Output,
  EventEmitter,
  output,
  signal,
} from '@angular/core';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() name!: string;
  // @Input() avatar!: string;
  user = input.required<User>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  imagePath = computed<string>(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
