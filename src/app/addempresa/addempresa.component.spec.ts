import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempresaComponent } from './addempresa.component';

describe('AddempresaComponent', () => {
  let component: AddempresaComponent;
  let fixture: ComponentFixture<AddempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
