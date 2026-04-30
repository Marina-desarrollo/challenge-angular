import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  host: {
    '[class]': '"btn btn--" + variant + " btn--" + size',
    '[disabled]': 'disabled || null',
  },
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: 'primary' | 'accent' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'base' | 'lg' = 'base';
  @Input() disabled: boolean = false;
}
