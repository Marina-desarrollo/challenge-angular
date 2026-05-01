import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardData } from '../../shared/components/card/card';
import { Filters } from '../filters/filters';

interface Region {
  name: string;
  cards: CardData[];
}
@Component({
  selector: 'main[app-home]',
  imports: [CommonModule, Card, Filters],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  regions: Region[] = [
    {
      name: "Asia",
      cards: [
        {
          image: 'images/bangkok.png',
          tag: 'Quads',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Parapente',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Rafting',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        }
      ]
    },
    {
      name: "Asia",
      cards: [
        {
          image: 'images/bangkok.png',
          tag: 'Parapente',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Quads',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Quads',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        }
      ]
    },
    {
      name: "Asia",
      cards: [
        {
          image: 'images/bangkok.png',
          tag: 'Parapente',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Rafting',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        },
        {
          image: 'images/bangkok.png',
          tag: 'Quads',
          destination: 'Marruecos, África',
          duration: '9 días',
          title: 'Descubre Bangkok con Iberojet',
          price: 248.00,
          breakdown: {
            priceBeforeTax: { label: 'Precio antes de impuestos', value: 1124.00 },
            tax: { label: 'Impuesto', value: 150.00 },
            loremIpsum: { label: 'Lorem', value: 160.00 },
            finalPrice: { label: 'Precio final', value: 2455.00 }
          }
        }
      ]
    }
  ];

  selectedTags: string[] = [];

  get filteredRegions() {
    if (this.selectedTags.length=== 0) return this.regions;
    return this.regions.map(region => ({
      ...region,
      cards: region.cards.filter(card =>
        this.selectedTags.includes(card.tag)
      )
    })).filter(region => region.cards.length > 0);
  }

  onFilterChange(tags: string[]) {
    this.selectedTags = tags;
  }

  isFiltersOpen = false;

  toggleFilters() {
    this.isFiltersOpen = !this.isFiltersOpen;
  }
}
