import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[app-footer]',
  imports: [],
  host: { class: 'footer' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
