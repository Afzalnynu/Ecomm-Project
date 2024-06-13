import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommunationComponent } from './child-communation.component';

describe('ChildCommunationComponent', () => {
  let component: ChildCommunationComponent;
  let fixture: ComponentFixture<ChildCommunationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCommunationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCommunationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
