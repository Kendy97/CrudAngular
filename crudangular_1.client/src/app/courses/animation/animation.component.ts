import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [
    trigger('otworzZamknij', [
      state('otwarty', style({
        height: '800px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('zamkniety', style({
        height: '0px',
        opacity: 0.5,    
      })),
      transition('otwarty => zamkniety', [
        animate('2.5s')
      ]),
      transition('zamkniety => otwarty', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class AnimationComponent {

  stan = 'otwarty';

  toggle() {
    this.stan = this.stan === 'otwarty' ? 'zamkniety' : 'otwarty';
  }
}
