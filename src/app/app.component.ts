import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'woroniecki-pawel-pr08';

  activeMenuItem: String = "";
  onActivateMenuItem(itemName: String) {
    this.activeMenuItem = itemName;
    console.log(itemName);
    }
}
