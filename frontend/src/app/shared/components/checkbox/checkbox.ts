import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'label[app-checkbox]',
  imports: [],
  host: { class: 'checkbox' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() tooltip: string = 'Prueba';
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(input.checked);
  }
}
