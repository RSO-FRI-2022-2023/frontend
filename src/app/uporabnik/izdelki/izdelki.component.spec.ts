import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdelkiComponent } from './izdelki.component';

describe('IzdelkiComponent', () => {
  let component: IzdelkiComponent;
  let fixture: ComponentFixture<IzdelkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdelkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdelkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
