import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { NotesContentComponent } from "../notes-content/notes-content.component";
import { HeaderComponent } from "../header/header.component";
import { TextEditorComponent } from "../text-editor/text-editor.component";

@Component({
  selector: 'notes',
  standalone: true,
  imports: [NavigationComponent, NotesContentComponent, HeaderComponent, TextEditorComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

}
