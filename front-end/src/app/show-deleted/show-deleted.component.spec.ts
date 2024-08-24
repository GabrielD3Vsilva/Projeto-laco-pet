import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeletedComponent } from './show-deleted.component';

describe('ShowDeletedComponent', () => {
  let component: ShowDeletedComponent;
  let fixture: ComponentFixture<ShowDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDeletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
