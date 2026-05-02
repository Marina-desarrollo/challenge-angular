import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

export interface SlideData {
  tag?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonUrl: string;
}

@Component({
  selector: 'section[app-slider]',
  imports: [CommonModule, Button],  
  host: { class: 'slider' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  currentIndex = 0;

  slides: SlideData[] = [
    {
      tag: 'Pending Approval',
      title: 'Ruta por Australia',
      description: 'Si te va la aventura, no te lo puedes perder',
      image: 'images/wallpaper.png',
      buttonText: 'Más información',
      buttonUrl: '#'
    },
    {
      title: 'Descubre Marruecos',
      description: 'Si te va la aventura, no te lo puedes perder',
      image: 'images/jurassic-park.webp',
      buttonText: 'Más información',
      buttonUrl: '#'
    },
    {
      title: 'Descubre Bangkok',
      description: 'Si te va la aventura, no te lo puedes perder',
      image: 'images/Alhambra.jpg',
      buttonText: 'Más información',
      buttonUrl: '#'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
  
}
