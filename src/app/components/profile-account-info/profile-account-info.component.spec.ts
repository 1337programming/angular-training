import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountInfoComponent } from './profile-account-info.component';

describe('ProfileAccountInfoComponent', () => {
  let component: ProfileAccountInfoComponent;
  let fixture: ComponentFixture<ProfileAccountInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccountInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
