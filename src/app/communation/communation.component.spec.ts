import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunationComponent } from './communation.component';

describe('CommunationComponent', () => {
  let component: CommunationComponent;
  let fixture: ComponentFixture<CommunationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
