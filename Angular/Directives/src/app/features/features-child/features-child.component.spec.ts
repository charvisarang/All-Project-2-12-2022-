import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesChildComponent } from './features-child.component';

describe('FeaturesChildComponent', () => {
  let component: FeaturesChildComponent;
  let fixture: ComponentFixture<FeaturesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
