import { Component, Input } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public touched:boolean = false;

  @Input('title') title: string = '';

  constructor(){}

  openNav() {
    if(!this.touched){
      let shand = document.getElementsByClassName('sidenav') as HTMLCollectionOf<HTMLElement>;
      let outShand = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLElement>;
        if (shand.length != 0) {
          shand[0].style.width = '250px';
          outShand[0].style.marginLeft = '250px';
        }
      this.touched = true;
      // @ts-ignore: Object is possibly 'null'.
    } else {
      let shand = document.getElementsByClassName('sidenav') as HTMLCollectionOf<HTMLElement>;
      let outShand = document.getElementsByClassName('main') as HTMLCollectionOf<HTMLElement>;
      if (shand.length != 0) {
          shand[0].style.width = '0px';
          outShand[0].style.marginLeft= "0";
        }
        this.touched = false;
      // @ts-ignore: Object is possibly 'null'.
    }
  }
}
