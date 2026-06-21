import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSideNavbar } from './notes-side-navbar';

describe('NotesSideNavbar', () => {
  let component: NotesSideNavbar;
  let fixture: ComponentFixture<NotesSideNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesSideNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesSideNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
