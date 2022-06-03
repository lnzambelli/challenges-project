import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnciclopediaComponent } from './enciclopedia.component';

describe('EnciclopediaComponent', () => {
  let component: EnciclopediaComponent;
  let fixture: ComponentFixture<EnciclopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnciclopediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnciclopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
