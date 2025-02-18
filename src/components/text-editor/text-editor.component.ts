import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'text-editor',
  standalone: true,
  imports: [],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {
  @ViewChild('editor', { static: true }) editor!: ElementRef<HTMLDivElement>;

  formatText(command: string) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');

    if (command === 'bold') {
      span.style.fontWeight = 'bold';
    } else if (command === 'italic') {
      span.style.fontStyle = 'italic';
    } else if (command === 'underline') {
      span.style.textDecoration = 'underline';
    }

    span.appendChild(range.extractContents());
    range.insertNode(span);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  changeTextSize(event: Event) {
    const newSize = (event.target as HTMLSelectElement).value;
    const selection = window.getSelection();
    
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
    
    if (selection.toString().length > 0) {
      const span = document.createElement('span');
      span.style.fontSize = newSize;
      span.appendChild(range.extractContents());
      range.insertNode(span);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  

  onContentChange(event: Event) {
    const content = (event.target as HTMLDivElement).innerHTML;
    console.log('Editor Content:', content);
  }

  saveContent() {
    console.log("Saved Content:", this.editor.nativeElement.innerHTML);
  }
}
