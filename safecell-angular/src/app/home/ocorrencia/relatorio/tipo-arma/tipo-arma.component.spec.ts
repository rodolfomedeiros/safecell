import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArmaComponent } from './tipo-arma.component';

describe('TipoArmaComponent', () => {
  let component: TipoArmaComponent;
  let fixture: ComponentFixture<TipoArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
