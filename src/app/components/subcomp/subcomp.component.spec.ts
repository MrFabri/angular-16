import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompComponent } from './subcomp.component';

describe('SubcompComponent', () => {
  let component: SubcompComponent;
  let fixture: ComponentFixture<SubcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcompComponent]
    });
    fixture = TestBed.createComponent(SubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
