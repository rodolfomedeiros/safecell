import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeViewComponent } from './free-view.component';

describe('FreeViewComponent', () => {
  let component: FreeViewComponent;
  let fixture: ComponentFixture<FreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
