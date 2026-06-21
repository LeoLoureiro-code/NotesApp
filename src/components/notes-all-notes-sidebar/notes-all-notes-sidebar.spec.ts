import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAllNotesSidebar } from './notes-all-notes-sidebar';

describe('NotesAllNotesSidebar', () => {
  let component: NotesAllNotesSidebar;
  let fixture: ComponentFixture<NotesAllNotesSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAllNotesSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesAllNotesSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
