import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../tag/tag';
import { Button } from '../button/button';
import { CardData } from '../../../models/card.model';

@Component({
  selector: 'article[app-card]',
  imports: [CommonModule, Tag, Button],
  host: { class: 'card' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() data!: CardData;
  isBreakdownOpen = false;

  toggleBreakdown() {
    this.isBreakdownOpen = !this.isBreakdownOpen;
  }
}
