import { Component, ViewEncapsulation } from '@angular/core';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'nav[app-navbar]',
  imports: [Button],
  host: { class: 'navbar' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;  
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }  
}
