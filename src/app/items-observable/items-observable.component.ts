import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'app-items-observable',
  templateUrl: 'items-observable.component.html'
})
export class ItemsObservableComponent {

  items: FirebaseListObservable<any[]>;
  typeSubject: Subject<any>;
  
  constructor(af: AngularFire) {
    this.typeSubject = new Subject();
    this.items = af.database.list('/items-observable', {
      query: {
        orderByChild: 'type',
        equalTo: this.typeSubject
      }
    });
  }

  filterBy(type: string) {
    this.typeSubject.next(type); 
  }

}
