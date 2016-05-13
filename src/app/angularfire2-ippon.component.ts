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
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  
}
