import { Component } from '@angular/core';
import { MENU_W_COMUNICATION } from './constants/menu.constant';
import { IMenuItemsModel } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public menu : IMenuItemsModel[] = MENU_W_COMUNICATION;

  constructor() {}

/* Set the width of the side navigation to 0 */
closeNav() {
  let shand = document.getElementsByClassName('sidenav') as HTMLCollectionOf<HTMLElement>

    if (shand.length != 0) {
      shand[0].style.width = '0px';
    }
}

}
