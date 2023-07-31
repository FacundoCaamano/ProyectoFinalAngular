import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDalogComponent } from './user-form-dalog.component';

describe('UserFormDalogComponent', () => {
  let component: UserFormDalogComponent;
  let fixture: ComponentFixture<UserFormDalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormDalogComponent]
    });
    fixture = TestBed.createComponent(UserFormDalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
