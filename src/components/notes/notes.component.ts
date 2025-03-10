import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { NotesContentComponent } from "../notes-content/notes-content.component";
import { HeaderComponent } from "../header/header.component";
import { TextEditorComponent } from "../text-editor/text-editor.component";
import { AllNotesComponent } from "../all-notes/all-notes.component";
import { MobileNavigationComponent } from "../mobile-navigation/mobile-navigation.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'notes',
  standalone: true,
  imports: [NavigationComponent, NotesContentComponent, HeaderComponent, TextEditorComponent, AllNotesComponent, MobileNavigationComponent, ModalComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  isVisible = true; 

  openModal() {
    this.isVisible = true; 
  }

  closeModal() {
    this.isVisible = false; 
  }

  handleConfirmAction() {
    console.log('Action confirmed!');
    this.isVisible = false; 
  }
}
