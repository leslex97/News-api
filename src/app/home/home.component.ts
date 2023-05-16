import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName: string;
  welcomeAnnouncement: string;
  constructor() {
  this.appName = "NWS - News With Source";
  this.welcomeAnnouncement = 'Witamy na nowej stronie z newsami!';
  }
  ngOnInit(): void {

  }    
}
