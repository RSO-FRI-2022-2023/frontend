import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriljubljeniIzdelkiComponent } from './priljubljeni-izdelki.component';

describe('PriljubljeniIzdelkiComponent', () => {
  let component: PriljubljeniIzdelkiComponent;
  let fixture: ComponentFixture<PriljubljeniIzdelkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriljubljeniIzdelkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriljubljeniIzdelkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
