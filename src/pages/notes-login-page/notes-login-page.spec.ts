import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesLoginPage } from './notes-login-page';

describe('NotesLoginPage', () => {
  let component: NotesLoginPage;
  let fixture: ComponentFixture<NotesLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesLoginPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
