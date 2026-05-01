import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardData } from '../../shared/components/card/card';

interface Region {
  name: string;
  cards: CardData[];
}
@Component({
  selector: 'main[app-home]',
  imports: [CommonModule, Card],
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
}
