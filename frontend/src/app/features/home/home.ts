import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filters } from '../filters/filters';
import { Slider } from '../../shared/components/slider/slider';
import { Card } from '../../shared/components/card/card';
import { Region } from '../../models/region.model';
import { regions } from '../../data/regions.data'; 
@Component({
  selector: 'main[app-home]',
  imports: [CommonModule, Card, Filters, Slider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {  
  regions: Region[] = regions;
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
