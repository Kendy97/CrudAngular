import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  standalone: true,
  imports: [],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {

  @ViewChild('myDiv') myDiv!: ElementRef;


  ngAfterViewInit() {
  
    const randomColor = this.getRandomColor();
    this.myDiv.nativeElement.style.backgroundColor = randomColor;
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  @HostListener('click')
  onClick() {
    const randomColor = this.getRandomColor();
    this.myDiv.nativeElement.style.backgroundColor = randomColor;
  }


}
