import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoTopoComponent } from './secao-topo.component';

describe('SecaoTopoComponent', () => {
  let component: SecaoTopoComponent;
  let fixture: ComponentFixture<SecaoTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
