import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { NotesContentComponent } from "../notes-content/notes-content.component";
import { HeaderComponent } from "../header/header.component";
import { TextEditorComponent } from "../text-editor/text-editor.component";
import { AllNotesComponent } from "../all-notes/all-notes.component";

@Component({
  selector: 'notes',
  standalone: true,
  imports: [NavigationComponent, NotesContentComponent, HeaderComponent, TextEditorComponent, AllNotesComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

}
