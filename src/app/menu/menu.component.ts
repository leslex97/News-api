import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggedUser } from '../domain/LoggedUser';
import { UserInfoService } from '../services/user-info.service';
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
  userName: any;
  userIsAdmin: Boolean;
  userInfo: UserInfoService;

  constructor(private userInfoService: UserInfoService) {
    this.userInfo = new UserInfoService();
    this.userName = this.userInfo.getLoggedUserData().fullname();
    this.userIsAdmin = this.userName.isAdmin;
    this.menuLoginIsActive = false;
    this.menuStartIsActive = true;
    this.menuAddNewsIsActive = false;
    this.menuNewsListIsActive = false;
    this.menuAdminIsActive = false;
  }




  ngOnInit(): void {}
}
