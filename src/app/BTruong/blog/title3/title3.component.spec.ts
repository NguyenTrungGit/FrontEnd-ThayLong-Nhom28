import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title3Component } from './title3.component';

describe('Title3Component', () => {
  let component: Title3Component;
  let fixture: ComponentFixture<Title3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Title3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Title3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
