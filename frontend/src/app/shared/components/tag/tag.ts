import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'span[app-tag]',
  imports: [],
  host: {
    '[class]': '"tag tag--" + variant',
  },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() label: string = '';
}
