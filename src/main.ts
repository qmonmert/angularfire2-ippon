import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angularfire2IpponAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angularfire2IpponAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://popping-fire-9851.firebaseio.com/')
]);
