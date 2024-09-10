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

  // Zmienna kontrolująca styl tekstu (kolor)
  textColor = 'black';

  // Metoda do zmiany klasy CSS
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  // Metoda do zmiany koloru tekstu
  changeTextColor() {
    this.textColor = this.textColor === 'black' ? 'blue' : 'black';
  }
}
