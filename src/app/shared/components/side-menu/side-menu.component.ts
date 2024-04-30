import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItemsModel } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  @Input('menuItems') menuItems: IMenuItemsModel[]=[];

  constructor(private router: Router){}

  closeNav() {
    let shand = document.getElementsByClassName('sidenav') as HTMLCollectionOf<HTMLElement>;
    let outShand = document.getElementsByClassName('main') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
        shand[0].style.width = '0px';
        outShand[0].style.marginLeft= "0";
      }
    // @ts-ignore: Object is possibly 'null'.
  }

  goOva(link: string, ref:any, position:number){
    this.router.navigate([link]);

    var items = document.querySelectorAll('.menu li');
    console.log(items, 'ITEMS');
  items.forEach(function(item) {
    item.classList.remove('active');
  });
  
  ref.target.classList.add('active');
  }

}
