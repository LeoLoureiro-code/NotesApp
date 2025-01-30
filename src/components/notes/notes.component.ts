import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'notes',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

}
