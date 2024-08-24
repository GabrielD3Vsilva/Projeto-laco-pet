import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexToUserComponent } from './index-to-user.component';

describe('IndexToUserComponent', () => {
  let component: IndexToUserComponent;
  let fixture: ComponentFixture<IndexToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexToUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
