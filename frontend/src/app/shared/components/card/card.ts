import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../tag/tag';
import { Button } from '../button/button';

// Mockeos
export interface CardBreakdownItem {
  label: string;
  value: number;
}

export interface CardBreakdown {
  priceBeforeTax: CardBreakdownItem;
  tax: CardBreakdownItem;
  loremIpsum: CardBreakdownItem;
  finalPrice: CardBreakdownItem;
}


export interface CardData {
  image: string;
  tag: string;
  destination: string;
  duration: string;
  title: string;
  price: number;
  breakdown: CardBreakdown;

}

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
