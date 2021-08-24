import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPainelComponent } from './filtro-painel.component';

describe('FiltroPainelComponent', () => {
  let component: FiltroPainelComponent;
  let fixture: ComponentFixture<FiltroPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
