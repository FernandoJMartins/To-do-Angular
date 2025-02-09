import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTaskComponent } from './listagem-task.component';

describe('ListagemTaskComponent', () => {
  let component: ListagemTaskComponent;
  let fixture: ComponentFixture<ListagemTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
