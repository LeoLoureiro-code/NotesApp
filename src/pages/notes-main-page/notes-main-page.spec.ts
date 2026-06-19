import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMainPage } from './notes-main-page';

describe('NotesMainPage', () => {
  let component: NotesMainPage;
  let fixture: ComponentFixture<NotesMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
