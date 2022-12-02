import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoneventComponent } from './buttonevent.component';

describe('ButtoneventComponent', () => {
  let component: ButtoneventComponent;
  let fixture: ComponentFixture<ButtoneventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoneventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtoneventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
