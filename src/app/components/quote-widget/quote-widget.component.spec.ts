import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteWidgetComponent } from './quote-widget.component';

describe('QuoteWidgetComponent', () => {
  let component: QuoteWidgetComponent;
  let fixture: ComponentFixture<QuoteWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
