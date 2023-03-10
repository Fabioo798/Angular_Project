import { Component } from '@angular/core';
import { MenuItems } from 'projects/core/src/types/menu.interface';

@Component({
  selector: 'sdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items: MenuItems[]
  constructor(){
    this.items = [
      {path:'home', label: 'home'},
      {path:'about', label: 'about'},
      {path: 'users', label: 'users'}
    ]
  }
}
