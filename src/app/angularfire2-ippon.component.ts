import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ItemsObservableComponent } from './items-observable/items-observable.component';

@Component({
  moduleId: module.id,
  selector: 'angularfire2-ippon-app',
  templateUrl: 'angularfire2-ippon.component.html',
  directives: [ItemsObservableComponent]
})
export class Angularfire2IpponAppComponent {

  items: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  
  addItem(textNewItem: string) {
    this.items.push({ text: textNewItem });
  }
  
  updateItem(keyItem: string, textUpdateItem: string) {
    this.items.update(keyItem, { text: textUpdateItem });
  }
  
  deleteItem(keyItem: string) {
    this.items.remove(keyItem);
  }
  
  deleteAllItems() {
    this.items.remove();
  }
  
}
