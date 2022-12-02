import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildownComponent } from './childown.component';

describe('ChildownComponent', () => {
  let component: ChildownComponent;
  let fixture: ComponentFixture<ChildownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
