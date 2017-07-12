import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangCaraComponent } from './lang-cara.component';

describe('LangCaraComponent', () => {
  let component: LangCaraComponent;
  let fixture: ComponentFixture<LangCaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangCaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangCaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
