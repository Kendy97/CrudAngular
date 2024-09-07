import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './1.component.html',
  styleUrl: './1.component.css'
})
export class FirstComponent {

  @ViewChildren('key') keys!: QueryList<ElementRef>;

  @HostListener('window:keydown', ['$event'])
  playSound(event: KeyboardEvent) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
    const keyElement = this.keys.find(el => el.nativeElement.dataset.key === String(event.keyCode));

    if (!audio || !keyElement) return;


    keyElement.nativeElement.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  removeTransition(event: TransitionEvent) {
    if (event.propertyName !== 'transform') return;
    (event.target as HTMLElement).classList.remove('playing');
  }

  ngAfterViewInit() {
    this.keys.forEach(key => {
      key.nativeElement.addEventListener('transitionend', this.removeTransition);
    });
  }






}
