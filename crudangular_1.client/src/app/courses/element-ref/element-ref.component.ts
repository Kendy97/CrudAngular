import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  standalone: true,
  imports: [],
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.css'
})
export class ElementRefComponent {

  @ViewChild('myDiv') myDiv!: ElementRef;

  ngAfterViewInit() {
    this.myDiv.nativeElement.style.backgroundColor = 'red';
  }
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  changeColor() {
    this.myDiv.nativeElement.style.backgroundColor = this.getRandomColor();
  }
}
