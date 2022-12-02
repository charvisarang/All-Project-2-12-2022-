import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AysncComponent } from './aysnc.component';

describe('AysncComponent', () => {
  let component: AysncComponent;
  let fixture: ComponentFixture<AysncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AysncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AysncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
