import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodrobnostiIzdelkaComponent } from './podrobnosti-izdelka.component';

describe('PodrobnostiIzdelkaComponent', () => {
  let component: PodrobnostiIzdelkaComponent;
  let fixture: ComponentFixture<PodrobnostiIzdelkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodrobnostiIzdelkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodrobnostiIzdelkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
