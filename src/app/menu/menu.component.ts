import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output()
  activateMenuItemEvent: EventEmitter<String> = new EventEmitter();
  menuStartIsActive: boolean;
  menuLoginIsActive: boolean;
  menuNewsListIsActive: boolean;
  menuAddNewsIsActive: boolean;
  menuAdminIsActive: boolean;
  userName: string;
  userIsAdmin: boolean = true;

  constructor() {
    this.userName = 'nie zalogowano';
    this.menuLoginIsActive = false;
    this.menuStartIsActive = true;
    this.menuAddNewsIsActive = false;
    this.menuNewsListIsActive = false;
    this.menuAdminIsActive = false;
  }

  deactivateMenu(this: any) {
    this.menuLoginIsActive = false;
    this.menuStartIsActive = false;
    this.menuAddNewsIsActive = false;
    this.menuNewsListIsActive = false;
  }

  activateMenuItem(itemName: string) {
    this.deactivateMenu();
    switch (itemName) {
      case 'START':
        this.menuStartIsActive = true;
        break;
      case 'NEWS_LIST':
        this.menuNewsListIsActive = true;
        break;
      case 'ADD_NEWS':
        this.menuAddNewsIsActive = true;
        break;
      case 'LOGIN':
        this.menuLoginIsActive = true;
        break;
      case 'ADMIN':
        this.menuAdminIsActive = true;
        break;
    }
    this.activateMenuItemEvent.emit(itemName);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.userName = 'Jan Kowalski';
    }, 5000);
  }
}
