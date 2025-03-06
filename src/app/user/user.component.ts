import {
  Component,
  input,
  computed,
  Output,
  EventEmitter,
  output,
  signal,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() name!: string;
  // @Input() avatar!: string;
  user = input.required<User>();
  selected = input.required<boolean>();
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
