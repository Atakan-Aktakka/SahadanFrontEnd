import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegueComponent } from './legue.component';

describe('LegueComponent', () => {
  let component: LegueComponent;
  let fixture: ComponentFixture<LegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
