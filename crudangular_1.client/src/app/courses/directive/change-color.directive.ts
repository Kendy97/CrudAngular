import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  @HostListener('click')
  onClick(event: Event) {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(this.el.nativeElement, 'background-color', randomColor);
  }

}
