import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { SlideData } from '../../../models/slide.model';
import { slides } from '../../../data/slides.data';

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

  slides: SlideData[] = slides;

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
