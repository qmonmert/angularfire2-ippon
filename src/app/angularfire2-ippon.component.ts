import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'angularfire2-ippon-app',
  templateUrl: 'angularfire2-ippon.component.html',
  styleUrls: ['angularfire2-ippon.component.css']
})
export class Angularfire2IpponAppComponent {

  items: FirebaseListObservable<any[]>;
  nbItems: number = 0;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  
  addItem(textNewItem: string) {
    this.items.push( { text: textNewItem } );
    textNewItem = '';
  }
  
  updateItem(keyItem: string, textUpdateItem: string) {
    this.items.update(keyItem, {text: textUpdateItem});
  }
  
  deleteItem(keyItem: string) {
    this.items.remove(keyItem);
  }
  
  deleteAllItems() {
    this.items.remove();
  }
  
}
