import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Checkbox } from '../../shared/components/checkbox/checkbox';

@Component({
  selector: 'aside[app-filters]',
  imports: [CommonModule, FormsModule, Checkbox],
  host: { class: 'filters' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  @Output() filterChange = new EventEmitter<string[]>();
  @Output() close = new EventEmitter<void>();

  isAventuraOpen = true;
  isPrecioOpen = false;

  minPrice: number | null = null;
  maxPrice: number | null = null;

  aventuraOptions = [
    { label: 'Quads', checked: false, tooltip: 'prueba quad' },
    { label: 'Parapente', checked: false, tooltip: 'prueba parapente' },
    { label: 'Rafting', checked: false, tooltip: 'prueba rafting' },
    { label: 'Explora', checked: false, tooltip: 'prueba exploración' },
    { label: 'Buceo', checked: false, tooltip: 'prueba buceo' },
    { label: 'Paracaídas', checked: false, tooltip: 'prueba paracaídas' },
    { label: 'Snowboard', checked: false, tooltip: 'prueba snowboard' },
    { label: 'Surf', checked: false, tooltip: 'prueba surf' },
  ];

  toggleAventura() {
    this.isAventuraOpen = !this.isAventuraOpen;    
  }

  togglePrecio() {
    this.isPrecioOpen = !this.isPrecioOpen;
  }

  onCheckboxChange(label: string, checked: boolean) {
    const option = this.aventuraOptions.find(o => o.label === label);
    if (option) option.checked = checked;

    const selected = this. aventuraOptions
      .filter(o => o.checked)
      .map( o=> o.label);

      this.filterChange.emit(selected);
  }
}
