import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private openClosed = new Subject<string>();
  public itemsHandler = this.openClosed.asObservable();

  constructor() { }

  setItems(items: string) {
    this.openClosed.next(items);
  }
}
