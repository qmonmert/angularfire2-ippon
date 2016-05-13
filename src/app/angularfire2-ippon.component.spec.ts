import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angularfire2IpponAppComponent } from '../app/angularfire2-ippon.component';

beforeEachProviders(() => [Angularfire2IpponAppComponent]);

describe('App: Angularfire2Ippon', () => {
  it('should create the app',
      inject([Angularfire2IpponAppComponent], (app: Angularfire2IpponAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angularfire2-ippon works!\'',
      inject([Angularfire2IpponAppComponent], (app: Angularfire2IpponAppComponent) => {
    expect(app.title).toEqual('angularfire2-ippon works!');
  }));
});
