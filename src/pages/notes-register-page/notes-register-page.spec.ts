import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRegisterPage } from './notes-register-page';

describe('NotesRegisterPage', () => {
  let component: NotesRegisterPage;
  let fixture: ComponentFixture<NotesRegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesRegisterPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
