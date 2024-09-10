import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  standalone: true,
  imports: [],
  templateUrl: './renderer2.component.html',
  styleUrl: './renderer2.component.css'
})
export class Renderer2Component {
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('myDiv2') myDiv2!: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.myDiv.nativeElement, 'background-color', 'blue');
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
    this.renderer.setStyle(this.myDiv2.nativeElement, 'background-color', this.getRandomColor());
    this.renderer.setStyle(this.myDiv.nativeElement, 'background-color', this.getRandomColor());
  }
}
