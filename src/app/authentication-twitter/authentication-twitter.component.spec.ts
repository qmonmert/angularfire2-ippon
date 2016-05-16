import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthenticationTwitterComponent } from './authentication-twitter.component';

describe('Component: AuthenticationTwitter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AuthenticationTwitterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AuthenticationTwitterComponent],
      (component: AuthenticationTwitterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AuthenticationTwitterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AuthenticationTwitterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-authentication-twitter></app-authentication-twitter>
  `,
  directives: [AuthenticationTwitterComponent]
})
class AuthenticationTwitterComponentTestController {
}

