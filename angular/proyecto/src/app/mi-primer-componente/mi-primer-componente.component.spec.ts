import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrimerComponenteComponent } from './mi-primer-componente.component';

describe('MiPrimerComponenteComponent', () => {
  let component: MiPrimerComponenteComponent;
  let fixture: ComponentFixture<MiPrimerComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPrimerComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPrimerComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
