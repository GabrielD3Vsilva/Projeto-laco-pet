import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexToAdmComponent } from './index-to-adm.component';

describe('IndexToAdmComponent', () => {
  let component: IndexToAdmComponent;
  let fixture: ComponentFixture<IndexToAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexToAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexToAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
