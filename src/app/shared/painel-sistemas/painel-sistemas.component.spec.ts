import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSistemasComponent } from './painel-sistemas.component';

describe('PainelSistemasComponent', () => {
  let component: PainelSistemasComponent;
  let fixture: ComponentFixture<PainelSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
