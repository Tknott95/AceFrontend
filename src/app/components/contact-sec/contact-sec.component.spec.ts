import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSecComponent } from './contact-sec.component';

describe('ContactSecComponent', () => {
  let component: ContactSecComponent;
  let fixture: ComponentFixture<ContactSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
