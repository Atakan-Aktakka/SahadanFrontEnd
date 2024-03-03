import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegueAddComponent } from './legue-add.component';

describe('LegueAddComponent', () => {
  let component: LegueAddComponent;
  let fixture: ComponentFixture<LegueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegueAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
