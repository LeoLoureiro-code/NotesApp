import { Component } from '@angular/core';
import { TextEditorComponent } from "../text-editor/text-editor.component";

@Component({
  selector: 'notes-content',
  standalone: true,
  imports: [TextEditorComponent],
  templateUrl: './notes-content.component.html',
  styleUrl: './notes-content.component.scss'
})
export class NotesContentComponent {

}
