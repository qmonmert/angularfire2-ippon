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
import { ItemsObservableComponent } from './items-observable.component';

describe('Component: ItemsObservable', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ItemsObservableComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ItemsObservableComponent],
      (component: ItemsObservableComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ItemsObservableComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ItemsObservableComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-items-observable></app-items-observable>
  `,
  directives: [ItemsObservableComponent]
})
class ItemsObservableComponentTestController {
}

