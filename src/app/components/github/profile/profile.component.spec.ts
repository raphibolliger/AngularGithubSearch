import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: GitHubProfileComponent;
  let fixture: ComponentFixture<GitHubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
