import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  constructor(private router: Router){
    this.initRedirect();
  }

  initRedirect(){
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },4000)
  }

}
