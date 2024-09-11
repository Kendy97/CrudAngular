import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  isHighlighted = false;


  textColor = 'black';


  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
  changeTextColor() {
    this.textColor = this.textColor === 'black' ? 'blue' : 'black';
  }
}
