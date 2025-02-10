import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaTaskComponent } from './pesquisa-task.component';

describe('PesquisaTaskComponent', () => {
  let component: PesquisaTaskComponent;
  let fixture: ComponentFixture<PesquisaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
