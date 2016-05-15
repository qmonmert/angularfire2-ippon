import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'app-items-observable',
  templateUrl: 'items-observable.component.html'
})
export class ItemsObservableComponent {

  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;
  
  constructor(af: AngularFire) {
    this.sizeSubject = new Subject();
    this.items = af.database.list('/items-observable', {
      query: {
        orderByChild: 'type',
        equalTo: this.sizeSubject
      }
    });
  }

  filterBy(type: string) {
    this.sizeSubject.next(type); 
  }

}
